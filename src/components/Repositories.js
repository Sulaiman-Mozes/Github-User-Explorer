import React from 'react';

const Repositories = ({ repositories }) => (
  repositories.nodes.length > 0 ? (
    <div>
      <h2 className="text-center">Recent Repositories</h2>
      <br />
      {
        repositories.nodes.map(repo => (
          <div key={repo.id}>
            <div className="media border p-3" >
              <div className="mr-3 ">
                <img src={repo.owner.avatarUrl} alt="" className="align-self-center  mr-3 mt-3 rounded-circle" style={{ width: "60px" }} />
                <br />
                <p >{repo.owner.login}</p>
              </div>
              <div className="media-body">
                <h4>{repo.name} <small><i>Created On {new Date(repo.createdAt).toDateString()}</i></small></h4>
                <p> <strong>Description : </strong>{repo.description}</p>
                <a href={repo.url} target="_blank" rel="noopener noreferrer"><strong>View Repo </strong></a>
              </div>
            </div>
            <br />
          </div>))
      }
    </div>) : <div />
);

export default Repositories