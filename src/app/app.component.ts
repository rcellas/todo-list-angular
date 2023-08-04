import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-masterclass';
  headerTitel = 'Estudiar Js';


  showMessage(){
    alert('Boton click')
  }
}
