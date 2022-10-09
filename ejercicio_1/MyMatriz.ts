import { calcDimension, calcStraight, computeArray } from "./utilities";

export interface MyMatrizInterface {
  dimension(): number;
  straight(): boolean;
  compute(): number;
}

export default class MyMatriz implements MyMatrizInterface {
  private value: any[];
  constructor(value: any[]) {
    this.value = value;
  }
  dimension(): number {
    return calcDimension(this.value);
  }
  straight(): boolean {
    return calcStraight(this.value);
  }
  compute(): number {
    return computeArray(this.value);
  }
}
