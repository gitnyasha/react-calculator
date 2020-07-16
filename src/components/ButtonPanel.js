import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div className='buttonPanel'>
        <div className='group'>
          <Button onClick={name => this.props.onClick(name)} name='AC' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='+/-' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='%' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='/' />
        </div>
        <div className='group'>
          <Button onClick={name => this.props.onClick(name)} name='7' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='8' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='9' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='X' />
        </div>
        <div className='group'>
          <Button onClick={name => this.props.onClick(name)} name='4' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='5' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='6' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='-' />
        </div>
        <div className='group'>
          <Button onClick={name => this.props.onClick(name)} name='1' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='2' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='3' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='+' />
        </div>
        <div className='group'>
          <Button onClick={name => this.props.onClick(name)} name='0' color='lightgrey' wide />
          <Button onClick={name => this.props.onClick(name)} name='.' color='lightgrey' />
          <Button onClick={name => this.props.onClick(name)} name='=' />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
