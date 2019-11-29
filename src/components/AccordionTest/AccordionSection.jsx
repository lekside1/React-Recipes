/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HyperLink from '../containers/HyperLink';

class AccordionSection extends Component {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div>
        <div
          style={{
            background: isOpen ? 'whitesmoke' : 'black',
            color: isOpen ? 'black' : 'whitesmoke',
            border: '1px solid #008f68',
            padding: '5px 5px',
          }}
        >
          <div onClick={onClick} className="selector">
            <div style={{ float: 'left' }} className="mr1 ml1">
              {!isOpen && <span>&#9658;</span>}
              {isOpen && <span>&#9660;</span>}
            </div>
            <span className="mr1">
              {!isOpen && <span role="img" aria-label="closed">📁</span>}
              {isOpen && <span role="img" aria-label="open">📂</span>}
            </span>
            {label}
          </div>
          <div className="pl4 selector">
            {isOpen && (
              <HyperLink to={`/${this.props.children.name}`} className="ml1 scenario">
                <span role="img" aria-label="file">📄 {this.props.children}</span>
              </HyperLink>
            )}
          </div>
        </div>
      </div>
    );
  }
}

AccordionSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AccordionSection;
