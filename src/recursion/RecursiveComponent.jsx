import React, { Component } from 'react';

export default class RecursiveComponent extends Component {

  getComponents(components) {
    if (!components.length) {
      return null;
    }

    const Cmp = components[0];

    return <Cmp children={this.getComponents(components.slice(1))}/>
  };

  render() {
    return (
      <div>
        {this.getComponents(this.props.components)}
      </div>
    );
  }
};
