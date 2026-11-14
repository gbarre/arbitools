import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { questions } from 'src/environments/questions';
import { QuizComponent } from './quizz.component';

describe('Questions du quiz', () => {
  it('contient des questions', () => {
    expect(questions.length).toBeGreaterThan(0);
  });

  it.each(questions.map((q) => [q.question, q] as const))(
    '« %s » a une seule bonne réponse et des réponses bien formées',
    (_title, q) => {
      expect(q.question.trim()).not.toBe('');
      expect(q.answers.length).toBeGreaterThanOrEqual(2);
      const correct = q.answers.filter((a) => a.trim().startsWith('MMM'));
      expect(correct.length).toBe(1);
      for (const answer of q.answers) {
        expect(answer.trim()).toMatch(/^(MMM|\[_\])\s+\S/);
      }
    }
  );

  it('n’a pas de question en double', () => {
    const titles = questions.map((q) => q.question.trim());
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe('QuizComponent', () => {
  let component: QuizComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ReactiveFormsModule] });
    component = new QuizComponent(TestBed.inject(FormBuilder));
    component.ngOnInit();
  });

  it('nettoie les réponses et repère la bonne', () => {
    const parsed = component.parseQuestion({
      question: 'Q ?',
      answers: ['[_] Non', 'MMM Oui', '[_] Peut-être'],
    });
    expect(parsed.answers).toEqual(['Non', 'Oui', 'Peut-être']);
    expect(parsed.correctAnswerIndex).toBe(1);
  });

  it('tire le nombre de questions demandé, sans doublon', () => {
    component.numberOfQuestions = Math.min(5, questions.length);
    component.startQuiz();
    expect(component.selectedQuestions.length).toBe(component.numberOfQuestions);
    const titles = component.selectedQuestions.map((q) => q.question);
    expect(new Set(titles).size).toBe(titles.length);
    expect(Object.keys(component.quizForm.controls).length).toBe(
      component.numberOfQuestions
    );
  });

  it('refuse un nombre de questions hors limites', () => {
    const alert = vi.spyOn(window, 'alert').mockImplementation(() => {});
    component.numberOfQuestions = 0;
    component.startQuiz();
    component.numberOfQuestions = questions.length + 1;
    component.startQuiz();
    expect(alert).toHaveBeenCalledTimes(2);
    expect(component.selectedQuestions).toEqual([]);
    alert.mockRestore();
  });

  it('compte les bonnes réponses et colore les réponses après validation', () => {
    component.numberOfQuestions = 2;
    component.startQuiz();
    const [q0, q1] = component.selectedQuestions;
    const wrong1 = q1.correctAnswerIndex === 0 ? 1 : 0;
    component.quizForm.get('q0')!.setValue(q0.correctAnswerIndex);
    component.quizForm.get('q1')!.setValue(wrong1);

    expect(component.getAnswerClass(0, q0.correctAnswerIndex)).toBe('');

    component.onSubmit();
    expect(component.score).toBe(1);
    expect(component.getAnswerClass(0, q0.correctAnswerIndex)).toBe('correct');
    expect(component.getAnswerClass(1, wrong1)).toBe('incorrect');
    expect(component.getAnswerClass(1, q1.correctAnswerIndex)).toBe('correct');
  });

  it('ne note pas un quiz incomplet', () => {
    component.numberOfQuestions = 2;
    component.startQuiz();
    component.onSubmit();
    expect(component.submitted).toBe(true);
    expect(component.score).toBe(0);
  });
});
