import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { RecordsService } from 'src/app/services/records.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  panelOpenState = false;

  quizzes = [
    {
      qId:23,
      title: 'Loading quizzes...',
      description: '',
      maxMarks: '',
      noOfQuestions: '',
      active: '',
      category:{
        title: ''
      }
    }
  ];

  // record variables and objects
  records: any;

  constructor(
    private _quiz:QuizService,
    private _record:RecordsService) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes = data;
        // console.log(this.quizzes);
      },
      (error:any)=>{
        console.log(error);
        Swal.fire('Error', 'Failed to load quizzes from server', 'error');
      }
    );
  }

  // delete quiz
  public deleteQuiz(qId:any){
    Swal.fire(
      {
        icon: 'question',
        title: 'Are you sure ?',
        confirmButtonText: 'Delete',
        showCancelButton: true,
      }
    ).then((result:any)=>{
      if(result.isConfirmed){
        this._quiz.deleteQuiz(qId).subscribe(
          (data:any)=>{
            this.quizzes = this.quizzes.filter((quiz:any) => quiz.qId != qId);
            Swal.fire('Success', 'Quiz has been deleted.', 'success');
          },
          (error:any)=>{
            Swal.fire('Error', 'Error occured while deleting quiz', 'error');
          }
        );
      }
    });
  }

  // get records
  getDetails(qId:any){
    // console.log('test'+qId);
    this._record.getRecordsOfQuiz(qId).subscribe(
      (data:any)=>{
        console.log('Records get successfully.');
        this.records = data;
        console.log(this.records);
      },
      (error:any)=>{
        Swal.fire('Error', 'Error in loading records.', 'error');
      }
    );
  }

  
}

