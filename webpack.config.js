let webpack = require('webpack')
module.exports = {
    entry : [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    // externals : {
    //     jquery :'jQuery'
    // },
    plugins :[
        new webpack.ProvidePlugin({
            'window.$' : 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    output : {
        path : __dirname,
        filename : './public/bundle.js'
    },
    //takes an extension array (a list of file extension)
    resolve:{
        modules : [__dirname , 'node_modules'],
        alias : {
          //add your aliases 
          main : 'app/components/main.jsx',
          applicationStyles : 'public/index.scss'
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