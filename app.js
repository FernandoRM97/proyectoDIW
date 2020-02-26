/* jshint esversion: 6 */

var artistas = [];
var artista = {};

new Vue({
    el: "#app",
    data: {
        textSearch: "",
        artistasFinal: []
    },
    created() {
        for (let i = 1; i < 50; i++) {
            axios({
                    "method": "GET",
                    "url": "https://deezerdevs-deezer.p.rapidapi.com/artist/" + i,
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "6e442364dcmshb440a2786cdbddap15aa49jsn2271087dd077"
                    }
                })
                .then((response) => {
                    this.artista = response.data;
                    console.log('valor actual', this.artista);
                    artistas.push(this.artista);
                    this.artistasFinal = artistas;
                    console.log('array artistas', this.artistasFinal);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    computed: {
        artistFilter() {
            var textSearch = this.textSearch;
            return this.artistasFinal.filter(function(el) {
                return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }

});

function canciones(name) {
    new Vue({
        el: "#app2",
        data: {
            textSearch: "",
            cancionesFinal: []
        },
        created() {
            axios({
                    "method": "GET",
                    "url": "https://deezerdevs-deezer.p.rapidapi.com/search",
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "6e442364dcmshb440a2786cdbddap15aa49jsn2271087dd077"
                    },
                    "params": {
                        "q": name
                    }
                })
                .then((response) => {
                    this.cancionesFinal = response.data;
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        computed: {
            artistFilter() {
                var textSearch = this.textSearch;
                return this.artistasFinal.filter(function(el) {
                    return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
                });
            }
        }

    });
}