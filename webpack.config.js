const path = require('path')

module.exports={

    mode:"development",
    entry:path.resolve(__dirname, 'src/index.js'),
    output:{
        path:path.resolve(__dirname, 'dist'),
    },
    module:{


        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader', 'css-loader'
                ]
            }
        ]
    }

}