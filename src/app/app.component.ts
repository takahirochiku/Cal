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

  calcArray(): number[] {
    if (isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }
    let answer: number = this.initValue;
    let ret: number[] = [answer];
    for (let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate / 100)
      ret.push(Math.floor(answer));
    }
    return ret;
  }

  // 入力値を保存
  save(): void {
    localStorage.setItem(
      'initValue', this.initValue.toString()); // 元本
    localStorage.setItem(
      'rate', this.rate.toString()); // 金利
  }

  // 入力値と保存データをクリア
  clear(): void {
    localStorage.setItem('initValue', '0'); // 元本
    localStorage.setItem('rate', '0'); // 金利
    this.initValue = 0;
    this.rate = 0;
  }

  // アプリ起動時の入力値設定
  ngOnInit() {
    if (localStorage.getItem('initValue')) {
      this.initValue = Number(localStorage.getItem('initValue'));
      this.rate = Number(localStorage.getItem('rate'));
    } else {
      this.clear();
    }
  }
}
