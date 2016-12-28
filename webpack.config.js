const path=require('path');

const PATH={
    main:path.join(__dirname,"lib","ui"),
    dist:path.join(__dirname,"dist","js"),
};

module.exports={
    entry:{
        index:path.join(PATH.main,"index.js"),
    },
    output:{
        path:PATH.dist,
        filename:'[name].js',
    },
    module:{
        loaders:[
            {
                test:/\.jsx?/,
                loaders:["babel-loader"],
            },
            {
                test:/\.css$/,
                loaders:["style-loader","css-loader"],
            }
        ],
    },
};