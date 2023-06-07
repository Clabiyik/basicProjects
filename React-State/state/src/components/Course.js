import React from 'react';
import Bootstrap from '../images/bootstrap5.png';
import Angular from '../images/angular.jpg';
import Ccsharp from '../images/ccsharp.png';
import KompleWeb from '../images/kompleweb.jpg';

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Ccsharp: Ccsharp,
  KompleWeb: KompleWeb,
};

function Course({ courseName }) {
  console.log(Angular);
  console.log(courseMap[courseName]);

  return (
    <div>
      <img src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
