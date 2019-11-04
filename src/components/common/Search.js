import React from 'react';


const Search = ({ handleChange, handleSubmit }) => (
  <div className="card">
    <div className="card-body">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mb-2 mr-sm-4 "
          type="search" placeholder="Search"
          onChange={handleChange}
          aria-label="Search" />
        <button className="btn btn-outline-success mb-2" type="submit">Search</button>
      </form>
    </div>
  </div>
)

export default Search;
