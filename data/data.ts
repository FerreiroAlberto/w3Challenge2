import { anyCharacter } from './character';
import { Counselor } from './counselor';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

const joffrey = new King('Joffrey', 'Baratheon', 18, 2);
const jaime = new Fighter('Jaime', 'Lannister', 35, 'sword', 7);
const daenerys = new Fighter('Daenerys', 'Targaryen', 25, 'dragon', 10);
const tyrion = new Counselor('Tyrion', 'Lannister', 30, daenerys);
const bronn = new Squire('Bronn', 'Lannister', 35, jaime, 9);

export const characters = [joffrey, jaime, daenerys, tyrion, bronn];
