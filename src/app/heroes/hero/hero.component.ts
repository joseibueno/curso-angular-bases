import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.name = 'Thor';
  }

  changeHeroAge(): void {
    this.age = 150;
  }

  reset() : void {
    this.name = 'ironman';
    this.age = 45;

    /**
     * se puede acceder l elemento con el primero o con todos.
     * Aunque el filtro sea para todos los tags solo cambia el
     * primero porque los elementos HTML están fuera del ciclo
     * de detección de angular.
     * Solo se ejecuta cuando se pulsa.
     *
     * NO USAR
     */
//    document.querySelector('h1')!.innerHTML = '<h1>Desde angular</h1>';
    // document.querySelectorAll('h1')!.forEach(h1 => h1.innerHTML = '<h1>Desde angular</h1>');
  }

}
