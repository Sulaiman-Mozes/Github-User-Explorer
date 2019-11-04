import React from 'react';

const Loader = () => (
  <div className="min-component-height center-content">
    <div className="text-center">

      <h6>Loading ...</h6>
      <div>
        <div className="spinner-grow  text-muted"></div>
        <div className="spinner-grow text-primary"></div>
        <div className="spinner-grow text-success"></div>
        <div className="spinner-grow text-info"></div>
        <div className="spinner-grow text-warning"></div>
        <div className="spinner-grow text-danger"></div>
        <div className="spinner-grow text-secondary"></div>
        <div className="spinner-grow text-dark"></div>
        <div className="spinner-grow text-light"></div>
      </div>
    </div>
  </div>
)

export default Loader;
