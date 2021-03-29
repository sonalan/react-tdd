import { render } from '@testing-library/react';
import App from './App';
import {shallow} from "enzyme";
import RoomList from "./components/RoomList/RoomList";

describe('App', ()=>{
  it('renders without crashing', ()=>{
    const appWrapper = shallow(<App/>);
  })

  it('renders a room list ', ()=>{
    const appWrapper = shallow(<App/>);
    const roomList = appWrapper.find(RoomList);

    expect(roomList).toHaveLength(1);
  });
});
