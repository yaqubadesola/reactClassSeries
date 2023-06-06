import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
//prepare our Dom Element
const myRootDom = document.getElementById('myDiv')
const root = ReactDOM.createRoot(myRootDom);

//Render to Dom
root.render(<App />);
