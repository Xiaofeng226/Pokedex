import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";
import DataInfo from "./DataInfo.js";
import "./App.css";
import Speech from "./Speech";
import EvolvedInfo from "./EvolvedInfo.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [description, descrip] = useState("");

  useEffect(() => {
    const pokemon = encodeURIComponent(name.toLowerCase());
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    const infourl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
    fetch(infourl)
      .then((r) => r.json())
      .then((r) => descrip(r))
      .catch((e) => descrip(e));
  }, [name]);

  return (
    <div className="App">
      <Title text="Pokédex" />
      <Entry action={setName} />
      <Info name={name} data={data} />
      <EvolvedInfo name={name} data={description} />
      <DataInfo name={name} data={description} />
      <Speech />
    </div>
  );
}
