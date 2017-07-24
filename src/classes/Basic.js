//@flow
export default class BasicClass<T> {
  data: any;
  constructor(data: T) {
    this.data = data;
  }

  getState(prop?: string): T {
    if (prop) {
      return this.data[prop];
    }
    else {
      return this.data;
    }
  }
}
