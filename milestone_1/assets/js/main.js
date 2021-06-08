const app = new Vue({
    el:"#app",

    data:{
        url:"https://api.themoviedb.org/3/search/movie",
        apikey:"0399f6a1aef262ecdd313571205ae96f",
        query:"ritorno",
        films:[],
        ricerca:''

    },

    methods:{
        search(){
            const ricercaFilms = this.ricerca.toLowerCase();
            this.films.forEach(film => {
                const titoloFilm = film.title.toLowerCase();
                //console.log(titoloFilm);
                if(titoloFilm.includes(ricercaFilms)){
                    film.visible = true;
                }else{
                    film.visible = false;
                }
            });
        }
        
    },

    mounted(){
        const film = `${this.url}?api_key=${this.apikey}&query=${this.query}`;
        //console.log(film);

        axios
        .get(film)
        .then(resp =>{
            this.films = resp.data.results
            console.log(this.films);
        })
    },
})