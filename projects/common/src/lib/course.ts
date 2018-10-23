export class Course {
  name: string;
  department: string;
  number: string;

  constructor(n: string, d: string, num: string) {
    this.name = n;
    this.department = d;
    this.number = num;
  }
}
