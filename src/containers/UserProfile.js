import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { USER_INFO } from '../querries';
import Details from '../components/Details';
import PullRequests from '../components/PullRequests';
import Repositories from '../components/Repositories';
import Loader from '../components/common/Loader';
import NotFound from '../components/common/NotFound';

const UserProfile = ({ match: { params: { username } } }) => {

  const { loading, error, data } = useQuery(USER_INFO, { variables: { username } })
  if (data) console.log(data);

  return (
    <div className="min-component-height container center">
      {loading && <Loader />}
      {data && (
        <div>
          <br />
          <Details data={data} />
          <br />
          <PullRequests pullRequests={data.user.pullRequests} />
          <br />
          <Repositories repositories={data.user.repositories} />
        </div>
      )}
      {error && <NotFound />}
    </div >

  )
};

export default UserProfile;
