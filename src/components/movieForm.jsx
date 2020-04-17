import React from 'react';

const MovieForm = props => {
  return (
    <div>
      <h1>MovieForm - {props.match.params.id} </h1>
    </div>
  );
};

export default MovieForm;
