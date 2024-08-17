import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Profile = () => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return <div>You need to log in to view this page.</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {keycloak.tokenParsed.preferred_username}!</p>
      <button onClick={() => keycloak.logout()}>Logout</button>
    </div>
  );
};

export default Profile;
