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
    const entrySummaryList = this.state.entries.map( (entry, index) => {
      return {id: entry.id.attributes["im:id"], position: index+1, title: entry["im:name"]["label"] , artist: entry["im:artist"]["label"], link: entry["im:collection"]["link"]["attributes"]["href"]};
    });

    return (
      <div className="top-twenty-view">
        <TopTwentyList entries={entrySummaryList}/>
      </div>
    );
  }
}

export default TopTwentyView;
