import React, { Component } from 'react'
import Data from './Data';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state =({ nama: "LUTFI AJP"})
    } 

        _gantinama = (nama_baru) => {
            this.setState ({ nama : nama_baru})
        }
  render() {
    return (
      <div>
          {this.state.nama}
          <button onClick={() => this._gantinama("LUTFI ANGGAREZTA JP")}>
              Ganti nama</button>
          <Data nama= {this.state.nama} 
          _gantinama={this._gantinama}/>

        <hr />
        <h3>LUTFI ANGGAREZTA JP SM 4.1</h3>
      </div>
    )
  }
}
