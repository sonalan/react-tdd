import React,{Component} from 'react';
import RoomList from "./components/RoomList/RoomList";

class App extends Component{
  state = {}
  
  render(){
    return (
        <div className="App">
          <RoomList/>
        </div>
    );
  }
}

export default App;
