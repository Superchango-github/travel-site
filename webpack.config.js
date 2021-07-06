/**webpack requiere el path absoluto y no el relativo como
 * ./app/temp..., para eso hacemos esto.
 * Esto obtienen el path absoluto
 */
var path = require('path');

module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js",
        vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js" /*puede ser cualquier nombre App-bundle x ejemplo
                                se cambia [] para que el nombre sea dinamico*/
    },
    /**esto es para babel */
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'] 
                },
                test: /\.js$/, /**expresión regular */
                exclude: /node_modules/
            }
        ]
    }
}