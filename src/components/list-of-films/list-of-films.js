import { Component } from 'react'
import { Row } from 'antd'

import ItemMovie from '../itemMovie'
import './list-of-films.css'
import GetFilms from '../../services/get-films'

export default class ListOfFilms extends Component {
  state = {
    films: [],
  }

  componentDidMount() {
    const getFilms = new GetFilms()

    getFilms.getAllFilms().then((films) => {
      this.setState({ films })
    })
  }

  render() {
    const { films } = this.state
    return (
      <Row justify="space-evenly">
        {films.map((film) => (
          <ItemMovie
            key={film.id}
            title={film.original_title}
            text={film.overview}
            img={film.backdrop_path}
            releaseDate={film.release_date}
          />
        ))}
      </Row>
    )
  }
}
