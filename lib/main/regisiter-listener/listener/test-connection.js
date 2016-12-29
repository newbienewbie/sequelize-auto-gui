const Sequelize=require('sequelize');


function test(database,user,pass,opts){
    const sequelize=new Sequelize(database,user,pass,opts);
    return sequelize.authenticate();
}


module.exports=test;