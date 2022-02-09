import { useState } from "react";
import axios from "axios";
import "./App.css";
import Series from "./Series";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    setData([]);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${search}&ts=1&apikey=143164d66cb1d7f81f2b92d3d65b65d5&hash=a0913b4e101ae4a9c2ae50478f286a4e`
      )
      .then((res) => {
        setData(res.data.data.results);
      })
      .catch((error) => console.log(error));
    setSearch("");
  };

  return (
    <center>
      <div className="app-container">
        <h1 className="main-heading">Search Your Favorite Movies</h1>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="form-control input"
            onChange={onChangeHandler}
            value={search}
            placeholder="Enter a Movie Name..."
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setData([])}
          >
            Clear
          </button>
        </form>

        {<div>{data.length > 0 ? <Series data={data} /> : null}</div>}
      </div>
    </center>
  );
}

export default App;
