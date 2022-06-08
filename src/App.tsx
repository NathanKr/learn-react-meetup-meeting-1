import "./App.css";
import IPerson from "./interfaces/IPerson";

const str = "Hello Ts!!!!";
const n2 = 22;
const b2 = true;

let s1: string;
let n1: number;
let b1: boolean;

// let x = n1 + b2;

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

const mul = (n1: number, n2: number): number => {
  return n1 * n2;
};
// s1 = 2;

// interface IStudent{
//   person : IPerson;
//   avg:number;
// }

type TStudent = IPerson | {avg:number};
// let student : TStudent = {avg:11,first:'Avi'} ;

let p: IPerson = {
  first: "Moshe",
  last: "Levi",
  age: 23,
};

p.first = "Avi!!!!!!!";

function writePerson(person: IPerson) {
  console.log(person.age, person.first, person.last);
}

function writePersons(persons: IPerson[]) {
  persons.forEach((person) => {
    console.log(person);
  });
}

function App() {
  // console.log(sum(1, 11));
  // console.log(mul(2, 3));
  // writePerson(p);
  writePersons([
    { first: "Jim", last: "John", age: 11 },
    { first: "Avi", last: "Cohen" },
  ]);

  return <div className="App">{str}</div>;
}

export default App;
