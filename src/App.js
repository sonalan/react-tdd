import React,{Component} from 'react';
import RoomList from "./components/RoomList/RoomList";

class App extends Component{
  state = { rooms:[]}

  render(){
    return (
        <div className="App">
          <RoomList rooms={this.state.rooms}/>
        </div>
    );
  }
}

export default App;
