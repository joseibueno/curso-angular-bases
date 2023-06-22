

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interface/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters : Character[] = [
    {
      id: uuid(),
      name: 'Kriling',
      power: 500,
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    }
  ];

  addCharacter(character: Character):void {
    /**
     * operador spread [...], toma todas las opropiedades y las establece tal cual excepto las que
     * cambiemos nosotros. "Normalmente" loa campos que vayamos a establecer deberían ir detrás
     * del operador asi: => { ...character, id: uuid() }
     */
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(index: number):void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
