import React from 'react'

class SingleComponentLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default SingleComponentLayout