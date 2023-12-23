import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "./Home";

interface MovieComponentProps {
  movieInfo: Movie[];
}

const MovieComponent: React.FC<MovieComponentProps> = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal: Movie, id: number) => {
            return <MovieCard myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
