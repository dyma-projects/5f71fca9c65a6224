import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() enfantEmit: EventEmitter<string> = new EventEmitter<string>();
  @Input() compteur:number;
  constructor() { }

  ngOnInit() {
  }
  compteurMoins() {
    this.compteur--;
    this.enfantEmit.emit(this.compteur.toString());
  }
  compteurPlus() {
    this.compteur++;
    this.enfantEmit.emit(this.compteur.toString());
  }

}
