import { ObjectId } from "mongodb";

export class studentModel {
  public _id: ObjectId;
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this._id = new ObjectId();
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
