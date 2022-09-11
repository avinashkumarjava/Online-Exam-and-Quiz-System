import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor = ClassicEditor;

  qId: any;
  qTitle:any;
  question={
    quiz:{
      qId: ''
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };

  constructor(
    private _route:ActivatedRoute,
    private _question: QuestionService,
    private _snack: MatSnackBar,
    private _router:Router
  ) { }

  ngOnInit(): void {

    this.qId = this._route.snapshot.params.qid;
    this.qTitle = this._route.snapshot.params.title;

    // console.log(this.qId);
    this.question.quiz['qId'] = this.qId;
  }

  formSubmit(){
    // alert('testing');
    if(this.question.content.trim() == '' || this.question.content == null){
      this._snack.open('Please enter question', 'Ok', {
        duration: 3000
      });
      return;
    }

    if(this.question.option1.trim() == '' || this.question.option1 == null){
      this._snack.open('Please enter option 1', 'Ok', {
        duration: 3000
      });
      return;
    }

    if(this.question.option2.trim() == '' || this.question.option2 == null){
      this._snack.open('Please enter option 2', 'Ok', {
        duration: 3000
      });
      return;
    }

    if(this.question.answer.trim() == '' || this.question.answer == null){
      this._snack.open('Please select answer', 'Ok', {
        duration: 3000
      });
      return; 
    }

    // if validates
    // submit the form 
    this._question.addQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire('Success', 'Question added successfully. ', 'success');
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
        this._router.navigate(['/admin/view-questions/' + this.qId + '/' + this.qTitle]);
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed to add question.', 'error');
      }
    );
  }

}
