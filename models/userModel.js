import db from '../config/db.js';

const db=db;

const user={
    create:(userdata,callback)=>{
        const sql='INSERT INTO TABLE users(name,email,password,is_admin) VALUES (?,?,?,?)';

        db.query(sql,[userdata.name, userdata.email, userdata.password,userdata.is_admin],callback);
    }
};

export default user;
