import db from '../config/db.js';

const user={
    create:(userdata,callback)=>{
        const sql='INSERT INTO users(name,email,password,is_admin) VALUES (?,?,?,?)';

        db.query(sql,[userdata.name, userdata.email, userdata.password,userdata.is_admin],callback);
    },
    findbyEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], callback);
    },
};

export default user;
