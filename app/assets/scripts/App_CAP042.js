var john2 = {
    name: "John Doe",
    favoriteColor : "blue",
    greet: function() {
        console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".");
        
    }
}

/**Para que esto funcione tenemos q instalar webpack */
//var Person = require('./modules/Person'); //REQUIRE es notación de nodeJS, NO de js
import Person from './modules/Person';
var $ = require('jquery');

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes.");
    }
}

alert("Testing 12345");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

/**esto es jquery que permite x ejemplo ocultarl el h1 en tiempo de ejecución*/
$("h1").remove();