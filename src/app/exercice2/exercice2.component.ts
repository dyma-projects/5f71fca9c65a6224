import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('monTexte', { static: true }) monTexte: ElementRef;
  public valeur: string;

  constructor() {     
  }
  
  ngOnInit() {   
    const self = this;
    this.monTexte.nativeElement.oninput = ()=> {
      self.valeur = this.monTexte.nativeElement.value;
    } ;    
  }

}
