import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destinations:any[]
  constructor(private destinationService:DataService) { }

  ngOnInit(): void {
    
    this.destinationService.getDestination().subscribe(
      (res)=>{this.destinations = res.results.bindings
      console.log(this.destinations)
    },
    (err)=>{
      console.log("error : ",err)
    }
    )
  }

}
