import '/public/styles/styles.css'
import dynamic from 'next/dynamic';

const MyBookings = dynamic(() => import('/src/components/my_bookings.jsx'), {ssr: false})
export default () => {
    return <MyBookings></MyBookings>
}