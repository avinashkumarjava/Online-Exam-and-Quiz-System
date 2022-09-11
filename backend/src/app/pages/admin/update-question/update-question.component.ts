import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
    private _router:Router,
  ) { }

  quesId:any;
  qId:any;
  qTitle: any;
  question = {
      
      content: 'Loading question...',
      option1: 'Loading option1...',
      option2: 'Loading option2...',
      option3: 'Loading option3...',
      option4: 'Loading option4...',
      answer: 'Loading answers...'
    };


  ngOnInit(): void {

    this.quesId = this._route.snapshot.params.quesId;
    this.qId = this._route.snapshot.params.qid;
    this.qTitle = this._route.snapshot.params.title;
    // alert(this.quesId);
    this._question.getQuestion(this.quesId).subscribe(
      (data:any)=>{
        this.question = data;
        // console.log(this.question);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  // update form submit
  public updateData(){
    // alert('test');
    // validate

    // server call
    this._question.updateQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire('Updated', 'Question modified successfully.', 'success').then((e)=>{
          this._router.navigate(['/admin/view-questions/' + this.qId + '/' + this.qTitle]);
        });
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed to update question.', 'error');
      }
    );
  }

}
