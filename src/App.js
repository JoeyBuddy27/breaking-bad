import "./App.css";
import Header from "./components/UI/Header";
import Spinner from "./components/UI/Spinner";
import CharacterGrid from "./components/characters/CharacterGrid";
import SearchFilter from "./components/UI/SearchFilter";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getAllCharacters = async () => {
      setIsLoading(true);
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setCharacters(result.data);
      setIsLoading(false);
      console.log(result.data);
    };
    getAllCharacters();
  }, [query]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <SearchFilter getQuery={(q) => setQuery(q)} />
        <CharacterGrid characterList={characters} isLoading={isLoading} />
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}

export default App;
