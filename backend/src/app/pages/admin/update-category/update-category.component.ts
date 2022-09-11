import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit { 

  cId:any;
  cTitle: any;
  category: any;

  constructor(
    private _category:CategoryService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }
 
  ngOnInit(): void {
    this.cId = this._route.snapshot.params.cid;
    this.cTitle = this._route.snapshot.params.title;
    // console.log(this.cId + ' : ' + this.cTitle);

    this._category.getCategory(this.cId).subscribe(
      (data:any)=>{
        this.category = data;
        // console.log(this.category);
      },
      (error:any)=>{
        Swal.fire('Error', 'Error in loading data (category)', 'error');
      }
    );
    
  }

  updateData(){
    // alert('test');
    this._category.updateCategory(this.category).subscribe(
      (data:any)=>{
        this._router.navigate(['/admin/categories']);
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed to update category.' + error, 'error');
      }
    );
  }
}
