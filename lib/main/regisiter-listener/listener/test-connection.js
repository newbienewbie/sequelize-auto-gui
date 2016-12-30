const Sequelize=require('sequelize');


function test(database,user,pass,opts){
    if(opts.dialect=="mssql"){
        opts.dialectOptions={
            port:opts.port,  // HOLY SHIT! This is the very point when trying to connect to a remote server.
        }
    }
    const sequelize=new Sequelize(database,user,pass,opts);
    return sequelize.authenticate();
}


module.exports=test;