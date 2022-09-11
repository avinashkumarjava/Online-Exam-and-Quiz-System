import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordsService } from 'src/app/services/records.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-quiz-records',
  templateUrl: './view-quiz-records.component.html',
  styleUrls: ['./view-quiz-records.component.css']
})
export class ViewQuizRecordsComponent implements OnInit { 

  qId:any;

  records:Array<any>;

  users:Array<any>;

  quizTitle:any;

  constructor(
    private _route: ActivatedRoute,
    private _user: UserService,
    private _record: RecordsService
  ) {
    this.records = new Array<any>();
    this.users = new Array<any>();
   }

  ngOnInit(): void {

    this.qId = this._route.snapshot.params.qid;
    // console.log(this.qId);
    this._record.getRecordsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        for(let val of data){ 
          if(val.username != null){


            this._user.getUser(val.username).subscribe(
              (data:any)=>{
                val['userdata'] = data;
              }
            );
            this.quizTitle = val.quiz.title;
            var length = this.records.push(val);
          }
        }
        console.log(this.records);
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed to load records from server.', 'error');
      }
    );
    
  }

  

}
