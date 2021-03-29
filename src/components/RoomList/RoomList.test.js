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

    it('renders a ul element', ()=>{
        const roomListUl = roomListWrapper.find('ul');

        expect(roomListUl).toHaveLength(1);
    });

    it('renders no li elements when no room exist', () => {
        const roomListItems = roomListWrapper.find('li');
        
        expect(roomListItems).toHaveLength(0);
    })

})
