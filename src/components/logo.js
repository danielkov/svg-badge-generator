import React from 'react';

const logoContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 0 0 20px'
}

const logoStyles = {
  maxWidth: '100%',
  width: '300px'
}

export default class Logo extends React.Component {
  render () {
    return (
      <div style={ logoContainerStyles } >
        <img src="./img/badger-logo.svg" style={ logoStyles } />
      </div>
    )
  }
}
