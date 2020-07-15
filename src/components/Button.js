import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  const { color } = props;
  const { wide } = props;
  return (
    wide
      ? (
        <div className='Button' style={{ width: '50%' }}>
          <button type='button' style={{ backgroundColor: color }}>{name}</button>
        </div>
      )
      : (
        <div className='Button' style={{ width: '25%' }}>
          <button type='button' style={{ backgroundColor: color }}>{name}</button>
        </div>
      )
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
Button.defaultProps = {
  name: '',
  color: '#FF911A',
  wide: false,
};

export default Button;
