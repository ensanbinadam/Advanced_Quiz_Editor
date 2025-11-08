
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Question, QuestionType } from './types';
import { ensureQuestionSanity, stripHtml } from './utils/quizUtils';
import EditorPanel from './components/EditorPanel';
import QuestionList from './components/QuestionList';
import { PlusIcon, UploadIcon, DownloadIcon, TrashIcon } from './components/Icons';

const STORAGE_KEY = "quiz_editor_react_v1";

const App: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const initializeState = useCallback(() => {
        try {
            const rawState = localStorage.getItem(STORAGE_KEY);
            if (rawState) {
                const parsedState = JSON.parse(rawState);
                if (Array.isArray(parsedState.questions) && parsedState.questions.length > 0) {
                    const sanitizedQuestions = parsedState.questions.map((q: any) => ensureQuestionSanity(q));
                    setQuestions(sanitizedQuestions);
                    const newIndex = parsedState.currentQuestionIndex >= sanitizedQuestions.length ? 0 : parsedState.currentQuestionIndex;
                    setCurrentQuestionIndex(newIndex || 0);
                    return;
                }
            }
        } catch (error) {
            console.error("Failed to restore state:", error);
            localStorage.removeItem(STORAGE_KEY);
        }

        const initialQuestion = ensureQuestionSanity({ type: 'multiple-choice' });
        setQuestions([initialQuestion]);
        setCurrentQuestionIndex(0);
    }, []);

    useEffect(() => {
        initializeState();
    }, [initializeState]);

    useEffect(() => {
        try {
            const stateToSave = JSON.stringify({ questions, currentQuestionIndex });
            localStorage.setItem(STORAGE_KEY, stateToSave);
        } catch (error) {
            console.error("Failed to save state:", error);
            alert("فشل حفظ الحالة. قد يكون حجم الاختبار كبيرًا جدًا.");
        }
    }, [questions, currentQuestionIndex]);

    const handleUpdateQuestion = (updatedQuestion: Question) => {
        const newQuestions = [...questions];
        newQuestions[currentQuestionIndex] = updatedQuestion;
        setQuestions(newQuestions);
    };

    const handleAddNewQuestion = (index: number = -1) => {
        const newQuestion = ensureQuestionSanity({ type: 'multiple-choice' });
        const newQuestions = [...questions];
        const insertionIndex = index === -1 ? questions.length : index;
        newQuestions.splice(insertionIndex, 0, newQuestion);
        setQuestions(newQuestions);
        setCurrentQuestionIndex(insertionIndex);
    };
    
    const handleSaveAndAddNew = () => {
        handleAddNewQuestion(currentQuestionIndex + 1);
    }

    const handleSelectQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
    };

    const handleDeleteQuestion = (index: number) => {
        if (questions.length <= 1) {
            alert("لا يمكن حذف السؤال الوحيد!");
            return;
        }
        if (window.confirm(`هل أنت متأكد من حذف السؤال رقم ${index + 1}؟`)) {
            const newQuestions = questions.filter((_, i) => i !== index);
            setQuestions(newQuestions);
            if (currentQuestionIndex >= index) {
                setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
            }
        }
    };

    const handleDuplicateQuestion = (index: number) => {
        const questionToDuplicate = JSON.parse(JSON.stringify(questions[index]));
        const newQuestions = [...questions];
        newQuestions.splice(index + 1, 0, questionToDuplicate);
        setQuestions(newQuestions);
        setCurrentQuestionIndex(index + 1);
    };

    const handleQuestionDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleQuestionDrop = (targetIndex: number) => {
        if (draggedIndex === null || draggedIndex === targetIndex) {
            setDraggedIndex(null);
            return;
        }

        const newQuestions = [...questions];
        const [draggedItem] = newQuestions.splice(draggedIndex, 1);
        newQuestions.splice(targetIndex, 0, draggedItem);
        
        let newCurrentIndex = currentQuestionIndex;
        if (currentQuestionIndex === draggedIndex) {
            newCurrentIndex = targetIndex;
        } else if (draggedIndex < currentQuestionIndex && targetIndex >= currentQuestionIndex) {
            newCurrentIndex--;
        } else if (draggedIndex > currentQuestionIndex && targetIndex <= currentQuestionIndex) {
            newCurrentIndex++;
        }
        
        setQuestions(newQuestions);
        setCurrentQuestionIndex(newCurrentIndex);
        setDraggedIndex(null);
    };
    
    const handleImport = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result as string;
                const data = JSON.parse(text);
                if (!Array.isArray(data)) throw new Error("Invalid format");
                const sanitizedQuestions = data.map(q => ensureQuestionSanity(q));
                setQuestions(sanitizedQuestions);
                setCurrentQuestionIndex(0);
            } catch (err) {
                alert("تعذر قراءة ملف الأسئلة. تأكد من صحة الصيغة.");
                console.error(err);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    };

    const handleExport = () => {
        if (questions.length === 0) {
            alert("لا توجد أسئلة لتصديرها!");
            return;
        }
        const dataStr = JSON.stringify(questions, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "quiz_questions.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleReset = () => {
        if(window.confirm('سيتم مسح جميع الأسئلة الحالية. هل تريد المتابعة؟')){
            localStorage.removeItem(STORAGE_KEY);
            initializeState();
        }
    };
    
    const currentQuestion = questions[currentQuestionIndex] || null;

    return (
        <div className="min-h-screen text-gray-800 p-4 lg:p-6">
            <div className="container mx-auto max-w-7xl">
                <header className="text-center p-6 bg-white rounded-xl shadow-md mb-6">
                    <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">محرر الأسئلة المطور</h1>
                    <p className="text-gray-600 mt-2">
                        أنشئ وحرر أسئلة اختبارك ثم قم بتصديرها للاستخدام في الاختبار التفاعلي.
                    </p>
                </header>

                <div className="flex flex-wrap justify-center gap-3 p-4 bg-white rounded-xl shadow-md mb-6">
                    <button onClick={handleImport} className="flex items-center gap-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow">
                        <UploadIcon /> استيراد الأسئلة
                    </button>
                    <button onClick={handleExport} className="flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors shadow">
                        <DownloadIcon /> تصدير الأسئلة
                    </button>
                    <button onClick={() => handleAddNewQuestion(-1)} className="flex items-center gap-2 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors shadow">
                        <PlusIcon /> إضافة سؤال جديد
                    </button>
                    <button onClick={handleReset} className="flex items-center gap-2 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors shadow">
                        <TrashIcon /> مسح كل الأسئلة
                    </button>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".json,application/json" className="hidden" />
                </div>

                <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        {currentQuestion && (
                            <EditorPanel
                                key={currentQuestionIndex}
                                question={currentQuestion}
                                onUpdate={handleUpdateQuestion}
                                questionNumber={currentQuestionIndex + 1}
                                onSaveAndNew={handleSaveAndAddNew}
                            />
                        )}
                    </div>
                    <div className="lg:col-span-1">
                        <QuestionList
                            questions={questions}
                            currentQuestionIndex={currentQuestionIndex}
                            onSelectQuestion={handleSelectQuestion}
                            onDeleteQuestion={handleDeleteQuestion}
                            onDuplicateQuestion={handleDuplicateQuestion}
                            onAddNewQuestion={handleAddNewQuestion}
                            onDragStart={handleQuestionDragStart}
                            onDrop={handleQuestionDrop}
                        />
                    </div>
                </main>

                <footer className="mt-8 text-center p-4 bg-white rounded-lg shadow-sm">
                    <a href="https://t.me/Interact2030" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                        برمجة و تصميم/ ملتقى التعليم التفاعلي بملتقى معلمي ومعلمات الرياضيات ـ المملكة العربية السعودية
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default App;
