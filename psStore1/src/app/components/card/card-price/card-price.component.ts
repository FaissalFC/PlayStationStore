import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input()
  gameType:string ="DIG PS4"
  @Input()
  gamePrice:string ="399.90"
  constructor(){}

  ngOnInit(): void {
    
  }

}
