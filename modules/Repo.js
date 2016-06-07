import React from 'react'

export class Repo extends React.Component {
  render() {
    return (
      <div>
        <h2>{ this.props.params.repoName }</h2>
      </div>
    )
  }
}
