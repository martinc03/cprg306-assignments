import React from 'react';
import Link from 'next/link';
import StudentInfo from './StudentInfo';
import background from './images/Art_of_Guweiz_124.png';

const HomePage = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="text-white text-4xl text-center pt-10">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <div className="flex justify-center space-x-4 mt-4">
        <Link href="/week2">
          Go to Week 2
        </Link>
        <Link href="/week3">
          Go to Week 3
        </Link>
        <Link href="/week4">
          Go to Week 4
        </Link>
        <Link href="/week5">
          Go to Week 5
        </Link>
        <Link href="/week6">
          Go to Week 6
        </Link>
        <Link href="/week7">
          Go to Week 7
        </Link>
        <Link href="/week8">
          Go to Week 8
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
