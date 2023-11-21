import React from 'react';
import { useUserAuth } from './_utils/auth-context';

const Week10Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  
  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn(); 
    } catch (error) {
      
      console.error('GitHub Sign-In Error:', error);
    }
  };

 
  const handleLogout = async () => {
    try {
      await firebaseSignOut(); 
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {user ? ( 
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <a href="/shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        <div>
          <p>Please sign in to continue:</p>
          <button onClick={handleGitHubSignIn}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default Week10Page;
