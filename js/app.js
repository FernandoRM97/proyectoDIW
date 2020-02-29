/* jshint esversion: 6 */

var artistas = [];
var artista = {};

// CON ESTA CONSULTA SACAMOS ARTISTAS DE API
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
                    artistas.push(this.artista);
                    this.artistasFinal = artistas;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});

/*
// CON ESTA CONSULTA A API SACAMOS TOP CANCIONES DEL MES
new Vue({
    el: "#app2",
    data: {
        textSearch: "",
        cancionesFinal: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://30-000-radio-stations-and-music-charts.p.rapidapi.com/rapidapi",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "30-000-radio-stations-and-music-charts.p.rapidapi.com",
                    "x-rapidapi-key": "6e442364dcmshb440a2786cdbddap15aa49jsn2271087dd077"
                },
                "params": {
                    "chartsmonth": "1"
                }
            })
            .then((response) => {
                this.cancionesFinal = response.data.results;
            })
            .catch((error) => {
                console.log(error)
            });
    },
    computed: {
        searchSong: function() {
            return this.cancionesFinal.filter((item) => item.title_song.includes(this.textSearch));
        }
    }
});

*/

// CON ESTA CONSULTA SACAMOS UNA RADIO EN ESTE CASO MAXIMA FM
new Vue({
    el: "#app3",
    data: {
        radio: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://deezerdevs-deezer.p.rapidapi.com/album/14720800",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "6e442364dcmshb440a2786cdbddap15aa49jsn2271087dd077"
                }
            })
            .then((response) => {
                this.radio = response.data;
            })
            .catch((error) => {
                console.log(error)
            })
    }
});

// CON ESTA CONSULTA SACAMOS UNA RADIO EN ESTE CASO MAXIMA FM
new Vue({
    el: "#app4",
    data: {
        radio: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://deezerdevs-deezer.p.rapidapi.com/album/14720800",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "6e442364dcmshb440a2786cdbddap15aa49jsn2271087dd077"
                }
            })
            .then((response) => {
                this.radio = response.data.tracks.data;
            })
            .catch((error) => {
                console.log(error)
            })
    }
});