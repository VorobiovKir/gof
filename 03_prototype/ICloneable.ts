export default interface Cloneable {
  clone(...args: any[]): this;
}