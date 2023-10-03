// /app/StudentInfo.js

import React from 'react';

const StudentInfo = () => {
  const name = 'Your Name';
  const courseSection = 'CPRG 306 A';
  const githubLink = 'https://github.com/yourusername';

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Course Section: {courseSection}</p>
      <p>
        GitHub Repository: <a href={githubLink}>{githubLink}</a>
      </p>
    </div>
  );
};

export default StudentInfo;
