import React, { Component } from "react";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
// import uuid from ".../node_modules/uuid/dist/v4";
import { v4 as uuidv4 } from 'uuid';
// import uuid from 'uuid/package.json';

// BpxList, NewBoxForm , Box
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BoxArray: [],
    };
    this.addbox = this.addbox.bind(this);
    this.removebox = this.removebox.bind(this);
  }

  addbox(param1, param2, param3) {
    // let new_box = <Box id ={uuid()} height={param1} width= {param2} color={param3} />
    let new_box = { id: uuidv4(), height: param1, width: param2, color: param3 };
    let new_BoxArray = this.state.BoxArray;
    if( param1 >0 && param2 >0 )
            new_BoxArray.push(new_box);
    this.setState({ BoxArray: new_BoxArray });
  }

  removebox(id) {
    let boxlist = this.state.BoxArray;
    let new_BoxArray = boxlist.filter((box) => {
      return box.id !== id;
    });
    this.setState({ BoxArray: new_BoxArray });
  }

  render() {
    let Random1 = this.state.BoxArray.map((box) => {
      return (
        <Box
          box_func={this.removebox}
          id={box.id}
          height={box.height}
          width={box.width}
          color={box.color}
        />
      );
    });
    return (
      <div className="container">
        <div className="heading">
        <h2 > Put your Color of Box as per CSS Convention!!</h2>
        </div>
        <div className="form">
        <NewBoxForm form_func={this.addbox} />
        </div>

        <div className="list">
        {Random1}
        </div>

      </div>
    );
  }
}

export default BoxList;
