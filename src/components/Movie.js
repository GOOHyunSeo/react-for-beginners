import { Link } from "react-router-dom";
function Movie({ id, img, title, summary, genres }) {
  return (
    <div>
      <img alt={title} src={img} />
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
