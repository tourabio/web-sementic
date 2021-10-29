import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships:any[]
  filter:any
  constructor(private shipsService:DataService) { }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe(
      (res)=>{this.ships = res.results.bindings
      console.log(this.ships)
    },
    (err)=>{
      console.log("error : ",err)
    }
    )
  }
  onFilter(): void {  
    this.shipsService.filterCapacityShip(this.filter).subscribe(
        (res)=>{this.ships = res.results.bindings
        console.log(this.ships)
      },
      (err)=>{
        console.log("error : ",err)
      }
      )
  }
}

