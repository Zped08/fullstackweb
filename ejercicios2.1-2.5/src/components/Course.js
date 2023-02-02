import React from 'react';

const Course = (props) => {
  const { course } = props;
  const { name, parts } = course;

  return (
    <>
      <h1>{name}</h1>
      {parts.map(part => (
        <div key={part.id}>
          <p>{part.name} {part.exercises}</p>
        </div>
      ))}
    </>
  );
};

export default Course;