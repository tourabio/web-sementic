import { Component, OnInit,OnChanges} from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    search:string=''
    hotels:any[]
    constructor(private hotelsService:DataService) { }
  
    ngOnInit(): void {
      
      this.hotelsService.getHotels().subscribe(
        (res)=>{this.hotels = res.results.bindings
        console.log(this.hotels)
      },
      (err)=>{
        console.log("error : ",err)
      }
      )
    }
    onSearchChange(searchValue: string): void {  
        this.hotelsService.searchHotelName(searchValue).subscribe(
            (res)=>{this.hotels = res.results.bindings
            console.log(this.hotels)
          },
          (err)=>{
            console.log("error : ",err)
          }
          )
      }
}
