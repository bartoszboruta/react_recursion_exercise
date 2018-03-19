import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent';

const One = (children) => (
  <div className="box">One {children}</div>
);

const Two = (children) => (
  <div className="box">Two {children}</div>
);

const Three = (children) => (
  <div className="box">Three {children}</div>
);

const components = [One, Two, Three];

export default class Recursion extends Component {
  render() {
  	return (
      <div className='App-wrapper'>
        <RecursiveComponent components={components} />
      </div>
    );
  }
};
