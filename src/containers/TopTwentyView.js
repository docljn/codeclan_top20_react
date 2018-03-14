import React, {Component} from "react";
import MockAPIReturn from "../resources/mockAPI";
import TopTwentyList from "../components/TopTwentyList";

class TopTwentyView extends Component {

  constructor(props){
    super(props);
    this.state = {
      entries: MockAPIReturn.feed.entry,
      selectedEntry: null
    };
  }



  render () {
    const entrySummaryList = this.state.entries.map( (entry) => {
      return {id: entry.id.attributes["im:id"], position: entry["im:name"]["label"], title: entry["im:name"]["label"] , artist: entry["im:artist"]["label"]};
    });
    console.log(entrySummaryList[0]);

    return (
      <div className="top-twenty-view">
        <TopTwentyList entries={this.state.entries}/>
      </div>
    );
  }
}

export default TopTwentyView;
