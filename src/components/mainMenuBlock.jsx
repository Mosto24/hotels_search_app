"use client";

export default function MainMenu() {
    return (
        <div className='menu'>
        <div className="container">
          <div className="row">
            <div className="col-10"><button onClick={() => {
              window.location = window.location.origin
            }}>Hotel Search</button></div>
            <div className="col-2"><button onClick={() => window.location = window.location.origin + '/my_bookings'}>Мои заказы</button></div>
          </div>
        </div>
        </div>
    );
}
