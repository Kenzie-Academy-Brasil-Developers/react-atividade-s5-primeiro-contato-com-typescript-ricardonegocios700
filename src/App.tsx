import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input/input";
import Card from "./components/Card/card";

interface Person {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [persons, setPersons] = useState<Person[]>([]);

  const handleClick = (name: string, age: number, hobby: string) => {
    setPersons([...persons, { name: name, age: age, hobby: hobby }]);
    setName("");
    setAge(0);
    setHobby("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <Input
            placeholder="Nome"
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Idade"
            label="Idade"
            //value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <Input
            placeholder="Hobby"
            label="Hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
          <button onClick={() => handleClick(name, age, hobby)}>Salvar</button>
        </section>
        <ul>
          {persons &&
            persons.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                age={item.age}
                hobby={item.hobby}
              />
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
