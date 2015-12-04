import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './model/hero';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	styleUrls: ['app/app.component.style.css']
})
class AppComponent {
	public title = 'Tour of Heroes';
	public heroes = HEROES;
	public selectedHero: Hero;
	
	onSelect(hero:Hero) {
		this.selectedHero = hero; 
	}
	getSelectedClass(hero:Hero) {
		return { 'selected': hero === this.selectedHero };
	}
}

bootstrap(AppComponent);

var HEROES: Hero[] = [
	new Hero(11, "Mr. Nice"),
	new Hero(12, "Narco"),
	new Hero(13, "Bombasto"),
	new Hero(14, "Celeritas"),
	new Hero(15, "Magneta"),
	new Hero(16, "RubberMan"),
	new Hero(17, "Dynama"),
	new Hero(18, "Dr IQ"),
	new Hero(19, "Magma"),
	new Hero(20, "Tornado")
];