'use client'

export default function RoomBlock(props) {
const add_booking = () => {
    let hotel = [{
        name: props.name,
        img: props.img,
        sleps: props.sleps,
        id: ''
    }];
    let now = JSON.parse(localStorage.getItem('bookings'));
    if (now == null) {
        hotel[0].id = 1;
        localStorage.setItem('bookings', JSON.stringify(hotel));
    } else {
        hotel[0].id = now.length+1; 
        now.push(hotel[0]);
        localStorage.setItem('bookings', JSON.stringify(now));
    }

}

    return (
        <div className="block">
            <img src={props.img} alt="" />
            <p>Название: {props.name}</p>
            <p>Количество гостей: {props.sleps}</p>
            <p>{props.price} рублей за ночь</p>
            <button onClick={() => {
                add_booking();
                props.accept();
            }}>Забронировать</button>
        </div>
    );
}