import React from 'react';
export default function RoomList({rooms}) {
    return (
        <ul>
            {rooms&&rooms.map(room=>{<li>{room.name}</li>})}
        </ul>
    )
}
