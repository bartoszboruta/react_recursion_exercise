import React, { Component } from 'react';

export default class RecursiveComponent extends Component {

  getComponents(components) {
    if (!components.length) {
      return null;
    }

    const Container = components[0];

    return <Container>
      {this.getComponents(components.slice(1))}
    </Container>
  };

  render() {
    return (
      <div>
        {this.getComponents(this.props.components)}
      </div>
    );
  }
};
