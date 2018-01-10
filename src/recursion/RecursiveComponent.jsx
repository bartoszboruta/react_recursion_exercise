import React, { Component } from 'react';
import _ from 'lodash';

export default class RecursiveComponent extends Component {

  getComponents(components) {
    if (!components.length) {
      return;
    }

    return components[0](this.getComponents(_.tail(components)));
  };

  render() {
    return (
      <div>
          {this.getComponents(this.props.components)}
      </div>
    );
  }
};
