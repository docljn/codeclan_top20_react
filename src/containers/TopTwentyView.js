import React, {Component} from "react";
import TopTwentyList from "../components/TopTwentyList"

class TopTwentyView extends Component {

  render () {
    return (
      <div className="top-twenty-view">
        <TopTwentyList />
      </div>
    );
  }
}

export default TopTwentyView;
