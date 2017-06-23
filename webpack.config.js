module.exports = {
    entry : './app/app.jsx',
    output : {
        path : __dirname,
        filename : './public/bundle.js'
    },
    //takes an extension array (a list of file extension)
    resolve:{
        modules : [__dirname , 'node_modules'],
        alias : {
          //add your aliases  
        },
        //* will resolve all extensions
        extensions : ['*','.js','.jsx']
    },
    module:{
        loaders :[
            {
               loader : 'babel-loader',
               query : {
                   presets :['react','es2015']
               },
               test : /\.jsx?$/,
               exclude : /(node_modules|bower_components)/
            }
        ]
    }

}