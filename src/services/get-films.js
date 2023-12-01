export default class GetFilms {
  async getResource(query, page) {
    const urlDefault =
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'
    const urlQuery = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
    const urlNew = query !== undefined ? urlQuery : urlDefault

    const res = await fetch(urlNew, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmY1MDFhOTI0NDU0ODAxZDliYTE4YWRlY2VjZDY1MSIsInN1YiI6IjY1NTRiYTI4MDgxNmM3MDBlMDE5MDJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yq0N-JkxyoymriAVOX_XOdIc4UKTTVx6mGCaIUwq60g',
        accept: 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  async getAllFilms(query, page) {
    const res = await this.getResource(query, page)
    // eslint-disable-next-line no-console
    console.log(res.results)
    return res.results
  }
}
