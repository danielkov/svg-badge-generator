import React from 'react';
import ReactDOM from 'react-dom';
import Preview from './components/preview';
import { GithubPicker } from 'react-color';
import Logo from './components/logo';

const wrapperStyles = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#ddd5e1'
}

const textInputStyles = {
  boxSizing: 'border-box',
  width: 'calc(100% - 60px)',
  fontSize: '22px',
  padding: '5px 10px',
  margin: '0 30px 20px 30px'
}

const mainBodyStyles = {
  maxWidth: '500px',
  border: '1px solid rgba(0,0,0,.1)',
  borderRadius: '5px',
  padding: '20px 0',
  fontWeight: 'bold',
  background: 'white'
}

const buttonStyles = {
  borderColor: 'rgb(148, 101, 171)',
  backgroundColor: '#7A4E91',
  borderWidth: '1px',
  borderRadius: '5px',
  color: 'white',
  fontWeight: 'bold',
  margin: '40px 30px 30px',
  boxSizing: 'border-box',
  display: 'block',
  width: '100%',
  fontSize: '22px',
  padding: '15px',
  width: 'calc(100% - 60px)',
  borderBottomWidth: '4px'
}

const colorPickerContainerStyles = {
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

class BadgeApp extends React.Component {

  constructor () {
    super();
    this.state = {
      first: 'Example',
      second: 'failing',
      color: {
        r: 184,
        g: 0,
        b: 0,
        a: 1
      }
    }
  }

  handleChangeComplete (color) {
    this.setState({ color: color.rgb });
  }

  rgbaToString (rgba) {
    return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
  }

  handleInputChange (e) {
    if (e.target.name === 'first') {
      this.setState({first: e.target.value})
    }
    else if (e.target.name === 'second') {
      this.setState({second: e.target.value})
    }
  }

  handleButtonClick (e) {
    e.preventDefault();
    let url = `http://localhost:3000/badge/${this.state.first}/${this.state.second}/${this.rgbaToString(this.state.color)}`;
    window.location = url;
  }

  render () {
    return (
      <div style={ wrapperStyles }>
        <div style={ mainBodyStyles } >
          <Logo />
          <div>
            <input type="text" name="first" value={ this.state.first } onChange={ this.handleInputChange.bind(this) } style={ textInputStyles } />
            <input type="text" name="second" value={ this.state.second } onChange={ this.handleInputChange.bind(this) } style={ textInputStyles } />
          </div>
          <div style={ colorPickerContainerStyles } >
            <GithubPicker
              color={ this.state.color }
              onChangeComplete={ this.handleChangeComplete.bind(this) }
            />
          </div>
          <Preview
            color={ this.rgbaToString(this.state.color) }
            first={ this.state.first }
            second={ this.state.second }
          />
          <button onClick={ this.handleButtonClick.bind(this) } style={ buttonStyles } >Get Badge!</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<BadgeApp />, document.getElementById('app'));
