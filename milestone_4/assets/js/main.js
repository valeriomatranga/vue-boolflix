const app = new Vue({
    el:"#app",

    data:{
        url:"https://api.themoviedb.org/3/search/",
        movie:"movie",
        tv:"tv",
        apikey:"0399f6a1aef262ecdd313571205ae96f",
        urlImg:'http://image.tmdb.org/t/p/w342/',
        urlPeople:'https://api.themoviedb.org/3/person/',
        query: '',
        films:[],
        serieTv:[],
        getVote: '',
        stars:null

    },

    methods:{
        search(){
            const film = `${this.url}${this.movie}?api_key=${this.apikey}&query=${this.query}`;
            console.log(film);
            axios
            .get(film)
            .then(resp =>{
                this.films = resp.data.results
                console.log(this.films);
                console.log(this.getVote);
            });

            const tv = `${this.url}${this.tv}?api_key=${this.apikey}&query=${this.query}`;
            //console.log(tv);
            axios
            .get(tv)
            .then(resp =>{
                this.serieTv = resp.data.results
                console.log(this.serieTv);
            });

            axios
            .all([films,serieTv])
            .then(resp =>{
                this.stars = resp.data.results.vote_average
                console.log(this.stars);
            })
            
        },
        
    },

    mounted(){
        

    },

    computed:{

    }
})