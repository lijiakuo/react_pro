import React, { Component } from 'react'

const simpleHoc = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <div>
          <WrappedComponent></WrappedComponent>
        </div>
      )

    }
  }
}
export default simpleHoc