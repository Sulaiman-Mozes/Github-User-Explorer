import React from 'react';

const Details = ({ data: { user: { login, company, name, avatarUrl } } }) => (
  <div className="card">
    <br />
    <img className="card-img-top align-self-center mr-3 rounded-circle"
      src={avatarUrl}
      alt={login}
      style={{ width: "200px" }}
    />
    <div className="card-body text-center">
      <h5 className="card-title"><strong>Details</strong></h5>
      <p><strong>username : </strong> {login}</p>
      {name && (<p><strong>fullname : </strong> {name}</p>)}
      {company && (<p><strong>company : </strong> {company}</p>)}
    </div>
  </div>
);

export default Details;
