import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', null, 'Hello world!');
const domElement = document.getElementById('root');
ReactDOM.render(title, domElement);
