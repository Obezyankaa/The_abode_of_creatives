import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.jsx'

window.addEventListener('load', () => {
    ReactDOM.render(<Header />, document.getElementById('react_root'));
});
