import React from 'react';
import Header from './Header';
import Content from './Content'

const Course = (props) => {
  const { course } = props;
  const { name, parts } = course;

  return (
    <div>
      <Header name={name}/>
      <Content parts={parts}/>
    </div>
  );
};

export default Course;