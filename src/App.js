import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import CharacterList from './Components/CharacterList';
import Loading from './Components/Loading';
import { useState, useEffect } from 'react';
import axios from './Components/API';

function App() {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadChars = async() => {
      const response = await axios.get(`/characters?name=${search}`);
      setChars(response.data);
      setLoading(false);
    }
    loadChars();
  }, [search])

  return (
    <div className="App">
      <NavBar />
      <SearchBar setSearch={setSearch} />
      {loading ? <Loading /> : <CharacterList chars={chars} />}
    </div>
  );
}

export default App;
