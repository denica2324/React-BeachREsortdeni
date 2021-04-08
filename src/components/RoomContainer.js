/*
import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer({ context }) {

    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        < >
             <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
} 

export default withRoomConsumer(RoomContainer)

*/

 import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../Context';
import Loading from './Loading';
//import RoomContainer from './RoomContainer';

function RoomContainer() {
    return (
        <RoomConsumer>
            {value => {
                const {loading, sortedRooms, rooms} = value
                if (loading){
                    return <Loading />
                }
                return (
                    <div>
                         <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                )
            }}
        </RoomConsumer>
    )
}

export default RoomContainer
