import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[
    {
      cid:23,
      title:'Loading categories...'
    },
  
  ];

  quizData = {
    qId: '',
    title:'',
    description:'',
    maxMarks:'',
    noOfQuestions:'',
    active: true,
    category:{
      cid: '',
    },
  };

  constructor(
    private _cat:CategoryService, 
    private _snack:MatSnackBar,
    private _quiz:QuizService,
    private _router:Router) { }

  ngOnInit(): void {

    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories = data;
      },
      (error:any)=>{
        console.log(error);
        Swal.fire('Error', 'Failed loading data(categories) from server.', 'error');
      }
    );
  }

  // add quiz
  public addQuiz(){
    
    if(this.quizData.title.trim() == '' || this.quizData.title == null){
      this._snack.open('Title required', 'Ok', {
        duration: 3000,
      });
      return;
    }

    // remaining validations

    //server call to add quiz
    this._quiz.addQuiz(this.quizData).subscribe(
      (data:any)=>{
        
        
        Swal.fire('Success', 'Quiz added successfully.', 'success').then((e)=>{
          this._router.navigate(['/admin/quizzes/']);
        });
        this.quizData = {
          qId: '',
          title:'',
          description:'',
          maxMarks:'',
          noOfQuestions:'',
          active: true,
          category:{
            cid: '',
          },
        };
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed to add data(Quizzes) to the server.', 'error');
      }
    );
  }

}
