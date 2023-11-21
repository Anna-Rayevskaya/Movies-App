
console.log('test')
 class SwapiService{

    _apiBase = 'https://api.themoviedb.org/3/search/movie?query=return&include_adult=false&language=en-US&page=1'

    async getResource() {
        const res = await fetch(`${this._apiBase}`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmY1MDFhOTI0NDU0ODAxZDliYTE4YWRlY2VjZDY1MSIsInN1YiI6IjY1NTRiYTI4MDgxNmM3MDBlMDE5MDJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yq0N-JkxyoymriAVOX_XOdIc4UKTTVx6mGCaIUwq60g',
            'accept': 'application/json'
          }
        });
    if(!res.ok){
        throw new Error(`Could not fetch, received ${res.status}`)
    }

return await res.json();
    }

    async getAllPeople(){
        const res = await this.getResource();
        return res.results;
    }
    getPerson(id){
        return this.getResource(`/people/${id}/`)
    }

}

const swapi = new SwapiService();

swapi.getAllPeople().then((body) => {
    console.log(body)
})