
import React from 'react';
import { Question } from '../types';
import { stripHtml } from '../utils/quizUtils';
import { Edit, Copy, Plus, Trash2, GripVertical } from './Icons';

interface QuestionListProps {
  questions: Question[];
  currentQuestionIndex: number;
  onSelectQuestion: (index: number) => void;
  onDeleteQuestion: (index: number) => void;
  onDuplicateQuestion: (index: number) => void;
  onAddNewQuestion: (index: number) => void;
  onDragStart: (index: number) => void;
  onDrop: (targetIndex: number) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  currentQuestionIndex,
  onSelectQuestion,
  onDeleteQuestion,
  onDuplicateQuestion,
  onAddNewQuestion,
  onDragStart,
  onDrop,
}) => {
  const [dragOverIndex, setDragOverIndex] = React.useState<number | null>(null);
  
  const questionTypeMap: { [key in Question['type']]: string } = {
    'multiple-choice': 'اختيار من متعدد',
    'fill-in-the-blank': 'املأ الفراغ',
    'true-false': 'صح/خطأ',
    'short-answer': 'إجابة قصيرة',
    'matching': 'مطابقة',
    'ordering': 'ترتيب'
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md sticky top-6">
      <div className="text-center border-b pb-3 mb-3">
        <h3 className="text-xl font-bold text-gray-800">قائمة الأسئلة ({questions.length})</h3>
        <p className="text-sm text-gray-500">اسحب وأفلت لإعادة الترتيب</p>
      </div>
      <ul className="space-y-2 max-h-[75vh] overflow-y-auto pr-2">
        {questions.map((q, index) => {
          const isActive = index === currentQuestionIndex;
          const previewText = stripHtml(q.question.text || 'سؤال فارغ').substring(0, 50) + '...';
          return (
            <li
              key={index}
              draggable
              onDragStart={() => onDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={() => setDragOverIndex(null)}
              onDrop={() => onDrop(index)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 cursor-pointer group ${
                isActive
                  ? 'bg-blue-100 border-blue-500 shadow-md'
                  : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              } ${dragOverIndex === index ? 'transform scale-105 bg-blue-200' : ''}`}
            >
              <div className="flex items-start gap-2">
                 <div className="flex-shrink-0 cursor-grab text-gray-400 group-hover:text-gray-600 pt-1">
                   <GripVertical />
                 </div>
                 <div className="flex-grow" onClick={() => onSelectQuestion(index)}>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-800">السؤال {index + 1}</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{questionTypeMap[q.type]}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{previewText}</p>
                 </div>
              </div>
              <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-gray-200">
                  <button title="تعديل" onClick={() => onSelectQuestion(index)} className="p-1.5 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-100"><Edit size={16} /></button>
                  <button title="نسخ" onClick={() => onDuplicateQuestion(index)} className="p-1.5 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-100"><Copy size={16}/></button>
                  <button title="إدراج سؤال" onClick={() => onAddNewQuestion(index + 1)} className="p-1.5 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-indigo-100"><Plus size={16} /></button>
                  <button title="حذف" onClick={() => onDeleteQuestion(index)} className="p-1.5 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-100"><Trash2 size={16} /></button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionList;
