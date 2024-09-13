"use client";

import '/public/styles/styles.css'
import { useState } from 'react';
import SearchBlock from '/src/components/searchBlock.jsx'
import MainMenu from '/src/components/mainMenuBlock.jsx'

export default function Home() {
  let [city, setCity] = useState();
  let [firstDate, setFirstDay] = useState();
  let [secondDate, setSecondDay] = useState();
  let [col, setCol] = useState();

  return (
    <>
    <MainMenu></MainMenu>
    <div className="content text-center">
      <h1>Hotel search - Поиск отелей</h1>
      <SearchBlock></SearchBlock>
    </div>
    </>
  );
}
