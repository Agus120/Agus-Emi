const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const home ={

    index:function(req,res){

        res.set({'content-type':'text/plain;charset=utf-8'});

        res.write(' ----------\n');

        res.write('|Bienvenido|\n');

        res.write(' ----------\n\n');

        res.write("Estas son nuestras concesionaras:\n");        

        concesionarias.forEach(sucursal => {

            res.write(sucursal.sucursal + '\n');

        });

        res.end();
    }
}

module.exports = home