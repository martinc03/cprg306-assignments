import React from 'react';

const StudentInfo = () => {
  const name = 'Martin';
  const courseSection = 'CPRG 306 A';
  const githubLink = 'https://github.com/martinc03';

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Name: {name}</h2>
        <h2  className="text-2xl font-semibold">Course Section: {courseSection}</h2>
        <h2  className="text-2xl font-semibold">
          GitHub Repository: <a href={githubLink} className="text-blue-500">{githubLink}</a>
        </h2>
      </div>
    </div>
  );
};

export default StudentInfo;
