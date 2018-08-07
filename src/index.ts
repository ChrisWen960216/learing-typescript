/**
 * Created By ChrisWen
 *  2018/08/07
 *  Calculator for typescript
 */

const root = <HTMLElement>document.getElementById('root');

// Calculator Panel
class Panel{
  className: string;
  type:string;
  text?:string;
  onClick?:() => void;

  constructor(className:string, type:string, text?:string, onClick?:() => void) {
    this.className = className;
    this.type = type;
    this.text = text;
    this.onClick = onClick;
  }

  public generate() {
    switch (this.type){
      case 'input':
      case 'button':
      case 'normal':
      default:
    }
  }

  private generateInput() {
    const inputEle = <HTMLInputElement>document.createElement('input');
    inputEle.type = 'number';
    inputEle.placeholder = '请输入数字';
    inputEle.id = this.className;
    return inputEle;
  }

}

// Main Logic class
class Calculator{
  public fir:number;
  public sec:number;
  public result:number;

  constructor(fir:number, sec:number) {
    this.fir = fir;
    this.sec = sec;
    this.result = 0;
  }

  public add() {
    this.result = this.fir + this.sec;
    return this;
  }

  public sub() {
    this.result = this.fir - this.sec;
    return this;
  }

  public mul() {
    this.result = this.fir * this.sec;
    return this;
  }

  public dev() {
    this.result = this.fir / this.sec;
    return this;
  }

  public getResult() {
    return this.result;
  }
}
