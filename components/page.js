import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div>
        <div><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/320px-Premier_League_Logo.svg.png?1482790792399"/></div>
        { this.props.children }
      </div>
    )
  }
}
