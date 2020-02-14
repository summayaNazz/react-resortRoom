import React from 'react';
import { withRoomConsumer } from "../context";
import RoomFilter from './RoomFilter'
import RoomList from './RoomList';
import Loading from './Loading';


function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
      return <Loading />;
    }
    return (
      <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </>
    );
}
  
  export default withRoomConsumer(RoomContainer);
  
  // import React from "react";
  // import { RoomConsumer } from "../context";
  // import Loading from "./Loading";
  // import RoomsFilter from "./RoomsFilter";
  // import RoomsList from "./RoomsList";
  // export default function RoomContainer() {
  //   return (
  //     <RoomConsumer>
  //       {value => {
  //         const { loading, setRoom, sortedRooms,rooms } = value;
  //         if (loading) {
  //           return <Loading />;
  //         }
  //         return (
  //           <>
  //             <RoomsFilter rooms={rooms} />
  //             <RoomsList rooms={sortedRooms} setRoom={setRoom} />
  //           </>
  //         );
  //       }}
  //     </RoomConsumer>
  //   );
  // }

