import React, { useState } from "react";
import "./App.css";
import AddMovies from "./Components/AddMovies";
import Data from "./Components/Data";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";

function App() {
  // Add Movie

  const [myMovies, setMyMovies] = useState(Data);
  const Adding = (newMovie) => {
    setMyMovies([...myMovies, newMovie]);
  };

  // Search Filter

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <Filter setsearch={setSearch} setrating={setRating} />
      <br />
      <AddMovies Add={Adding} />

      {/* Show movie and filter */}

      <MovieList
        Data={myMovies.filter((el) => {
          return (
            el.title.trim().toLocaleLowerCase().includes(search) &&
            el.rating >= rating
          );
        })}
      />
    </div>
  );
}

export default App;
