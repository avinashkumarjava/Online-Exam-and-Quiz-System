import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId: any;
  qTitle: any;
  questions = [
    {
      quesId: '',
      content: 'Loading questions...',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    }
  ];

  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
  ) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params.qid;
    this.qTitle = this._route.snapshot.params.title;

    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        this.questions = data;
        // console.log(this.questions);
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed loading data(questions) from database.', 'error');
      }
    );
  }

  // delete question 
  deleteQuestion(quesId:any){
    // alert(quesId);

    Swal.fire(
      {
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        title: 'Are you sure about deleting this question?'
      }
    ).then((result)=>{
      if(result.isConfirmed){
        this._question.deleteQuestion(quesId).subscribe(
          (data:any)=>{
            Swal.fire('Success', 'Question deleted successfully.', 'success');
            this.questions = this.questions.filter((q)=>q.quesId != quesId); 
          },
          (error:any)=>{
            Swal.fire('Error', 'Failed to delete question.', 'error');
          }
        );
      }
    });
  }
}
