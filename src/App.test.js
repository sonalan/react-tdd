import { render } from '@testing-library/react';
import App from './App';
import {shallow} from "enzyme";
import RoomList from "./components/RoomList/RoomList";

describe('App', ()=>{
  let appWrapper;

  beforeAll(()=>{
      const appWrapper = shallow(<App/>);
  });

  /*
  it('renders without crashing', ()=>{
    const appWrapper = shallow(<App/>);
  })
  */

  it('renders a room list ', ()=>{
    const roomList = appWrapper.find(RoomList);

    expect(roomList).toHaveLength(1);
  });

  it('has state', ()=>{
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  })

  it('', ()=>{
    const appState = appWrapper.state();

    expect(appState.rooms).toBeDefined();
  })
});
