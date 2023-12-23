import { Movie } from "./Home";

const MovieCard: React.FC<{ myData: Movie }> = ({ myData }) => {
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{myData.id}</p>
        <p>{myData.body.substr(0, 150)}</p>
        <h2>{myData.title.substr(0, 15)}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
