import React from 'react';
import Part from './Part';

const Content = (props) => {
  const { parts } = props;
  const total = props.parts.reduce((acc, part) => acc + part.exercises, 0)

  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <p>Number total of exercises {total}</p>
    </div>
  );
};

export default Content;