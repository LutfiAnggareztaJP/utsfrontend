import React, { Component } from 'react'

export default class Data extends Component {
  render() {
      const {nama,_gantinama} = this.props
    return (
      <div>
          <h2>Data merubah nama menggunakan props dan state = {nama} </h2>
          <button onClick={() => _gantinama("Lutfi Anggarezta JP")}></button>
      </div>
    )
  }
}
