'use client'

import SearchBlock from '/src/components/searchBlock.jsx'
import MainMenu from '/src/components/mainMenuBlock.jsx'
import '/public/styles/styles.css'
import { useState } from 'react'

export default function MyBookings() {
    let [booking, setBooking] = useState(JSON.parse(localStorage.getItem('bookings')));
    const delete_booking = (id) => {
        let now = JSON.parse(localStorage.getItem('bookings')).filter(i => i.id != id);
        localStorage.setItem('bookings', JSON.stringify(now));
        setBooking(JSON.parse(localStorage.getItem('bookings')))
    }
    if (booking != null) {
        booking = booking
        .map(i => {
            return <div className="block">
            <img src={i.img} alt="" />
            <p>Название: {i.name}</p>
            <p>Количество гостей: {i.sleps}</p>
            <button onClick={() => {delete_booking(i.id)}}>Отменить</button>
        </div>
        })
    } else {
        booking = <h2>У вас нет забронированных номеров</h2>
    }
    return (<div>
        <MainMenu></MainMenu>
        <SearchBlock></SearchBlock>
        <div className="content">
            <h1>Ваши брони:</h1>
            {booking}
        </div>
    </div>);
}