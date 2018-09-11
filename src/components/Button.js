import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const typeTypes = {
  BUTTON: 'button',
  LINK: 'link'
}

class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf([typeTypes.BUTTON, typeTypes.LINK]),
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    type: typeTypes.BUTTON
  }

  render() {
    const { children, type, ...rest } = this.props;
    switch (type) {
      case typeTypes.LINK:
        return (
          <a className="Button" {...rest}>
            {children}
          </a>
        );
      default: case typeTypes.BUTTON:
        return (
          <button className="Button" {...rest}>
            {children}
          </button>
        );
    }
  }
}

export default Button;
