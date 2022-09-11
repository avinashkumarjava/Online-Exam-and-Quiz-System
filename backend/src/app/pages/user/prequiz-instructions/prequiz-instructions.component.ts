import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prequiz-instructions',
  templateUrl: './prequiz-instructions.component.html',
  styleUrls: ['./prequiz-instructions.component.css']
})
export class PrequizInstructionsComponent implements OnInit {

  qid:any;
  quiz:any;

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.qid = this._route.snapshot.params.qid;
    // alert(this.qid);

    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>{
        this.quiz = data;
      },
      (error:any)=>{
        Swal.fire('Error', 'Error in loading quiz data.' + error, 'error');
      }
    );
  }

  // start quiz
  public startQuiz(){
    Swal.fire(
      {
        title: 'Do you want to start the quiz ?',
        showCancelButton: true,
        confirmButtonText: 'Yes, lets go',
        icon: 'info'
      }
    ).then(
      (result)=>{
        if(result.isConfirmed){
          this._router.navigate(['/start-quiz/' + this.qid]);
        }
      }
    );
  }

}
