import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "safe-position";
  servants: number;
  ryhme = "";
  safePosition: number;
  servantsArr = [];

  onSubmit(): void {
    const ryhmeLen = this.ryhme.split(" ").length;
    this.safePosition = this.findSafePosition(this.servants, ryhmeLen);
    this.servantsArr = Array.from({ length: this.servants }, (v, i) => i);
  }

  findSafePosition(servants: number, ryhmeLen: number): number {
    let servantArr = [];
    for (let i = 1; i <= servants; i++) servantArr.push(i);

    let dragOrder = [];

    while (servantArr.length !== 1) {
      for (let skip = 1; skip < ryhmeLen; skip++)
        servantArr.push(servantArr.shift());
      dragOrder.push(servantArr.shift());
    }
    setTimeout(() => {
      let elem = document.getElementById("circle" + (servantArr[0] - 1));
      if (elem) {
        elem.getElementsByTagName("img")[0].style.border = "solid 5px #0bba11";
        elem.getElementsByTagName("img")[0].style.filter = "none";
      }
    }, 1000);
    return servantArr[0];
  }
}
