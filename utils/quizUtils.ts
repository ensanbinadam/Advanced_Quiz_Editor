
import { Question, Option, MatchingPair } from '../types';

export function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

export function ensureQuestionSanity(q: Partial<Question>): Question {
  const baseQuestion = {
    type: q.type || 'multiple-choice',
    reading: q.reading || { text: '', image: null, audio: null },
    question: q.question || { text: '', image: null },
  };

  switch (baseQuestion.type) {
    case 'multiple-choice': {
      const options = (q as any).options || [];
      while (options.length < 4) {
        options.push({ text: '', image: null });
      }
      return {
        ...baseQuestion,
        type: 'multiple-choice',
        options: options.slice(0, 4) as Option[],
        correct: (q as any).correct || 0,
      };
    }
    case 'fill-in-the-blank':
      return {
        ...baseQuestion,
        type: 'fill-in-the-blank',
        correctAnswer: (q as any).correctAnswer || '',
      };
    case 'true-false':
      return {
        ...baseQuestion,
        type: 'true-false',
        correctAnswer: (q as any).correctAnswer === false ? false : true,
      };
    case 'short-answer':
      return {
        ...baseQuestion,
        type: 'short-answer',
        correctAnswer: (q as any).correctAnswer || '',
      };
    case 'matching': {
       const pairs = (q as any).pairs || [];
       while (pairs.length < 4) {
         pairs.push({ prompt: {text: '', image: null}, answer: {text: '', image: null} });
       }
      return {
        ...baseQuestion,
        type: 'matching',
        pairs: pairs.slice(0, 4) as MatchingPair[],
      };
    }
    case 'ordering': {
      const items = (q as any).items || [];
      while (items.length < 5) {
        items.push({ text: '', image: null });
      }
      // Ensure backward compatibility for old format (string[])
      const sanitizedItems = items.slice(0, 5).map((item: any) => {
        if (typeof item === 'string') {
          return { text: item, image: null };
        }
        return item || { text: '', image: null };
      });

      return {
        ...baseQuestion,
        type: 'ordering',
        items: sanitizedItems,
      };
    }
    default:
      // Fallback to a valid multiple choice question
      return ensureQuestionSanity({ type: 'multiple-choice' });
  }
}