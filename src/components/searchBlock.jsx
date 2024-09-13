"use client";

import { useState } from "react";

export default function SearchBlock() {
    let [city, setCity] = useState();
    let [days, setDays] = useState();
    let [col, setCol] = useState();
    const search = () => {
        let url = new URL(window.location.host);
        url.searchParams.set('city', city.toLowerCase());
        url.searchParams.set('days', days.toLowerCase());
        url.searchParams.set('sleps', col.toLowerCase());
        window.location = window.location.origin + '/hotels_page' + url.search
    }
 
    return (
        <div className='queryTask'>
        <div className="container">
          <div className="row">
            <select className='col-2' onChange={(e) => setCity(e.target.value)}>
              <option value=""></option>
              <option value="moscow">Москва</option>
              <option value="saint petersburg">Санкт-Петербург</option>
              <option value="saratov">Саратов</option>
              <option value="novosibirsk">Новосибирск</option>
            </select>
            <input type="text" placeholder="Количество дней" className="col-2" value={days} onChange={(e) => setDays(e.target.value)}/>
            <input placeholder='Количество гостей' type="text" className='col-2' value={col} onChange={(e) => setCol(e.target.value)}/>
            <button className='col-1 search_button' onClick={() => search()}>Найти</button>
          </div>
        </div>
      </div>
    );
}