'use client'

import MainMenu from '/src/components/mainMenuBlock.jsx'
import SearchBlock from '/src/components/searchBlock.jsx'
import RoomBlock from '/src/components/roomBlock.jsx'
import {cities} from '/src/data_base.js'
import { useState } from 'react'

function page() {
    const addBooking = () => {
      setSucsessBooking(true);
      setTimeout(() => setSucsessBooking(false), 10000);
    }
    let [sucsessBooking, setSucsessBooking] = useState(false);
    let url = new URL(window.location);
    let hotel = cities[url.searchParams.get('city')].filter(i => i['name'] == url.searchParams.get('name'))[0];
    return <div>
        <MainMenu></MainMenu>
          {sucsessBooking ? <div className='sucsessBooking'>Успешно забронированно</div> : ''}
        <SearchBlock></SearchBlock>
        <div className="container content_hotel">
        <h2>{hotel['name']}</h2>
            <div className="row">
                
        <div id="carouselExample" class="carousel col-7 slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={hotel['img']} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={hotel['rooms'][0]['img']} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={hotel['rooms'][1]['img']} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button onClick={() => console.log(hotel)} class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>
</div>
<div className="decrription col-5">{hotel['description']}</div>
            </div>
        </div>
        <div className="rooms">
            {hotel['rooms'].map(i => {
                return <RoomBlock
                name={i.name}
                img={i.img}
                sleps={i.sleps}
                price={i.price}
                accept={addBooking}
                ></RoomBlock>
            })}
        </div>
    </div>
    
}
export default page