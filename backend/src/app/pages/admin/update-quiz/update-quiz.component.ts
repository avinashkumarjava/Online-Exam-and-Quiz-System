import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _cat:CategoryService,
    private _router:Router) { }

  qId = 0;
  quiz:any;
  categories=[
    {
      cid:23,
      title:'Loading categories...',
    },
  ];

  ngOnInit(): void {

    this.qId = this._route.snapshot.params.qid;

    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz = data;
      },
      (error:any)=>{
        console.log(error);
      }
    );

    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories = data;
      },
      (error:any)=>{
        alert("Error loading categories.");
      }
    );
  }

  // update form
  public updateData(){
      this._quiz.updateQuiz(this.quiz).subscribe(
        (data:any)=>{
          Swal.fire('Success', 'Quiz has been updated Successfully.', 'success').then((e)=>{
            this._router.navigate(['/admin/quizzes']);
          });
        },
        (error:any)=>{
          Swal.fire('Error', 'Failed to update the quiz.', 'error');
        }
      );
  }
}
