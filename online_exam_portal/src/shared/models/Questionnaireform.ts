export interface Question {
    review: any;
    question: string;
    options: string[];
    answer: string | string[];
    type: 'single' | 'multiple' | 'fill' | 'yesno';
    explanation: string;
    visited: any;
  }