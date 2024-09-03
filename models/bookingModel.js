import db from '../config/db.js';

const booking={
    create:(bookingdata,callback)=>{
        const sql='INSERT INTO bookings(user_id,bus_id,seat_number) VALUES (?,?,?)';

        db.query(sql,[bookingdata.user_id,bookingdata.bus_id,bookingdata.seat_number],callback);
    },
};

export default booking;

