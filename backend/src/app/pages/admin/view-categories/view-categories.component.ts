import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[
    {
      cid: 23,
      title: 'Loading Categories...',
      description: '',
    }
  ];

  constructor(private _category: CategoryService) { }

  ngOnInit(): void {

    this._category.categories().subscribe(
      (data:any)=>{
        this.categories = data;
        // console.log(this.categories);
      },
      (error:any)=>{
        console.log(error);
        Swal.fire("Error", "Error in loading data from server", "error");
      }
    );
  }

  // delete category
  deleteCat(cid:any){
    // alert(cid);
    Swal.fire(
      {
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        title: 'Are you sure about deleting this category?'
      }
    ).then((result)=>{
      if(result.isConfirmed){
        this._category.deleteCategory(cid).subscribe(
          (data:any)=>{
            this.categories = this.categories.filter((c)=>c.cid != cid);
            Swal.fire('Success', 'Category deleted successfully.', 'success');
          },
          (error:any)=>{
            Swal.fire('Error', 'Failed to delete category, try again.', 'error');
          }
        );
      }
    });
  }
}
