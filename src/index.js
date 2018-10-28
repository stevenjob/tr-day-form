import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';

const title = process.env.REACT_APP_TITLE;
const intro = process.env.REACT_APP_INTRO;
const formString = process.env.REACT_APP_FORM;
const form = JSON.parse(formString);

const appConfig =
  title && intro
    ? {
        title,
        intro,
        form
      }
    : null;

ReactDOM.render(<App config={appConfig} />, document.getElementById('root'));
