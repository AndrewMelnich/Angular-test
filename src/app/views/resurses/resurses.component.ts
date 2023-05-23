import { Component, OnInit } from '@angular/core';
import { IResurs, ResursResponse } from 'src/app/models/resurses';
import { ResursesService } from 'src/app/services/resurses.services';

@Component({
  selector: 'app-resurses',
  templateUrl: './resurses.component.html',
  styleUrls: ['./resurses.component.scss']
})
export class ResursesComponent {

  resurses: IResurs[] = [];

  // resurse: IResurs = {}

  

  constructor(
    private ResursesService: ResursesService,
  ){}


  getAllResurses() {
    this.ResursesService.getAllResurses().subscribe((resurses: ResursResponse) => {
      this.resurses = resurses?.data || [];
    });
  }

  ngOnInit(): void {
    this.getAllResurses()
  }
}


