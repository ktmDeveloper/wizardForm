import React, {useState} from 'react';
import PropTypes from 'prop-types';

const color = Math.random() > 0.5 ? 'green' : 'red';
export default function App (props) {
  const [count, setCount] = useState(0);
  return (
    <div style = {{color: color}}>
      <h1>{props.head}</h1>
    </div>
  );
}

App.propTypes = {
  head: PropTypes.string
};