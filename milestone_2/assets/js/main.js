const app = new Vue({
    el:"#app",

    data:{
        url:"https://api.themoviedb.org/3/search/movie",
        apikey:"0399f6a1aef262ecdd313571205ae96f",
        query:"",
        films:[],

    },

    methods:{
        search(){
            const film = `${this.url}?api_key=${this.apikey}&query=${this.query}`;
            //console.log(film);

            axios
            .get(film)
            .then(resp =>{
                this.films = resp.data.results
                console.log(this.films);
            })

            

        }
        
    },

    mounted(){
        this.search()

    },
})