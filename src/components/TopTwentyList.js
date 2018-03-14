import React, {Component} from "react";
import TopTwentyEntry from "./TopTwentyEntry";

class TopTwentyList extends Component {
  constructor(props){
    super(props);
  }
  
  render () {
    console.log(this.props);
    return(
      <div>
        <TopTwentyEntry entry={this.props.entries[0].title.label}/>
      </div>
    );
  }
}


export default TopTwentyList;
