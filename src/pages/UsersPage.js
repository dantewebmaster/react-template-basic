import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from '../components/User';
import usersService from '../services/usersService';

export default function UsersPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // async function fetchUser() {
    //   const response = await usersService.get('?nat=br');
    //   const [fetchedUser] = response.data.results;
    //   setUser(fetchedUser);
    // }

    // fetchUser();
    usersService.get('?nat=br')
      .then(res => {
        const [fetchedUser] = res.data.results;
        setUser(fetchedUser);
      })
      .catch(err => {
        console.log(err.message || 'Something went wrong');
      })
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        {user ? <User userInfo={user} /> : <p>Loading...</p>}
        <Link to="/" className="link">Go to Home Page</Link>
      </header>
    </div>
  );
}
