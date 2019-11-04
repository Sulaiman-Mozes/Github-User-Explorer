import React from 'react';
import { NavLink } from 'react-router-dom';

const Users = ({ users }) => (
  <div className="container">
    <br />
    <div className="card-columns">
      {users.map(user => {
        const { login, id, avatarUrl, bio } = user.node;
        return (
          <div key={id}>
            <div className="card">
              <img className="card-img-top" src={avatarUrl} alt="" />
              <div className="card-body">
                <h5 className="card-title"><strong>Username : </strong>{login}</h5>
                {bio && (<p className="card-text"><strong>Bio : </strong>{bio}</p>)}
              </div>
              <div className="card-footer center">
                <NavLink className="btn btn-primary" to={`/user/${login}`} ><strong>View Profile</strong></NavLink >
              </div>
            </div>
          </div>)
      })}
    </div>
  </div >
)

export default Users;
