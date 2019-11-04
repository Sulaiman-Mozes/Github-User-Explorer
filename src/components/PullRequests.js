import React from 'react';

const PullRequests = ({ pullRequests }) => (
  pullRequests.edges.length > 0 ? (
    <div>
      <h2 className="text-center">Recent Pull Requests</h2>
      <br />
      {pullRequests.edges.map(pullrequest => {
        const {
          url, changedFiles, comments, state, title, id
        } = pullrequest.node;

        return (
          <div key={id}>
            <div className="media border p-3" >
              <div className="media-body">
                <h5><a href={url} target="_blank" rel="noopener noreferrer">{title}</a> &nbsp;<small><i>Status {state}</i></small></h5>
                <h6>changedFiles : {changedFiles} file(s)</h6>
                {comments.edges.length > 0 ?
                  (<>
                    <h6>Comments</h6>
                    <ul>
                      {comments.edges.map(comment => (
                        <li key={comment.node.id}>{comment.node.body} &nbsp; --- &nbsp;<strong><>By {comment.node.author.login}</></strong> </li>
                      ))}
                    </ul></>)
                  : <div />}
              </div>
            </div>
          </div>)
      })}
    </div >) : <div />
)

export default PullRequests;
