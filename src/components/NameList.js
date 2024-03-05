import React from "react";
import Person from "./Person";

export default function NameList() {
  const persons = [
    {
      id: 1,
      name: "Diana",
      age: 26,
      skill: "React",
    },
    {
      id: 2,
      name: "Aram",
      age: 22,
      skill: "Development",
    },
    {
      id: 3,
      name: "John",
      age: 21,
      skill: "Mozg",
    },
  ];
  const personList = persons.map((person) => <Person key={person.id} person={person}></Person>);
  return <div>{personList}</div>;
}
