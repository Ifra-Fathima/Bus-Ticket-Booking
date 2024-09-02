import db from '../config/db.js';

const db=db;

const bus={
    create:(busdata,callback)=>{
        const sql='INSERT INTO TABLE buses(bus_number,capacity,route_id) VALUES (?,?,?)';

        db.query(sql,[busdata.bus_number,busdata.capacity,busdata.route_id],callback);
    },

    //update:(id, busData, callback) => {
        //const sql = 'UPDATE buses SET bus_number = ?, capacity = ?, route_id = ? WHERE id = ?';
        //db.query(sql, [busData.bus_number, busData.capacity, busData.route_id, id], callback);
};

export default bus;