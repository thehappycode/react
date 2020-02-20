import React, { useContext } from 'react';
import { RoomContext } from './../context';
import { Title } from './../components';

// get all unique values
const getUnique = (items, value) => {
    return [... new Set(items.map(item => item[value]))];
}

const RoomFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    let peoples = getUnique(rooms, "capacity");
    peoples = peoples.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        className="form-control"
                        value={type}
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/*end select type*/}
                {/*select guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        className="form-control"
                        value={capacity}
                        onChange={handleChange}
                    >
                        {peoples}
                    </select>
                </div>
                {/*end select guest*/}
                {/*room price*/}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        className="form-control"
                        min={minPrice}
                        value={price}
                        max={maxPrice}
                        onChange={handleChange} />
                </div>
                {/*end room price*/}
                {}
                {/*size*/}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <input 
                        type="input"
                        name="minSize"
                        id="minSize"
                        className="size-input"
                        min={minSize}
                        value={minSize}
                        onChange={handleChange}
                    />
                    <input 
                        type="input"
                        name="maxSize"
                        id="maxSize"
                        className="size-input"
                        min={maxSize}
                        value={maxSize}
                        onChange={handleChange}
                    />
                </div>
                {/*end size*/}
                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end extras*/}
            </form>
        </section>
    )
}

export default RoomFilter
