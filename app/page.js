// /app/page.js

import React from 'react';
import Link from 'next/link';
import StudentInfo from './StudentInfo';

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">
        <p>Go to Week 2</p>
      </Link>
      <Link href="/week3">
        <p>Go to Week 3</p>
      </Link>
      <Link href="/week4">
        <p>Go to Week 4</p>
      </Link>
      <Link href="/week5">
        <p>Go to Week 5</p>
      </Link>
      <Link href="/week6">
        <p>Go to Week 6</p>
      </Link>
      <Link href="/week7">
        <p>Go to Week 7</p>
      </Link>
      <Link href="/week8">
        <p>Go to Week 8 </p>
      </Link>
    </div>
  );
};

export default HomePage;
