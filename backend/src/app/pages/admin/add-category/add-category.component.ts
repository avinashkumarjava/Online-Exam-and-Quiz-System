import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category={
    title: '',
    description: ''
  };

  constructor(
    private _category:CategoryService, 
    private _snack:MatSnackBar,
    private _router:Router) { }

  ngOnInit(): void {
  }

  public formSubmit(){
    if(this.category.title.trim() == '' || this.category.title == null){
      this._snack.open('Title field must not be empty', 'Ok', {
        duration: 3000
      });
      return;
    }

    //add category
    this._category.addCategory(this.category).subscribe(

      (data:any)=>{
        this.category.title = '';
        this.category.description = '';
        Swal.fire('Success', 'Category added successfully.', 'success').then((e)=>{
          this._router.navigate(['/admin/categories']);
        });
      },
      (error:any)=>{
        console.log(error);
        Swal.fire('Error', 'Failed to add category.', 'error');
      }

    );

  }
}
