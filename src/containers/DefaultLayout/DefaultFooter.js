import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultFooter = (props) => {
  // eslint-disable-next-line
  const { children, ...attributes } = props;

  return (
    <Fragment>
      <span><a href="https://coreui.io">CoreUI</a> &copy; 2019 creativeLabs.</span>
      <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
    </Fragment>
  );
};

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
