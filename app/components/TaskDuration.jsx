'use client'
import React, { useState } from 'react';

export default function TaskTime() {
    const [fromTime, setFromTime] = useState(0);
    const [toTime, setToTime] = useState(1);
    const [dragging, setDragging] = useState(null);

    const handleInputChange = (event) => {
        let inputValue = parseFloat(event.target.value);
        if (isNaN(inputValue)) return;

        // Ensure that the input value stays within the range of 0 to 24
        inputValue = Math.min(Math.max(inputValue, 0), 24);

        setFromTime(Math.min(inputValue / 24, toTime - 0.01));
        setToTime(Math.max(inputValue / 24, fromTime + 0.01));
    };

    const handleMouseDown = (position) => {
        setDragging(position);
    };

    const handleMouseMove = (event) => {
        if (dragging !== null) {
            const sliderRect = event.currentTarget.getBoundingClientRect();
            const newPosition = (event.clientX - sliderRect.left) / sliderRect.width;
            const updatedPosition = Math.max(0, Math.min(newPosition, 1));

            if (dragging === 'from') {
                // Ensure the "from" handle stays within bounds
                const newFromTime = updatedPosition;
                const newToTime = toTime;
                if (newFromTime <= newToTime) {
                    setFromTime(newFromTime);
                }
            } else if (dragging === 'to') {
                // Ensure the "to" handle stays within bounds
                const newToTime = updatedPosition;
                const newFromTime = fromTime;
                if (newToTime >= newFromTime) {
                    setToTime(newToTime);
                }
            }
        }
    };

    const handleMouseUp = () => {
        setDragging(null);
    };

    const handleMouseLeave = () => {
        if (dragging !== null) {
            setDragging(null);
        }
    };

    const formatTime = (time) => {
        const hours = Math.floor(time * 24);
        const minutes = Math.round((time * 24 - hours) * 60);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    };

    return (
        <div>
            <p className='text-white flex justify-start px-2 font-open-sans font-bold text-2xl tracking-tighter '>משך המשימה:</p>

            <div className='bg-[#164AA9] rounded-xl p-3'>
                <div className='flex items-center gap-1 justify-start font-normal text-xs '>
                    <label className='text-white '>מ-</label>
                    <input
                        className='text-center h-6 w-12 font-normal text-xs rounded-lg border focus:outline-none text-white bg-[#0D3D94]'
                        value={formatTime(fromTime)}
                        onChange={handleInputChange}
                        max={24} // Set the max attribute to 24
                    />
                        <label className='text-white'>עד ל-</label>
                    <input
                        className='text-center h-6 w-12 font-normal text-xs rounded-lg border focus:outline-none text-red-500 bg-[#0D3D94]'
                        value={formatTime(toTime)}
                        onChange={handleInputChange}
                        max={24} // Set the max attribute to 24
                    />
                </div>

                <div
                    className='rounded-l-full rounded-bl-full my-2 relative h-2 py-1 bg-cover'
                    style={{ backgroundImage: "url('/line.svg')"}}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                > <div
                        className='absolute h-4 w-4 bg-white rounded-full cursor-pointer top-2/4 transform -translate-y-2/4   shadow-md shadow-[#002A78]'
                        style={{ left: `${toTime * 100}%` }}
                        onMouseDown={() => handleMouseDown('to')}
                    ></div>
                    <div
                        className='absolute h-4 w-4 bg-slate-500 rounded-full cursor-pointer top-2/4 transform -translate-y-2/4 shadow-md shadow-[#002A78]'
                        style={{ left: `${fromTime * 100}%` }}
                        onMouseDown={() => handleMouseDown('from')}
                    ></div>
                   
                </div>
            </div>
        </div>
    );
}
