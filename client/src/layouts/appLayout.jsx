import React from 'react'

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default AppLayout