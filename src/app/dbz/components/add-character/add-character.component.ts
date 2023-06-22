import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

public emitCharacter():void {
    if(this.character.name.length === 0) {
      console.log('Invalid name');
      return;
    }

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0, }
  }
}
