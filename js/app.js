import React from 'react';
import ReactDOM from 'react-dom/client';

// ICONS (Transpiled from components/Icons.tsx)
const UploadIcon = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), React.createElement("polyline", { points: "17 8 12 3 7 8" }), React.createElement("line", { x1: "12", y1: "3", x2: "12", y2: "15" }));
const DownloadIcon = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), React.createElement("polyline", { points: "7 10 12 15 17 10" }), React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" }));
const PlusIcon = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }));
const TrashIcon = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("polyline", { points: "3 6 5 6 21 6" }), React.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }));
const Edit = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }), React.createElement("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }));
const Copy = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), React.createElement("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }));
const Plus = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M5 12h14" }), React.createElement("path", { d: "M12 5v14" }));
const Trash2 = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M3 6h18" }), React.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }), React.createElement("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }), React.createElement("line", { x1: "10", x2: "10", y1: "11", y2: "17" }), React.createElement("line", { x1: "14", x2: "14", y1: "11", y2: "17" }));
const GripVertical = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("circle", { cx: "9", cy: "12", r: "1" }), React.createElement("circle", { cx: "9", cy: "5", r: "1" }), React.createElement("circle", { cx: "9", cy: "19", r: "1" }), React.createElement("circle", { cx: "15", cy: "12", r: "1" }), React.createElement("circle", { cx: "15", cy: "5", r: "1" }), React.createElement("circle", { cx: "15", cy: "19", r: "1" }));
const ImageUp = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L13 16" }), React.createElement("path", { d: "m17 22 5-5" }), React.createElement("path", { d: "M22 22h-5v-5" }), React.createElement("circle", { cx: "9", cy: "9", r: "2" }));
const ClipboardPaste = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M15 2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2Z" }), React.createElement("path", { d: "M9 2v4h6V2" }), React.createElement("path", { d: "M12 12v6" }), React.createElement("path", { d: "m15 15-3 3-3-3" }));
const AudioLines = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M2 10v3" }), React.createElement("path", { d: "M6 6v11" }), React.createElement("path", { d: "M10 3v18" }), React.createElement("path", { d: "M14 8v7" }), React.createElement("path", { d: "M18 5v13" }), React.createElement("path", { d: "M22 10v3" }));
const Save = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }), React.createElement("polyline", { points: "17 21 17 13 7 13 7 21" }), React.createElement("polyline", { points: "7 3 7 8 15 8" }));
const PlusCircle = ({ size = 20, className }) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className }, React.createElement("circle", { cx: "12", cy: "12", r: "10" }), React.createElement("path", { d: "M8 12h8" }), React.createElement("path", { d: "M12 8v8" }));

// UTILS (Transpiled from utils/quizUtils.ts)
function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}
function ensureQuestionSanity(q) {
    const baseQuestion = {
        type: q.type || 'multiple-choice',
        reading: q.reading || { text: '', image: null, audio: null },
        question: q.question || { text: '', image: null },
    };
    switch (baseQuestion.type) {
        case 'multiple-choice': {
            const options = q.options || [];
            while (options.length < 4) {
                options.push({ text: '', image: null });
            }
            return {
                ...baseQuestion,
                type: 'multiple-choice',
                options: options.slice(0, 4),
                correct: q.correct || 0,
            };
        }
        case 'fill-in-the-blank':
            return { ...baseQuestion, type: 'fill-in-the-blank', correctAnswer: q.correctAnswer || '' };
        case 'true-false':
            return { ...baseQuestion, type: 'true-false', correctAnswer: q.correctAnswer === false ? false : true };
        case 'short-answer':
            return { ...baseQuestion, type: 'short-answer', correctAnswer: q.correctAnswer || '' };
        case 'matching': {
            const pairs = q.pairs || [];
            while (pairs.length < 4) {
                pairs.push({ prompt: { text: '', image: null }, answer: { text: '', image: null } });
            }
            return { ...baseQuestion, type: 'matching', pairs: pairs.slice(0, 4) };
        }
        case 'ordering': {
            const items = q.items || [];
            while (items.length < 5) {
                items.push({ text: '', image: null });
            }
            const sanitizedItems = items.slice(0, 5).map((item) => {
                if (typeof item === 'string') {
                    return { text: item, image: null };
                }
                return item || { text: '', image: null };
            });
            return { ...baseQuestion, type: 'ordering', items: sanitizedItems };
        }
        default:
            return ensureQuestionSanity({ type: 'multiple-choice' });
    }
}

// QUESTION LIST COMPONENT (Transpiled from components/QuestionList.tsx)
const QuestionList = ({ questions, currentQuestionIndex, onSelectQuestion, onDeleteQuestion, onDuplicateQuestion, onAddNewQuestion, onDragStart, onDrop, }) => {
    const [dragOverIndex, setDragOverIndex] = React.useState(null);
    const questionTypeMap = {
        'multiple-choice': 'اختيار من متعدد',
        'fill-in-the-blank': 'املأ الفراغ',
        'true-false': 'صح/خطأ',
        'short-answer': 'إجابة قصيرة',
        'matching': 'مطابقة',
        'ordering': 'ترتيب'
    };
    const handleDragOver = (e, index) => {
        e.preventDefault();
        setDragOverIndex(index);
    };
    return React.createElement("div", { className: "bg-white p-4 rounded-xl shadow-md sticky top-6" }, React.createElement("div", { className: "text-center border-b pb-3 mb-3" }, React.createElement("h3", { className: "text-xl font-bold text-gray-800" }, "قائمة الأسئلة (", questions.length, ")"), React.createElement("p", { className: "text-sm text-gray-500" }, "اسحب وأفلت لإعادة الترتيب")), React.createElement("ul", { className: "space-y-2 max-h-[75vh] overflow-y-auto pr-2" }, questions.map((q, index) => {
        const isActive = index === currentQuestionIndex;
        const previewText = stripHtml(q.question.text || 'سؤال فارغ').substring(0, 50) + '...';
        return (React.createElement("li", { key: index, draggable: true, onDragStart: () => onDragStart(index), onDragOver: (e) => handleDragOver(e, index), onDragLeave: () => setDragOverIndex(null), onDrop: () => onDrop(index), className: `p-3 rounded-lg border-2 transition-all duration-200 cursor-pointer group ${isActive
                ? 'bg-blue-100 border-blue-500 shadow-md'
                : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:bg-blue-50'} ${dragOverIndex === index ? 'transform scale-105 bg-blue-200' : ''}` }, React.createElement("div", { className: "flex items-start gap-2" }, React.createElement("div", { className: "flex-shrink-0 cursor-grab text-gray-400 group-hover:text-gray-600 pt-1" }, React.createElement(GripVertical, null)), React.createElement("div", { className: "flex-grow", onClick: () => onSelectQuestion(index) }, React.createElement("div", { className: "flex justify-between items-center" }, React.createElement("span", { className: "font-bold text-gray-800" }, "السؤال ", index + 1), React.createElement("span", { className: "text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full" }, questionTypeMap[q.type])), React.createElement("p", { className: "text-sm text-gray-600 mt-1" }, previewText))), React.createElement("div", { className: "flex justify-end gap-2 mt-2 pt-2 border-t border-gray-200" }, React.createElement("button", { title: "تعديل", onClick: () => onSelectQuestion(index), className: "p-1.5 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-100" }, React.createElement(Edit, { size: 16 })), React.createElement("button", { title: "نسخ", onClick: () => onDuplicateQuestion(index), className: "p-1.5 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-100" }, React.createElement(Copy, { size: 16 })), React.createElement("button", { title: "إدراج سؤال", onClick: () => onAddNewQuestion(index + 1), className: "p-1.5 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-indigo-100" }, React.createElement(Plus, { size: 16 })), React.createElement("button", { title: "حذف", onClick: () => onDeleteQuestion(index), className: "p-1.5 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-100" }, React.createElement(Trash2, { size: 16 })))));
    })));
};

// EDITOR PANEL COMPONENT (Transpiled from components/EditorPanel.tsx)
const MediaInput = ({ label, image, onImageChange, audio, onAudioChange }) => {
    const imageInputRef = React.useRef(null);
    const audioInputRef = React.useRef(null);
    const handleFileChange = (e, setter) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setter(event.target?.result);
            reader.readAsDataURL(file);
        }
        e.target.value = '';
    };
    const handlePaste = async (setter) => {
        try {
            const items = await navigator.clipboard.read();
            const imageItem = items.find(item => item.types.some(t => t.startsWith('image/')));
            if (imageItem) {
                const type = imageItem.types.find(t => t.startsWith('image/'));
                const blob = await imageItem.getType(type);
                const reader = new FileReader();
                reader.onload = (e) => setter(e.target?.result);
                reader.readAsDataURL(blob);
            }
            else {
                alert('لا توجد صورة في الحافظة.');
            }
        }
        catch (err) {
            console.error('Paste error:', err);
            alert('فشل لصق الصورة. قد تحتاج إلى منح الإذن بالوصول إلى الحافظة.');
        }
    };
    return (React.createElement("div", { className: "space-y-4" }, React.createElement("h3", { className: "font-semibold text-gray-700" }, label), React.createElement("div", { className: "flex items-center gap-2" }, React.createElement("button", { onClick: () => imageInputRef.current?.click(), className: "flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-md transition-colors" }, React.createElement(ImageUp, { size: 16 }), " صورة"), React.createElement("input", { type: "file", ref: imageInputRef, onChange: (e) => handleFileChange(e, onImageChange), accept: "image/*", className: "hidden" }), React.createElement("button", { onClick: () => handlePaste(onImageChange), className: "flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-md transition-colors" }, React.createElement(ClipboardPaste, { size: 16 }), " لصق"), image && (React.createElement("button", { onClick: () => onImageChange(null), className: "flex items-center gap-2 text-sm bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded-md transition-colors" }, React.createElement(Trash2, { size: 16 }), " حذف"))), image && React.createElement("img", { src: image, alt: "Preview", className: "mt-2 rounded-lg border-2 border-dashed border-gray-300 p-1 max-h-40 object-contain" }), onAudioChange && (React.createElement(React.Fragment, null, React.createElement("div", { className: "flex items-center gap-2" }, React.createElement("button", { onClick: () => audioInputRef.current?.click(), className: "flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-md transition-colors" }, React.createElement(AudioLines, { size: 16 }), " صوت"), React.createElement("input", { type: "file", ref: audioInputRef, onChange: (e) => handleFileChange(e, onAudioChange), accept: "audio/*", className: "hidden" }), audio && (React.createElement("button", { onClick: () => onAudioChange(null), className: "flex items-center gap-2 text-sm bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded-md transition-colors" }, React.createElement(Trash2, { size: 16 }), " حذف"))), audio && React.createElement("audio", { src: audio, controls: true, className: "mt-2 w-full" })))));
};
const EditorPanel = ({ question, onUpdate, questionNumber, onSaveAndNew }) => {
    const [localQuestion, setLocalQuestion] = React.useState(question);
    const handleChange = (key, value) => {
        setLocalQuestion(prev => ({ ...prev, [key]: value }));
    };
    const handleNestedChange = (part, key, value) => {
        setLocalQuestion(prev => ({
            ...prev,
            [part]: {
                ...prev[part],
                [key]: value
            }
        }));
    };
    const handleSave = () => {
        onUpdate(localQuestion);
    };
    const handleTypeChange = (e) => {
        const newType = e.target.value;
        const newQuestionState = {
            type: newType,
            reading: localQuestion.reading,
            question: localQuestion.question,
        };
        if (newType === 'multiple-choice') {
            newQuestionState.options = Array(4).fill(0).map(() => ({ text: '', image: null }));
            newQuestionState.correct = 0;
        }
        else if (newType === 'true-false') {
            newQuestionState.correctAnswer = true;
        }
        else if (newType === 'fill-in-the-blank' || newType === 'short-answer') {
            newQuestionState.correctAnswer = '';
        }
        else if (newType === 'matching') {
            newQuestionState.pairs = Array(4).fill(0).map(() => ({ prompt: { text: '', image: null }, answer: { text: '', image: null } }));
        }
        else if (newType === 'ordering') {
            newQuestionState.items = Array(5).fill({ text: '', image: null });
        }
        onUpdate(newQuestionState);
        setLocalQuestion(newQuestionState);
    };
    const renderEditorFields = () => {
        switch (localQuestion.type) {
            case 'multiple-choice':
                return (React.createElement("div", { className: "space-y-4" }, React.createElement("label", { className: "font-semibold text-lg text-gray-800" }, "الخيارات (يجب تحديد الإجابة الصحيحة)"), localQuestion.options.map((opt, index) => (React.createElement("div", { key: index, className: "p-3 bg-white rounded-lg border" }, React.createElement("div", { className: "flex items-center gap-3 mb-2" }, React.createElement("input", { type: "radio", name: "correctOption", checked: localQuestion.correct === index, onChange: () => handleChange('correct', index), className: "form-radio h-5 w-5 text-blue-600" }), React.createElement("input", { type: "text", placeholder: `الخيار ${index + 1}`, value: opt.text, onChange: (e) => {
                        const newOptions = [...localQuestion.options];
                        newOptions[index].text = e.target.value;
                        handleChange('options', newOptions);
                    }, className: "flex-grow p-2 border rounded-md" })), React.createElement(MediaInput, { label: "", image: opt.image, onImageChange: (img) => {
                        const newOptions = [...localQuestion.options];
                        newOptions[index].image = img;
                        handleChange('options', newOptions);
                    } }))))));
            case 'fill-in-the-blank':
                return (React.createElement("div", null, React.createElement("label", { htmlFor: "correctAnswer", className: "font-semibold text-lg text-gray-800" }, "الإجابة الصحيحة:"), React.createElement("input", { id: "correctAnswer", type: "text", value: localQuestion.correctAnswer, onChange: (e) => handleChange('correctAnswer', e.target.value), className: "w-full mt-2 p-2 border rounded-md", placeholder: "اكتب الإجابة هنا..." }), React.createElement("p", { className: "text-sm text-gray-500 mt-2" }, "ملاحظة: يمكنك وضع عدة إجابات صحيحة بفصلها بعلامة | (مثال: إجابة1|إجابة2)")));
            case 'true-false':
                return (React.createElement("div", { className: "space-y-2" }, React.createElement("label", { className: "font-semibold text-lg text-gray-800" }, "الإجابة الصحيحة:"), React.createElement("div", { className: "flex gap-4" }, React.createElement("label", { className: "flex items-center gap-2 cursor-pointer" }, React.createElement("input", { type: "radio", name: "tf-answer", checked: localQuestion.correctAnswer === true, onChange: () => handleChange('correctAnswer', true), className: "form-radio h-5 w-5 text-blue-600" }), "صح"), React.createElement("label", { className: "flex items-center gap-2 cursor-pointer" }, React.createElement("input", { type: "radio", name: "tf-answer", checked: localQuestion.correctAnswer === false, onChange: () => handleChange('correctAnswer', false), className: "form-radio h-5 w-5 text-blue-600" }), "خطأ"))));
            case 'short-answer':
                return (React.createElement("div", null, React.createElement("label", { htmlFor: "shortAnswer", className: "font-semibold text-lg text-gray-800" }, "الإجابات الصحيحة المحتملة:"), React.createElement("textarea", { id: "shortAnswer", value: localQuestion.correctAnswer, onChange: (e) => handleChange('correctAnswer', e.target.value), className: "w-full mt-2 p-2 border rounded-md h-24", placeholder: "اكتب الإجابات هنا..." }), React.createElement("p", { className: "text-sm text-gray-500 mt-2" }, "اكتب الإجابات الصحيحة المحتملة. افصل بين كل إجابة بعلامة | . سيتم التحقق من تطابق إجابة الطالب مع أي من هذه الإجابات.")));
            case 'matching':
                return (React.createElement("div", { className: "space-y-4" }, React.createElement("label", { className: "font-semibold text-lg text-gray-800" }, "أزواج المطابقة (بحد أقصى 4 أزواج):"), localQuestion.pairs.map((pair, index) => (React.createElement("div", { key: index, className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-3 bg-white rounded-lg border" }, React.createElement("div", { className: "space-y-2" }, React.createElement("input", { type: "text", placeholder: `العنصر ${index + 1}`, value: pair.prompt.text, onChange: (e) => {
                        const newPairs = [...localQuestion.pairs];
                        newPairs[index].prompt.text = e.target.value;
                        handleChange('pairs', newPairs);
                    }, className: "w-full p-2 border rounded-md" }), React.createElement(MediaInput, { label: "", image: pair.prompt.image, onImageChange: (img) => {
                        const newPairs = [...localQuestion.pairs];
                        newPairs[index].prompt.image = img;
                        handleChange('pairs', newPairs);
                    } })), React.createElement("div", { className: "space-y-2" }, React.createElement("input", { type: "text", placeholder: `الإجابة ${index + 1}`, value: pair.answer.text, onChange: (e) => {
                        const newPairs = [...localQuestion.pairs];
                        newPairs[index].answer.text = e.target.value;
                        handleChange('pairs', newPairs);
                    }, className: "w-full p-2 border rounded-md" }), React.createElement(MediaInput, { label: "", image: pair.answer.image, onImageChange: (img) => {
                        const newPairs = [...localQuestion.pairs];
                        newPairs[index].answer.image = img;
                        handleChange('pairs', newPairs);
                    } })))))));
            case 'ordering':
                return (React.createElement("div", { className: "space-y-4" }, React.createElement("label", { className: "font-semibold text-lg text-gray-800" }, "عناصر الترتيب (بالترتيب الصحيح، بحد أقصى 5):"), localQuestion.items.map((item, index) => (React.createElement("div", { key: index, className: "p-3 bg-white rounded-lg border space-y-2" }, React.createElement("input", { type: "text", placeholder: `العنصر ${index + 1} (نص)`, value: item.text, onChange: (e) => {
                        const newItems = [...localQuestion.items];
                        newItems[index] = { ...newItems[index], text: e.target.value };
                        handleChange('items', newItems);
                    }, className: "w-full p-2 border rounded-md" }), React.createElement(MediaInput, { label: "", image: item.image, onImageChange: (img) => {
                        const newItems = [...localQuestion.items];
                        newItems[index] = { ...newItems[index], image: img };
                        handleChange('items', newItems);
                    } })))), React.createElement("p", { className: "text-sm text-gray-500 mt-2" }, "املأ العناصر التي تريدها بالترتيب الصحيح. يمكن أن يكون كل عنصر نصًا أو صورة أو كليهما. سيتم تجاهل الحقول الفارغة. يجب ملء عنصرين على الأقل.")));
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-md space-y-6" }, React.createElement("h2", { className: "text-2xl font-bold text-blue-600 border-b pb-3" }, "تحرير السؤال ", React.createElement("span", { className: "text-gray-500 font-medium" }, "(", questionNumber, ")")), React.createElement("div", { className: "p-4 bg-gray-50 rounded-lg border" }, React.createElement("label", { htmlFor: "questionType", className: "font-semibold text-gray-700" }, "نوع السؤال:"), React.createElement("select", { id: "questionType", value: localQuestion.type, onChange: handleTypeChange, className: "w-full mt-2 p-2 border rounded-md bg-white" }, React.createElement("option", { value: "multiple-choice" }, "اختيار من متعدد"), React.createElement("option", { value: "fill-in-the-blank" }, "املأ الفراغ"), React.createElement("option", { value: "true-false" }, "صح / خطأ"), React.createElement("option", { value: "short-answer" }, "إجابة قصيرة"), React.createElement("option", { value: "matching" }, "مطابقة"), React.createElement("option", { value: "ordering" }, "ترتيب"))), React.createElement("div", { className: "p-4 bg-gray-50 rounded-lg border space-y-3" }, React.createElement("label", { className: "font-semibold text-gray-700" }, "النص القرائي (اختياري):"), React.createElement("textarea", { placeholder: "اكتب النص هنا...", value: localQuestion.reading.text, onChange: (e) => handleNestedChange('reading', 'text', e.target.value), className: "w-full p-2 border rounded-md h-28" }), React.createElement(MediaInput, { label: "", image: localQuestion.reading.image, onImageChange: (img) => handleNestedChange('reading', 'image', img), audio: localQuestion.reading.audio, onAudioChange: (aud) => handleNestedChange('reading', 'audio', aud) })), React.createElement("div", { className: "p-4 bg-gray-50 rounded-lg border space-y-3" }, React.createElement("label", { className: "font-semibold text-gray-700" }, "نص السؤال:"), React.createElement("input", { type: "text", placeholder: "اكتب السؤال هنا...", value: localQuestion.question.text, onChange: (e) => handleNestedChange('question', 'text', e.target.value), className: "w-full p-2 border rounded-md" }), React.createElement(MediaInput, { label: "", image: localQuestion.question.image, onImageChange: (img) => handleNestedChange('question', 'image', img) })), React.createElement("div", { className: "p-4 bg-gray-50 rounded-lg border" }, renderEditorFields()), React.createElement("div", { className: "flex flex-wrap justify-center gap-4 pt-4 border-t" }, React.createElement("button", { onClick: handleSave, className: "flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-600 transition-colors shadow" }, React.createElement(Save, null), " حفظ التعديلات"), React.createElement("button", { onClick: onSaveAndNew, className: "flex items-center gap-2 bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors shadow" }, React.createElement(PlusCircle, null), " حفظ وإضافة جديد"))));
};


// APP COMPONENT (Transpiled from App.tsx)
const App = () => {
    const [questions, setQuestions] = React.useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [draggedIndex, setDraggedIndex] = React.useState(null);
    const fileInputRef = React.useRef(null);
    const initializeState = React.useCallback(() => {
        try {
            const rawState = localStorage.getItem("quiz_editor_react_v1");
            if (rawState) {
                const parsedState = JSON.parse(rawState);
                if (Array.isArray(parsedState.questions) && parsedState.questions.length > 0) {
                    const sanitizedQuestions = parsedState.questions.map((q) => ensureQuestionSanity(q));
                    setQuestions(sanitizedQuestions);
                    const newIndex = parsedState.currentQuestionIndex >= sanitizedQuestions.length ? 0 : parsedState.currentQuestionIndex;
                    setCurrentQuestionIndex(newIndex || 0);
                    return;
                }
            }
        }
        catch (error) {
            console.error("Failed to restore state:", error);
            localStorage.removeItem("quiz_editor_react_v1");
        }
        const initialQuestion = ensureQuestionSanity({ type: 'multiple-choice' });
        setQuestions([initialQuestion]);
        setCurrentQuestionIndex(0);
    }, []);
    React.useEffect(() => {
        initializeState();
    }, [initializeState]);
    React.useEffect(() => {
        try {
            const stateToSave = JSON.stringify({ questions, currentQuestionIndex });
            localStorage.setItem("quiz_editor_react_v1", stateToSave);
        }
        catch (error) {
            console.error("Failed to save state:", error);
            alert("فشل حفظ الحالة. قد يكون حجم الاختبار كبيرًا جدًا.");
        }
    }, [questions, currentQuestionIndex]);
    const handleUpdateQuestion = (updatedQuestion) => {
        const newQuestions = [...questions];
        newQuestions[currentQuestionIndex] = updatedQuestion;
        setQuestions(newQuestions);
    };
    const handleAddNewQuestion = (index = -1) => {
        const newQuestion = ensureQuestionSanity({ type: 'multiple-choice' });
        const newQuestions = [...questions];
        const insertionIndex = index === -1 ? questions.length : index;
        newQuestions.splice(insertionIndex, 0, newQuestion);
        setQuestions(newQuestions);
        setCurrentQuestionIndex(insertionIndex);
    };
    const handleSaveAndAddNew = () => {
        handleAddNewQuestion(currentQuestionIndex + 1);
    };
    const handleSelectQuestion = (index) => {
        setCurrentQuestionIndex(index);
    };
    const handleDeleteQuestion = (index) => {
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
    const handleDuplicateQuestion = (index) => {
        const questionToDuplicate = JSON.parse(JSON.stringify(questions[index]));
        const newQuestions = [...questions];
        newQuestions.splice(index + 1, 0, questionToDuplicate);
        setQuestions(newQuestions);
        setCurrentQuestionIndex(index + 1);
    };
    const handleQuestionDragStart = (index) => {
        setDraggedIndex(index);
    };
    const handleQuestionDrop = (targetIndex) => {
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
        }
        else if (draggedIndex < currentQuestionIndex && targetIndex >= currentQuestionIndex) {
            newCurrentIndex--;
        }
        else if (draggedIndex > currentQuestionIndex && targetIndex <= currentQuestionIndex) {
            newCurrentIndex++;
        }
        setQuestions(newQuestions);
        setCurrentQuestionIndex(newCurrentIndex);
        setDraggedIndex(null);
    };
    const handleImport = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result;
                const data = JSON.parse(text);
                if (!Array.isArray(data))
                    throw new Error("Invalid format");
                const sanitizedQuestions = data.map(q => ensureQuestionSanity(q));
                setQuestions(sanitizedQuestions);
                setCurrentQuestionIndex(0);
            }
            catch (err) {
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
        if (window.confirm('سيتم مسح جميع الأسئلة الحالية. هل تريد المتابعة؟')) {
            localStorage.removeItem("quiz_editor_react_v1");
            initializeState();
        }
    };
    const currentQuestion = questions[currentQuestionIndex] || null;
    return (React.createElement("div", { className: "min-h-screen text-gray-800 p-4 lg:p-6" }, React.createElement("div", { className: "container mx-auto max-w-7xl" }, React.createElement("header", { className: "text-center p-6 bg-white rounded-xl shadow-md mb-6" }, React.createElement("h1", { className: "text-3xl lg:text-4xl font-bold text-blue-600" }, "محرر الأسئلة المطور"), React.createElement("p", { className: "text-gray-600 mt-2" }, "أنشئ وحرر أسئلة اختبارك ثم قم بتصديرها للاستخدام في الاختبار التفاعلي.")), React.createElement("div", { className: "flex flex-wrap justify-center gap-3 p-4 bg-white rounded-xl shadow-md mb-6" }, React.createElement("button", { onClick: handleImport, className: "flex items-center gap-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow" }, React.createElement(UploadIcon, null), " استيراد الأسئلة"), React.createElement("button", { onClick: handleExport, className: "flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors shadow" }, React.createElement(DownloadIcon, null), " تصدير الأسئلة"), React.createElement("button", { onClick: () => handleAddNewQuestion(-1), className: "flex items-center gap-2 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors shadow" }, React.createElement(PlusIcon, null), " إضافة سؤال جديد"), React.createElement("button", { onClick: handleReset, className: "flex items-center gap-2 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors shadow" }, React.createElement(TrashIcon, null), " مسح كل الأسئلة"), React.createElement("input", { type: "file", ref: fileInputRef, onChange: handleFileChange, accept: ".json,application/json", className: "hidden" })), React.createElement("main", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, React.createElement("div", { className: "lg:col-span-2" }, currentQuestion && (React.createElement(EditorPanel, { key: currentQuestionIndex, question: currentQuestion, onUpdate: handleUpdateQuestion, questionNumber: currentQuestionIndex + 1, onSaveAndNew: handleSaveAndAddNew }))), React.createElement("div", { className: "lg:col-span-1" }, React.createElement(QuestionList, { questions: questions, currentQuestionIndex: currentQuestionIndex, onSelectQuestion: handleSelectQuestion, onDeleteQuestion: handleDeleteQuestion, onDuplicateQuestion: handleDuplicateQuestion, onAddNewQuestion: handleAddNewQuestion, onDragStart: handleQuestionDragStart, onDrop: handleQuestionDrop }))), React.createElement("footer", { className: "mt-8 text-center p-4 bg-white rounded-lg shadow-sm" }, React.createElement("a", { href: "https://t.me/Interact2030", target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 hover:text-blue-600 transition-colors text-sm" }, "برمجة و تصميم/ ملتقى التعليم التفاعلي بملتقى معلمي ومعلمات الرياضيات ـ المملكة العربية السعودية")))));
};


// RENDER LOGIC (Transpiled from index.tsx)
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(React.StrictMode, null, React.createElement(App, null)));
