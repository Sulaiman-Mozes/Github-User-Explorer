import React, { useState } from 'react';
import Search from '../components/common/Search';
import { useLazyQuery } from '@apollo/react-hooks';
import { USER_SEARCH } from '../querries';
import UsersComponent from '../components/Users';
import Loader from '../components/common/Loader';
import NotFound from '../components/common/NotFound';

const Home = () => {

  const [username, setUsername] = useState();
  const [fetchUsers, { loading, error, data }] = useLazyQuery(USER_SEARCH)

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUsers({ variables: { username } });
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div className="min-component-height">
      <Search handleChange={handleChange} handleSubmit={handleSubmit} />

      <div>
        {data && <UsersComponent users={data.search.edges} />}
        {loading && <Loader />}
        {error && <NotFound />}
      </div>
    </div>
  )
};

export default Home;
