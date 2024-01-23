import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	selection: string = '';

  title = 'sistema-consultorio';

	selectionHandler(arg0: any){
		console.log("arg0");
		this.selection = arg0;
	}
}
