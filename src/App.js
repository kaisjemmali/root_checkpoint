import React, { useState } from "react";
import "./App.css";
import AddMovies from "./Components/AddMovies";
import Data from "./Components/Data";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";

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
      <BrowserRouter>
        <Filter setsearch={setSearch} setrating={setRating} />
        <br />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AddMovies Add={Adding} />
                <MovieList
                  Data={myMovies.filter((el) => {
                    return (
                      el.title.trim().toLocaleLowerCase().includes(search) &&
                      el.rating >= rating
                    );
                  })}
                />
              </div>
            }
          />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
