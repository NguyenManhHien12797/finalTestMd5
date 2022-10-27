import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
  }

  tourForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })

  submit(){
    const tour= this.tourForm.value;
    this.tourService.saveTour(tour).subscribe(() =>{
      this.tourForm.reset();
      alert('Tạo mới thành công');
    }, error => {
      console.log(error)
    });

  }
}
