const SequelizeAuto=require('sequelize-auto');


function generate(database,user,pass,opts){

    if(opts.dialect=="mssql"){
        opts.dialectOptions={
            port:opts.port,  // HOLY SHIT! This is the very point when trying to connect to a remote server.
        }
    }
    const auto = new SequelizeAuto(database, user, pass,opts);
    return new Promise(function(resolve,reject){
        auto.run(function (err) {
            if (err) throw err;
            resolve(auto);
        });
    });
};


module.exports=generate;
