import React,{Component} from 'react';
import RoomList from "./components/RoomList/RoomList";

class App extends Component{
  state = { rooms:[]}

  render(){
    return (
        <div className="App">
          <RoomList/>
        </div>
    );
  }
}

export default App;
