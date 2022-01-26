import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import React, { useState } from "react";
import { firebaseDb } from '../firebase/firebase';
import "./Pointer.css";
import { DataSnapshot, onValue, ref, child, set, get} from 'firebase/database';

export type Position = {
  x_cordinate: number;
  y_cordinate: number;
};

export const Pointer = () => {
 const [currentPosition, setCurrentPosition] = useState<Position>({
   x_cordinate : 0,
   y_cordinate : 0,
  });

  const database = firebaseDb;

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ x_cordinate: data.lastX, y_cordinate: data.lastY });
    set(ref(database, 'pointer'), {
      x: data.lastX,
      y: data.lastY,
    });
  };

  const pointerRef = ref(database, 'pointer');
  onValue(pointerRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data.x != currentPosition.x_cordinate || data.y != currentPosition.y_cordinate) {
      setCurrentPosition({ x_cordinate: data.x, y_cordinate: data.y });
    }
  });


  return (
    <Draggable
    position={{
      x: currentPosition.x_cordinate,
      y: currentPosition.y_cordinate
    }}
    onDrag={onDrag}
    >
      <button className="pointer" />
    </Draggable>
  );
};
