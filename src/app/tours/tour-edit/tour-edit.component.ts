import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs";
import {Tour} from "../../tour";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  tourForm: FormGroup;
  id: number;
  tour: Tour = {};
  constructor(private tourService: TourService,
              private activatedRoute: ActivatedRoute) {
   this.id= +this.activatedRoute.snapshot.params['id']
    console.log(this.id)
    const tour = this.getTour(this.id);
    console.log(tour)
  }

  ngOnInit(): void {
  }


  getTour(id: number){
    this.tourService.findById(id).subscribe(tour =>{
      this.tour = tour;
    })
  }

  submit(){
    this.tourService.updateTour(this.tour.id!, this.tour).subscribe(() =>{
      alert('Update thành công');
    }, error => {
      console.log(error)
    });

  }
}
