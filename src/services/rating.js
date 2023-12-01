export default class Rating {
  async addRating(idSession) {
    const url = `https://api.themoviedb.org/3/movie/238/rating?guest_session_id=${idSession}`

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmY1MDFhOTI0NDU0ODAxZDliYTE4YWRlY2VjZDY1MSIsInN1YiI6IjY1NTRiYTI4MDgxNmM3MDBlMDE5MDJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yq0N-JkxyoymriAVOX_XOdIc4UKTTVx6mGCaIUwq60g',
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ value: 4 }),
    })
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  async getRatedMovies(idSession) {
    const url = `https://api.themoviedb.org/3/guest_session/${idSession}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmY1MDFhOTI0NDU0ODAxZDliYTE4YWRlY2VjZDY1MSIsInN1YiI6IjY1NTRiYTI4MDgxNmM3MDBlMDE5MDJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yq0N-JkxyoymriAVOX_XOdIc4UKTTVx6mGCaIUwq60g',
        Accept: 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  async addRatingFilm(idSession) {
    const res = await this.getResource(idSession)
    // eslint-disable-next-line no-console
    console.log(res)
    return res
  }
}
