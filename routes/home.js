const fs = require(`fs`);

let homePage = {

    bd: './data/concesionarias.json',

    titulo: " Bienvenido ! ",

    leerJSON: function() {

        let concJson = fs.readFileSync(this.bd, 'utf-8');

        let conces = JSON.parse(concJson);

        return conces;
    },

    listarNombres: function() {

        let conces = this.leerJSON();

        let titleConces = []

        conces.conces.forEach(function(conc) {
            titleConces.push(conc.title);
        })

        titleConces.sort();

        return titleConces;
    }
}

module.exports = homePage;