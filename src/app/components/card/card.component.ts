import { Component, OnInit } from '@angular/core';
import myData from '../../../assets/data/EspeciesCanarias.json';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  animal = myData.arrayAnimales[0].Nombre;
  list = myData.arrayAnimales;
  boton_cambio = 0;
  
  constructor() { 
    console.log('Reading local json files');
    console.log(myData);
  }

  ngOnInit(): void {
    console.log('Reading local json files');
    console.log(myData.arrayAnimales[0].Reino);
  }

  cambio(value: number){
    this.boton_cambio = value;
  }

}
