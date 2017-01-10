import React from 'react';

const previewContainerStyles = {
  display: 'flex',
  width: '100%',
  padding: '30px',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  margin: '20px 0',
  background: '#A384B2'
}

export default class Preview extends React.Component {
  render () {
    return (
      <div style={ previewContainerStyles }>
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="20">
          <linearGradient id="b" x2="0" y2="100%"><stop offset="0" stopColor="#bbb" stopOpacity=".1"/><stop offset="1" stopOpacity=".1"/></linearGradient>
          <clipPath id="a"><rect width="128" height="20" rx="3" fill="#fff"/></clipPath>
          <g clipPath="url(#a)">
            <path fill="#555" d="M0 0h67v20H0z"/><path fill={this.props.color} d="M67 0h61v20H67z"/>
            <path fill="url(#b)" d="M0 0h128v20H0z"/>
          </g>
          <g fill="#fff" textAnchor="middle" fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif" fontSize="11">
            <text x="33.5" y="15" fill="#010101" fillOpacity=".3">{this.props.first}</text>
            <text x="33.5" y="14">{this.props.first}</text><text x="96.5" y="15" fill="#010101" fillOpacity=".3">{this.props.second}</text>
            <text x="96.5" y="14">{this.props.second}</text>
          </g>
        </svg>
      </div>
    )
  }
}
