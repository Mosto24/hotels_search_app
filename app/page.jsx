"use client";

import '/public/styles/styles.css'
import SearchBlock from '/src/components/searchBlock.jsx'
import MainMenu from '/src/components/mainMenuBlock.jsx'

export default function Home() {

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
