const app = new Vue({
    el:"#app",

    data:{
        url:"https://api.themoviedb.org/3/search/",
        movie:"movie",
        tv:"tv",
        apikey:"0399f6a1aef262ecdd313571205ae96f",
        query: '',
        films:[],
        serieTv:[]

    },

    methods:{
        search(){
            const film = `${this.url}${this.movie}?api_key=${this.apikey}&query=${this.query}`;
            //console.log(film);
            axios
            .get(film)
            .then(resp =>{
                this.films = resp.data.results
                console.log(this.films);
            });

            const tv = `${this.url}${this.tv}?api_key=${this.apikey}&query=${this.query}`;
            //console.log(tv);
            axios
            .get(tv)
            .then(resp =>{
                this.serieTv = resp.data.results
                console.log(this.serieTv);
            })



        }
        
    },

    mounted(){
        this.search()
        

    },

    computed:{

    }
})