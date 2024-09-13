import dynamic from 'next/dynamic';
import '/public/styles/styles.css'

const HotelPage = dynamic(() => import('/src/components/hotel_page.jsx'), {ssr: false})

export default () => {
  return <HotelPage></HotelPage>
}