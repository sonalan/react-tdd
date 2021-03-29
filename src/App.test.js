import { render } from '@testing-library/react';
import App from './App';
import {shallow} from "enzyme";
import RoomList from "./components/RoomList/RoomList";

describe('App', ()=>{
  let appWrapper;

  beforeAll(()=>{
      const appWrapper = shallow(<App/>);
  });

  it('renders without crashing', ()=>{
    const appWrapper = shallow(<App/>);
  })

  it('renders a room list ', ()=>{
    const appWrapper = shallow(<App/>);
    const roomList = appWrapper.find(RoomList);

    expect(roomList).toHaveLength(1);
  });

  it('has state', ()=>{
    const appWrapper = shallow(<App/>);
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  })

  it('', ()=>{
    const appWrapper = shallow(<App/>);
    const appState = appWrapper.state();

    expect(appState.rooms).toBeDefined();
  })
});
