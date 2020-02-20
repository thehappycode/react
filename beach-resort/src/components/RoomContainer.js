import React from 'react';
import { RoomFilter, RoomList } from './../components';
import { withRoomConsumer } from './../context';
import Loading from './Loading';

const RoomContainer = ({ context }) => {
    const { rooms, sortedRooms, loading } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);




// import React from 'react'
// import { RoomFilter, RoomList } from '.';
// import { RoomConsumer } from './../context';
// import Loading from './Loading';
// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {value => {                
//                 const {rooms, sortedRooms, loading} = value
//                 if(loading){
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello from RoomsContainer page
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
//     );
// }

// export default RoomContainer
