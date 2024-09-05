import React, { useEffect, useState } from "react";
import axios from "axios";

export default function List() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/people").then((res) => {
      console.log(res.data);
      setPeople(res.data);
    });
  }, []);

  return (
    <div>
      <h1>People List</h1>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              {person.name}, {person.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
