import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../components/Title'
//get all uniques value 
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext)
    const { handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets } = context


    //get unique types
    let types = getUnique(rooms, "type");

    //add all
    types = ["all", ...types]

    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}> {item} </option>
    })
    //get unique capacity
    let capacities = getUnique(rooms, "capacity")
    //map to jsx
    capacities = capacities.map((item, index) => {
        return <option value={item} key={index} >{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/*Select Type */}
                <div className="form-group">
                    <label htmlFor="type">room type </label>
                    <select name="type" id="type" className="form-control" value={type} onChange={handleChange}>{types}</select>
                </div>
                {/*End Select Type */}
                {/*Select guest */}
                <div className="form-group">
                    <label htmlFor="capacity"> guest</label>
                    <select name="capacity" id="capacity" className="form-control" value={capacity} onChange={handleChange}>{capacities}</select>
                </div>
                {/*End Guest */}
                {/*Select Price */}
                <div className="form-group">
                    <label htmlFor="price"> Room price $ {price} </label>
                    <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price}
                        onChange={handleChange} className="form-control" />
                </div>
                {/*End Select Price */}
                {/*Size */}
                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/*End Size */}
                {/*Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                 </div>

                {/*End Extras */}


            </form>

        </section>
    )
}

export default RoomsFilter
