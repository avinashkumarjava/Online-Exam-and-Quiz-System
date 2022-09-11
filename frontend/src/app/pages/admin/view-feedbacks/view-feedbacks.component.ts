import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.css']
})
export class ViewFeedbacksComponent implements OnInit {

  feed: any;
  flag = false;
  onefeed: any;

  constructor(
    private _feedback: FeedbackService,
    private _user: UserService
  ) { 
    // this.onefeed = new Array<any>();
  }

  ngOnInit(): void {
    this._feedback.getAllFeedbacks().subscribe(
      (data: any)=>{
        
        this.feed = data;
        this.feed.forEach((f: any)=>{
          this._user.getUser(f.username).subscribe(
            (data: any)=>{
              f['userData'] = data;
            },
            (error: any)=>{
              Swal.fire('Error', 'Error', 'error');
            }
          );
        });
        // this.feed = data;
        console.log(this.feed);
      },
      (error: any)=>{
        Swal.fire('Error', 'Failed to load feedbacks from server.', 'error');
      }
    );
  }

  viewone(fid: any){
    
    this.flag = true;

    for(let val of this.feed){
      // console.log(val.fid);
      if(fid == val.fid){
        this.onefeed = val;
      }
    }
    console.log(this.onefeed);
    
  }

  closethis(){
    this.flag = false;
  }

  deleteFeed(){
    this._feedback.deleteFeedback(this.onefeed.fid).subscribe(
      (data: any)=>{
        Swal.fire('Success', 'Feedback deleted successfully.', 'success');
        this.closethis();
        this.ngOnInit();
        
      },
      (error: any)=>{

      }
    );
  }

}
