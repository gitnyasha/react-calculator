import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      buttonName: null,
      display: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  clearAll() {
    this.setState({
      total: null,
      next: null,
      operation: null,
      buttonName: null,
      display: null,
    });
  }

  clearAfterCalculation() {
    this.setState({
      next: null,
      operation: null,
      buttonName: null,
    });
  }

  handleClick(e) {
    const press = e.target.textContent;
    if (press === 'AC') {
      this.clearAll();
    } else if (press === '=') {
      this.setState(prevState => (calculate(prevState, prevState.buttonName)));
      this.setState(prevState => ({ display: prevState.total }));
      this.clearAfterCalculation();
    } else if (isNaN(Number(press))) {
      this.setState({
        operation: press,
        buttonName: press,
      });
      if (press === '+/-') {
        this.setState(prevState => (calculate(prevState, prevState.buttonName)));
        this.setState(prevState => ({ display: prevState.total }));
      } else {
        this.setState(prevState => ({ display: prevState.display + press }));
      }
    } else if (this.state.operation === null) {
      if (this.state.total === null) {
        this.setState({ total: press });
      } else {
        this.setState(prevState => ({ total: prevState.total + press }));
      }
      this.setState(prevState => ({ display: prevState.total }));
    } else if (this.state.next === null) {
      this.setState({ next: press });
      this.setState(prevState => ({ display: prevState.display + press }));
    } else {
      this.setState(prevState => ({ next: prevState.next + press }));
      this.setState(prevState => ({ display: prevState.display + press }));
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Display result={this.state.display ? this.state.display : '0'} />
          <ButtonPanel onClick={this.handleClick} />
        </header>
      </div>
    );
  }
}

export default App;
