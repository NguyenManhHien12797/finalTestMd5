import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../tour";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  constructor(private tourService: TourService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnChanges(): void{
    this.getAll();
  }
  tours: Tour[] = [];

  getAll(){
    this.tourService.getAll().subscribe(tours => {
      this.tours = tours;
    });
  }

  removeTour(tour: any){
    let id = tour.id
    this.tourService.deleteTour(id).subscribe(tour =>{
      alert('Delete thành công');
      this.getAll();
    },e => {
      console.log(e);
    });
  }
  findTour(tour: any){
    let id = tour.id
    console.log(id)
    return this.tourService.findById(id);
  }

}
