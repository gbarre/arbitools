import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { questions } from 'src/environments/questions';
import { ParsedQuestion, Question } from '../models/question';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
  standalone: false,
})
export class QuizComponent implements OnInit {
  allQuestions = questions;

  selectedQuestions: ParsedQuestion[] = [];
  quizForm!: FormGroup;
  numberOfQuestions = 5;
  submitted = false;
  score = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.quizForm = this.fb.group({});
  }

  parseQuestion(q: Question): ParsedQuestion {
    const correctAnswerIndex = q.answers.findIndex((a) =>
      a.trim().startsWith('MMM')
    );
    const cleanedAnswers = q.answers.map((a) =>
      a.replace(/^MMM\s+|^\[_\]\s+/, '').trim()
    );
    return {
      question: q.question,
      answers: cleanedAnswers,
      correctAnswerIndex,
    };
  }

  getRandomQuestions(n: number): ParsedQuestion[] {
    const shuffled = this.allQuestions.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n).map((raw) => this.parseQuestion(raw));
  }

  startQuiz(): void {
    if (
      this.numberOfQuestions < 1 ||
      this.numberOfQuestions > this.allQuestions.length
    ) {
      alert(`Choisissez entre 1 et ${this.allQuestions.length} questions.`);
      return;
    }

    this.submitted = false;
    this.score = 0;
    this.selectedQuestions = this.getRandomQuestions(this.numberOfQuestions);

    const group: { [key: string]: FormControl } = {};
    this.selectedQuestions.forEach((q, idx) => {
      group['q' + idx] = new FormControl(null, Validators.required);
    });
    this.quizForm = this.fb.group(group);
  }

  onSubmit(): void {
    this.submitted = true;
    this.score = 0;

    if (this.quizForm.invalid) {
      return;
    }

    Object.keys(this.quizForm.controls).forEach((key, idx) => {
      const selected = this.quizForm.get(key)?.value;
      if (selected === this.selectedQuestions[idx].correctAnswerIndex) {
        this.score++;
      }
    });
  }

  getAnswerClass(
    questionIdx: number,
    answerIdx: number
  ): 'correct' | 'incorrect' | '' {
    if (!this.submitted) return '';
    const selected = this.quizForm.get('q' + questionIdx)?.value;
    const correct = this.selectedQuestions[questionIdx].correctAnswerIndex;

    if (answerIdx === correct) return 'correct';
    if (answerIdx === selected && selected !== correct) return 'incorrect';
    return '';
  }
}
