"use client";
import {cities} from '/src/data_base'
import SearchBlock from '/src/components/searchBlock.jsx'
import MainMenu from '/src/components/mainMenuBlock.jsx'
import HotelBlock from '/src/components/hotelBlock.jsx'

export default () => {
    let city = new URL(window.location.href).searchParams.get('city');
    let days = new URL(window.location.href).searchParams.get('days');
    let sleps = new URL(window.location.href).searchParams.get('sleps')

    let content = cities[city].map(i => {
        if (i['maxSleps'] < sleps || i['maxDays'] < days) {
        } else {
        return <HotelBlock
        name={i.name}
        img={i.img}
        stars={i.stars}
        price={i.minPrice}
        description={i.description}
        ></HotelBlock>
        }
    }).filter(i => i!=undefined);
    if (content.length < 1) {
        content = <h2>Нет подходящих отелей</h2>
    }
    return (<div>
        <MainMenu></MainMenu>
        <SearchBlock></SearchBlock>
        <div className="container">
            <div className="row">
                {content}
            </div>
        </div>
    </div>);
}