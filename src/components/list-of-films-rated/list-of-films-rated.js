import { Component } from 'react'
import { Row, Spin } from 'antd'

import ItemMovie from '../itemMovie'
import ErrorIndicator from '../error-indicator'

export default class ListOfFilmsRated extends Component {
  render() {
    const { error, loading, guestSessionId, addRatingFilm, ratedFilms } = this.props
    if (loading) {
      return (
        <div className="example">
          <Spin size="large" />
        </div>
      )
    }
    if (error) {
      return <ErrorIndicator />
    }

    return (
      <Row justify="space-evenly">
        {ratedFilms.map((film) => (
          <ItemMovie
            key={film.id}
            id={film.id}
            title={film.original_title}
            text={film.overview}
            img={film.poster_path}
            releaseDate={film.release_date}
            voteAverage={film.vote_average}
            guestSessionId={guestSessionId}
            genre={film.genre_ids}
            addRatingFilm={addRatingFilm}
          />
        ))}
      </Row>
    )
  }
}
