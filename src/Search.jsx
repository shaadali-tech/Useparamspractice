import { useState } from "react";

const Search = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
    },
    {
      id: 3,
      title: "Avatar",
      year: 2009,
    },
    {
      id: 4,
      title: "Titanic",
      year: 1997,
    },
    {
      id: 5,
      title: "Joker",
      year: 2019,
    },
    {
      id: 6,
      title: "Batman Begins",
      year: 2005,
    },
    {
      id: 7,
      title: "The Dark Knight",
      year: 2008,
    },
  ];

  const [searchterm, setSearchterm] = useState("");
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
      />

      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchterm.toLowerCase()),
        )
        .map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
          </div>
        ))}
    </div>
  );
};

export default Search;
