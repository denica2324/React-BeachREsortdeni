import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title'

class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms: rooms } = this.context
        console.log(rooms)
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                  
                    {loading ? <Loading />: 
                        rooms.map(room => {
                        return (
                            <Room key={room.id} room={room}/>
                        )
                    })}

                </div>
             </section>
             );
    }
}

export default FeaturedRooms;