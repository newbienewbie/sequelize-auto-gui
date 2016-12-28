const SequelizeAuto=require('sequelize-auto');


function generate(database,user,pass,opts){

    const auto = new SequelizeAuto(database, user, pass,opts);
    return new Promise(function(resolve,reject){
        auto.run(function (err) {
            if (err) throw err;
            resolve(auto);
        });
    });
};


module.exports=generate;
