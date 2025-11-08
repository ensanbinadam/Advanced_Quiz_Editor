
import React, { useState } from 'react';
import { Question, QuestionType, Option, MatchingPair } from '../types';
import { ImageUp, ClipboardPaste, Trash2, AudioLines, Save, PlusCircle } from './Icons';

interface MediaInputProps {
  label: string;
  image: string | null;
  onImageChange: (base64: string | null) => void;
  audio?: string | null;
  onAudioChange?: (base64: string | null) => void;
}

const MediaInput: React.FC<MediaInputProps> = ({ label, image, onImageChange, audio, onAudioChange }) => {
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const audioInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (data: string | null) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setter(event.target?.result as string);
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  const handlePaste = async (setter: (data: string | null) => void) => {
    try {
      const items = await navigator.clipboard.read();
      const imageItem = items.find(item => item.types.some(t => t.startsWith('image/')));
      if (imageItem) {
        const type = imageItem.types.find(t => t.startsWith('image/'))!;
        const blob = await imageItem.getType(type);
        const reader = new FileReader();
        reader.onload = (e) => setter(e.target?.result as string);
        reader.readAsDataURL(blob);
      } else {
        alert('لا توجد صورة في الحافظة.');
      }
    } catch (err) {
      console.error('Paste error:', err);
      alert('فشل لصق الصورة. قد تحتاج إلى منح الإذن بالوصول إلى الحافظة.');
    }
  };
  
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-700">{label}</h3>
      <div className="flex items-center gap-2">
        <button onClick={() => imageInputRef.current?.click()} className="flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-md transition-colors">
          <ImageUp size={16} /> صورة
        </button>
        <input type="file" ref={imageInputRef} onChange={(e) => handleFileChange(e, onImageChange)} accept="image/*" className="hidden" />
        <button onClick={() => handlePaste(onImageChange)} className="flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-md transition-colors">
          <ClipboardPaste size={16} /> لصق
        </button>
        {image && (
          <button onClick={() => onImageChange(null)} className="flex items-center gap-2 text-sm bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded-md transition-colors">
            <Trash2 size={16} /> حذف
          </button>
        )}
      </div>
      {image && <img src={image} alt="Preview" className="mt-2 rounded-lg border-2 border-dashed border-gray-300 p-1 max-h-40 object-contain" />}
      
      {onAudioChange && (
        <>
          <div className="flex items-center gap-2">
            <button onClick={() => audioInputRef.current?.click()} className="flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-md transition-colors">
              <AudioLines size={16} /> صوت
            </button>
            <input type="file" ref={audioInputRef} onChange={(e) => handleFileChange(e, onAudioChange)} accept="audio/*" className="hidden" />
            {audio && (
              <button onClick={() => onAudioChange(null)} className="flex items-center gap-2 text-sm bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded-md transition-colors">
                <Trash2 size={16} /> حذف
              </button>
            )}
          </div>
          {audio && <audio src={audio} controls className="mt-2 w-full" />}
        </>
      )}
    </div>
  );
};


interface EditorPanelProps {
  question: Question;
  onUpdate: (question: Question) => void;
  questionNumber: number;
  onSaveAndNew: () => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ question, onUpdate, questionNumber, onSaveAndNew }) => {
  const [localQuestion, setLocalQuestion] = useState(question);

  const handleChange = <K extends keyof Question>(key: K, value: Question[K]) => {
    setLocalQuestion(prev => ({ ...prev, [key]: value }));
  };

  const handleNestedChange = (part: 'reading' | 'question', key: string, value: any) => {
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
      // Maybe add a visual confirmation
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newType = e.target.value as QuestionType;
      // Preserve common parts
      const newQuestionState = {
        type: newType,
        reading: localQuestion.reading,
        question: localQuestion.question,
      } as Partial<Question>;

      // Reset type-specific fields
      if (newType === 'multiple-choice') {
        (newQuestionState as any).options = Array(4).fill(0).map(() => ({ text: '', image: null }));
        (newQuestionState as any).correct = 0;
      } else if (newType === 'true-false') {
        (newQuestionState as any).correctAnswer = true;
      } else if (newType === 'fill-in-the-blank' || newType === 'short-answer') {
        (newQuestionState as any).correctAnswer = '';
      } else if (newType === 'matching') {
        (newQuestionState as any).pairs = Array(4).fill(0).map(() => ({ prompt: { text: '', image: null }, answer: { text: '', image: null } }));
      } else if (newType === 'ordering') {
        (newQuestionState as any).items = Array(5).fill({ text: '', image: null });
      }
      
      onUpdate(newQuestionState as Question);
      setLocalQuestion(newQuestionState as Question);
  }

  const renderEditorFields = () => {
    switch (localQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            <label className="font-semibold text-lg text-gray-800">الخيارات (يجب تحديد الإجابة الصحيحة)</label>
            {(localQuestion as any).options.map((opt: Option, index: number) => (
              <div key={index} className="p-3 bg-white rounded-lg border">
                <div className="flex items-center gap-3 mb-2">
                  <input
                    type="radio"
                    name="correctOption"
                    checked={(localQuestion as any).correct === index}
                    onChange={() => handleChange('correct' as any, index as any)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <input
                    type="text"
                    placeholder={`الخيار ${index + 1}`}
                    value={opt.text}
                    onChange={(e) => {
                      const newOptions = [...(localQuestion as any).options];
                      newOptions[index].text = e.target.value;
                      handleChange('options' as any, newOptions as any);
                    }}
                    className="flex-grow p-2 border rounded-md"
                  />
                </div>
                <MediaInput
                    label=""
                    image={opt.image}
                    onImageChange={(img) => {
                         const newOptions = [...(localQuestion as any).options];
                         newOptions[index].image = img;
                         handleChange('options' as any, newOptions as any);
                    }}
                 />
              </div>
            ))}
          </div>
        );
      case 'fill-in-the-blank':
        return (
            <div>
                 <label htmlFor="correctAnswer" className="font-semibold text-lg text-gray-800">الإجابة الصحيحة:</label>
                 <input
                     id="correctAnswer"
                     type="text"
                     value={(localQuestion as any).correctAnswer}
                     onChange={(e) => handleChange('correctAnswer' as any, e.target.value as any)}
                     className="w-full mt-2 p-2 border rounded-md"
                     placeholder="اكتب الإجابة هنا..."
                 />
                 <p className="text-sm text-gray-500 mt-2">ملاحظة: يمكنك وضع عدة إجابات صحيحة بفصلها بعلامة | (مثال: إجابة1|إجابة2)</p>
            </div>
        );
      case 'true-false':
        return (
            <div className="space-y-2">
                <label className="font-semibold text-lg text-gray-800">الإجابة الصحيحة:</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="tf-answer"
                            checked={(localQuestion as any).correctAnswer === true}
                            onChange={() => handleChange('correctAnswer' as any, true as any)}
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        صح
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="tf-answer"
                            checked={(localQuestion as any).correctAnswer === false}
                            onChange={() => handleChange('correctAnswer' as any, false as any)}
                             className="form-radio h-5 w-5 text-blue-600"
                        />
                        خطأ
                    </label>
                </div>
            </div>
        );
      case 'short-answer':
        return (
            <div>
                 <label htmlFor="shortAnswer" className="font-semibold text-lg text-gray-800">الإجابات الصحيحة المحتملة:</label>
                 <textarea
                     id="shortAnswer"
                     value={(localQuestion as any).correctAnswer}
                     onChange={(e) => handleChange('correctAnswer' as any, e.target.value as any)}
                     className="w-full mt-2 p-2 border rounded-md h-24"
                     placeholder="اكتب الإجابات هنا..."
                 />
                 <p className="text-sm text-gray-500 mt-2">اكتب الإجابات الصحيحة المحتملة. افصل بين كل إجابة بعلامة | . سيتم التحقق من تطابق إجابة الطالب مع أي من هذه الإجابات.</p>
            </div>
        );
      case 'matching':
        return (
           <div className="space-y-4">
              <label className="font-semibold text-lg text-gray-800">أزواج المطابقة (بحد أقصى 4 أزواج):</label>
              {(localQuestion as any).pairs.map((pair: MatchingPair, index: number) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 bg-white rounded-lg border">
                      <div className="space-y-2">
                           <input
                              type="text"
                              placeholder={`العنصر ${index + 1}`}
                              value={pair.prompt.text}
                              onChange={(e) => {
                                  const newPairs = [...(localQuestion as any).pairs];
                                  newPairs[index].prompt.text = e.target.value;
                                  handleChange('pairs' as any, newPairs as any);
                              }}
                              className="w-full p-2 border rounded-md"
                           />
                           <MediaInput
                               label=""
                               image={pair.prompt.image}
                               onImageChange={(img) => {
                                   const newPairs = [...(localQuestion as any).pairs];
                                   newPairs[index].prompt.image = img;
                                   handleChange('pairs' as any, newPairs as any);
                               }}
                           />
                      </div>
                       <div className="space-y-2">
                           <input
                              type="text"
                              placeholder={`الإجابة ${index + 1}`}
                              value={pair.answer.text}
                              onChange={(e) => {
                                  const newPairs = [...(localQuestion as any).pairs];
                                  newPairs[index].answer.text = e.target.value;
                                  handleChange('pairs' as any, newPairs as any);
                              }}
                              className="w-full p-2 border rounded-md"
                           />
                           <MediaInput
                               label=""
                               image={pair.answer.image}
                               onImageChange={(img) => {
                                   const newPairs = [...(localQuestion as any).pairs];
                                   newPairs[index].answer.image = img;
                                   handleChange('pairs' as any, newPairs as any);
                               }}
                           />
                      </div>
                  </div>
              ))}
           </div>
        );
      case 'ordering':
          return (
             <div className="space-y-4">
                 <label className="font-semibold text-lg text-gray-800">عناصر الترتيب (بالترتيب الصحيح، بحد أقصى 5):</label>
                 {(localQuestion as any).items.map((item: Option, index: number) => (
                      <div key={index} className="p-3 bg-white rounded-lg border space-y-2">
                        <input
                            type="text"
                            placeholder={`العنصر ${index + 1} (نص)`}
                            value={item.text}
                            onChange={(e) => {
                                const newItems = [...(localQuestion as any).items];
                                newItems[index] = { ...newItems[index], text: e.target.value };
                                handleChange('items' as any, newItems as any);
                            }}
                            className="w-full p-2 border rounded-md"
                        />
                         <MediaInput
                            label=""
                            image={item.image}
                            onImageChange={(img) => {
                                const newItems = [...(localQuestion as any).items];
                                newItems[index] = { ...newItems[index], image: img };
                                handleChange('items' as any, newItems as any);
                            }}
                        />
                      </div>
                 ))}
                 <p className="text-sm text-gray-500 mt-2">
                    املأ العناصر التي تريدها بالترتيب الصحيح. يمكن أن يكون كل عنصر نصًا أو صورة أو كليهما. سيتم تجاهل الحقول الفارغة. يجب ملء عنصرين على الأقل.
                 </p>
             </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-blue-600 border-b pb-3">
        تحرير السؤال <span className="text-gray-500 font-medium">({questionNumber})</span>
      </h2>

      <div className="p-4 bg-gray-50 rounded-lg border">
        <label htmlFor="questionType" className="font-semibold text-gray-700">نوع السؤال:</label>
        <select
          id="questionType"
          value={localQuestion.type}
          onChange={handleTypeChange}
          className="w-full mt-2 p-2 border rounded-md bg-white"
        >
          <option value="multiple-choice">اختيار من متعدد</option>
          <option value="fill-in-the-blank">املأ الفراغ</option>
          <option value="true-false">صح / خطأ</option>
          <option value="short-answer">إجابة قصيرة</option>
          <option value="matching">مطابقة</option>
          <option value="ordering">ترتيب</option>
        </select>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border space-y-3">
        <label className="font-semibold text-gray-700">النص القرائي (اختياري):</label>
        <textarea
          placeholder="اكتب النص هنا..."
          value={localQuestion.reading.text}
          onChange={(e) => handleNestedChange('reading', 'text', e.target.value)}
          className="w-full p-2 border rounded-md h-28"
        />
        <MediaInput
          label=""
          image={localQuestion.reading.image}
          onImageChange={(img) => handleNestedChange('reading', 'image', img)}
          audio={localQuestion.reading.audio}
          onAudioChange={(aud) => handleNestedChange('reading', 'audio', aud)}
        />
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border space-y-3">
        <label className="font-semibold text-gray-700">نص السؤال:</label>
        <input
          type="text"
          placeholder="اكتب السؤال هنا..."
          value={localQuestion.question.text}
          onChange={(e) => handleNestedChange('question', 'text', e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <MediaInput
          label=""
          image={localQuestion.question.image}
          onImageChange={(img) => handleNestedChange('question', 'image', img)}
        />
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border">
        {renderEditorFields()}
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4 border-t">
          <button onClick={handleSave} className="flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-600 transition-colors shadow">
              <Save /> حفظ التعديلات
          </button>
          <button onClick={onSaveAndNew} className="flex items-center gap-2 bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors shadow">
              <PlusCircle /> حفظ وإضافة جديد
          </button>
      </div>
    </div>
  );
};

export default EditorPanel;