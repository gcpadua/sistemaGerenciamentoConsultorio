import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-headder",
  templateUrl: "./headder.component.html",
  styleUrls: ["./headder.component.css"]

})
export class HeadderComponent implements OnInit{
	@Output() selectedFeature = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

	sendEvent(selection: string) {
    this.selectedFeature.emit(selection);
  }
}
