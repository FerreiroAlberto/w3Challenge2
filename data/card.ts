import { Component } from './component';

export class Card extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }
  createTemplate() {
    return `<ul class="characters-list row list-unstyled">       <li class="character col">         <div class="card charactercard">           <img src="./joffrey.jpg" alt="Nombre y familia del personaje" class="characterpicture card-img-top" />           <div class="card-body">             <h2 class="charactername card-title h4">Jeoffrey Baratheon</h2>             <div class="characterinfo">               <ul class="list-unstyled">                 <li>Edad: 18 años</li>                 <li>                   Estado:                   <i class="fas fa-thumbs-down"></i>                   <i class="fas fa-thumbs-up"></i>                 </li>               </ul>             </div>             <div class="character__overlay">               <ul class="list-unstyled">                 <li>Años de reinado: 2</li>                 <li>Arma: XXX</li>                 <li>Destreza: X</li>                 <li>Peloteo: X</li>                 <li>Asesora a: X</li>`;
  }
}
