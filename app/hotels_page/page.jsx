import '/public/styles/styles.css'
import dynamic from 'next/dynamic';

const HotelPage = dynamic(() => import('/src/components/hotel_pages.jsx'), {ssr: false})
export default () => {
    return <HotelPage></HotelPage>
}