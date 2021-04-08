import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    // Get Data

    componentDidMount() {
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(item =>
            item.featured)
        let maxSize = Math.max(...rooms.map(item => item.size))
        let maxPrice = Math.max(...rooms.map(item => item.price))

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize,
        })

    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let rooms = { ...item.fields, images, id }
            return rooms
        })
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug)
        return room;
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = event.target.name;

        this.setState(
            {
                [name]: value,
            },
            this.filterRooms
        )

    }

    filterRooms = () => {
        let { rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets } = this.state
        //all the rooms
        let tempRooms = [...rooms];
        // transform values
        capacity = parseInt(capacity);
        price = parseInt(price);

        //filter type
        if (type !== "all") {
            tempRooms = tempRooms.filter(item => item.type === type)
            this.setState({
                sortedRooms: tempRooms
            })
        }
        //filter capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(item => item.capacity >= capacity)
            this.setState({
                sortedRooms: tempRooms
            })
        }

        //filter price
        tempRooms = tempRooms.filter(item => item.price <= price)

        //filter Size
        tempRooms = tempRooms.filter(item => item.size <= maxSize && item.size >= minSize)
        console.log("sizeeee", tempRooms.size)

        // filter extras
        if (breakfast) {
            tempRooms = tempRooms.filter(item => item.breakfast)
        }
        if (pets) {
            tempRooms = tempRooms.filter(item => item.pets)
        }
        this.setState({
            sortedRooms: tempRooms
        })

    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };