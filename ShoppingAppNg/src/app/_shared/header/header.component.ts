import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  sideBarVisible: boolean = false;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  toggle() {
    this.sideBarVisible = !this.sideBarVisible;
    if (this.sideBarVisible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}
