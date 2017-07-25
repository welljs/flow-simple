//@flow
export default class BasicClass<T> {
  data: T;

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
