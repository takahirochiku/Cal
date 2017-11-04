import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initValue: number;
  rate: number;

  //複利計算
  calc(): number {
    if (isNaN(this.initValue) || isNaN(this.rate)) {
      //元本もしくは利率が数字ではない場合nullを返す
      return null;
    }
    let answer: number = this.initValue;
    for (let i = 0; i < 10; i++) {//金利計算を10回繰り返す
      answer = answer * (1 + this.rate / 100);
    }
    //整数に並び変える
    return Math.floor(answer);
  }

}
