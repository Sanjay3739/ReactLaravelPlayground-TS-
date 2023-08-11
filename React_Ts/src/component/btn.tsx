import React from 'react';
import { Link } from 'react-router-dom';

function CreateButton(): JSX.Element {
  return (
    <Link to="/" className="btn btn-primary">
      Home
    </Link>
  );
}

export default CreateButton;
