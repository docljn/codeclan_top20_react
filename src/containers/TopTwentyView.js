import React, {Component} from "react";
import MockAPIReturn from "../resources/mockAPI";
import TopTwentyList from "../components/TopTwentyList";

class TopTwentyView extends Component {

  constructor(props){
    super(props);
    this.state = {
      entries: JSON.parse(MockAPIReturn.feed.entry),
      selectedEntry: null
    };
  }



  render () {
    return (
      <div className="top-twenty-view">
        <TopTwentyList entries={this.state.entries}/>
      </div>
    );
  }
}

export default TopTwentyView;
