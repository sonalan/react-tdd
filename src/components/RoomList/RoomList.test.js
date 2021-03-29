import {shallow} from "enzyme";
import RoomList from "./RoomList";

describe('Room List',()=>{
    let roomListWrapper;

    beforeAll(()=>{
        roomListWrapper = shallow(<RoomList/>);
    });

    it('renders without crashing',()=>{
        shallow(<RoomList/>);
    });

    it('', ()=>{
        const roomListUl = roomListWrapper.find('ul');

        expect(roomListUl).toHaveLength(1);
    });


})
