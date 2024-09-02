import db from '../config/db.js';

const db=db;

const route={
    create:(routedata,callback)=>{
        const sql='INSERT INTO TABLE routes(origin, destination, departure_time, arrival_time) VALUES (?,?,?,?)';

        db.query(sql,[routedata.origin,routedata.destination,routedata.departure_time,routedata.arrival_time],callback);
    },

    //update: (id, routeData, callback) => {
      //  const sql = 'UPDATE routes SET origin = ?, destination = ?, departure_time = ?, arrival_time = ? WHERE id = ?';
        //db.query(sql, [routeData.origin, routeData.destination, routeData.departure_time, routeData.arrival_time, id], callback);
    //},
    // Additional methods as needed
};


export default route;