// /app/week2/page.js

import React from 'react';
import StudentInfo from '../StudentInfo';

const Week2Page = () => {
  return (
    <div className="min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mt-4">My Shopping List</h1>
        <StudentInfo />
      </div>
    </div>
  );
};

export default Week2Page;
