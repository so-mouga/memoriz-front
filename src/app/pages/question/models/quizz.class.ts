import { QuestionAdd } from '@app/pages/question/models/questionAdd';
import { TagAdd } from '@app/pages/question/models/tagAdd';
import { QuizzAddForm } from '@app/pages/question/models/quizzAddForm';

export class QuizzClass implements QuestionAdd {
  public correctAnswers: string[] = [];
  public gameType = 'quizz';
  public incorrectAnswers: string[] = [];
  public media: string;
  public question: string;
  public resource: string;
  public resourceMedia: string;
  public tags: TagAdd[];
  public userId: string;

  constructor() {}

  makeQuestion(quizz: QuizzAddForm) {
    this.userId = quizz.userId;
    this.tags = quizz.tags;
    this.resourceMedia = quizz.resourceMedia;
    this.resource = quizz.resource;
    this.question = quizz.question;
    this.media = quizz.media;

    quizz.answers.forEach(answer => {
      if (answer.isCorrectAnswer === true) {
        this.correctAnswers.push(answer.answer);
        return;
      }
      this.incorrectAnswers.push(answer.answer);
    });
  }
}
