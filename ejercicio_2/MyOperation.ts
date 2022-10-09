import { checkValue, cleanSpaces, computeString } from "./utilities";

export interface IMyOperationInterface {
  operation(): boolean;
  compute(): number | boolean;
}

export default class MyOperation implements IMyOperationInterface {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  operation(): boolean {
    return checkValue(this.value);
  }
  compute(): number | boolean {
    if (!this.operation()) return false;
    return computeString(this.value);
  }
}
