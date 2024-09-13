"use client";

export default function HotelBlock(props) {
    let stars = []
    for (let i = 0; i<props.stars; i++) {
        stars.push(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.49833 2.53488L6.56175 6.46235L2.22864 7.09372L5.36537 10.149L4.62682 14.4651L8.50187 12.426L12.3786 14.4623L11.6367 10.1466L14.7713 7.08899L10.4377 6.46094L8.49833 2.53488Z" fill="#FCEA2B"/>
            <path d="M8.49833 2.53488L6.56175 6.46235L2.22864 7.09372L5.36537 10.149L4.62682 14.4651L8.50187 12.426L12.3786 14.4623L11.6367 10.1466L14.7713 7.08899L10.4377 6.46094L8.49833 2.53488Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>)
    }

    const search = () => {
        let url = new URL(window.location.origin + window.location.pathname + '/hotel' + window.location.search)
        url.searchParams.append('name', props.name);
        console.log(url)
        window.location = url
    }
    return (
        <div className="hotel">
            <img src={props.img} alt="" />
            <div className="stars">
                {stars}
            </div>
            <h2>{props.name}</h2>
            <div className="container">
                <div className="row">
            <div className="price col-6">
                <p>Цена за ночь: {props.price}</p>
            </div>
            <button className='add_hotel col-6' onClick={() => search()}>Выбрать</button>
                </div>
            </div>
        </div>
    );
}