var artistas = [];
var artista = {};

for (var index = 1; index < 20; index++) {
    new Vue({
        el: "#app",
        data: {
            textSearch: ""
        },
        created() {
            axios({
                    "method": "GET",
                    "url": "https://deezerdevs-deezer.p.rapidapi.com/artist/" + index,
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
                    console.log('array final', artistas);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        computed: {
            artistFilter() {
                var textSearch = this.textSearch;
                return this.artist.filter(function(el) {
                    return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
                });
            }
        }
    });

}