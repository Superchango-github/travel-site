/**webpack requiere el path absoluto y no el relativo como
 * ./app/temp..., para eso hacemos esto.
 * Esto obtienen el path absoluto
 */
var path = require('path');
module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js" /*puede ser cualquier nombre App-bundle x ejemplo*/
    }
}