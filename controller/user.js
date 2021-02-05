const {User, sequelize} = require("../models");
const jwt = reuqire("jsonwebtoken");

const signup = async(req, res)=>{
    const {userId, password, realname, nickname, pnumber} = req.body;
    
}
