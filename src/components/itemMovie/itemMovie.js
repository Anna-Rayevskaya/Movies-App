import { Component } from 'react'
import { Card, Flex, Typography } from 'antd'
import './itemMovie.css'
import { format } from 'date-fns'

import StarRating from '../starRating'
import imageSrc from '../../error-img.png'

export default class ItemMovie extends Component {
  trimText(text) {
    if (text.split('').length > 140) {
      const newTrimText = `${text.slice(0, 140).split(' ').slice(0, -3).join(' ')}...`
      return newTrimText
    }
    return text
  }

  formattingDate(date) {
    if (date !== '') {
      const arrData = date.split('-')
      return format(new Date(++arrData[0], ++arrData[1], ++arrData[2]), 'LLL d, yyyy')
    }
    return null
  }

  addGenres(genres, genre) {
    const arr = []
    for (let i = 0; i < genre.length; i++) {
      for (let j = 0; j < genres.genres.length; j++) {
        if (genre[i] === genres.genres[j].id) {
          arr.push(genres.genres[j].name)
        }
      }
    }
    return arr
  }

  render() {
    const { title, text, img, releaseDate, voteAverage, guestSessionId, genre, genres } = this.props
    const newText = this.trimText(text)
    const newData = this.formattingDate(releaseDate)
    let newGenreRender = null

    if (genres) {
      const newGenre = this.addGenres(genres, genre)
      newGenreRender = newGenre.map((g) => (
        <div className="genreButton" key={`${Math.random() * 10}2`}>
          {g}
        </div>
      ))
    }

    return (
      <Card
        hoverable
        className="itemMovie"
        bodyStyle={{
          padding: 0,
          overflow: 'hidden',
        }}
      >
        <Flex justify="flex-start" align="flex-start">
          <img
            alt="avatar"
            src={img ? `https://image.tmdb.org/t/p/original${img}` : imageSrc}
            className="itemMovie-img"
          />
          <Flex
            vertical
            align="flex-start"
            justify="flex-start"
            style={{
              padding: 20,
            }}
          >
            <Typography.Title level={5} className="title">
              {title}
            </Typography.Title>
            <div className="itemMovie-date">{newData}</div>
            <Flex
              vertical-wrap="wrap"
              gap="small"
              align="flex-start"
              justify="flex-start"
              style={{
                padding: 0,
              }}
            >
              {newGenreRender}
            </Flex>
            <div className="itemMovie-text">{newText}</div>
            <StarRating voteAverage={voteAverage} guestSessionId={guestSessionId} />
          </Flex>
        </Flex>
      </Card>
    )
  }
}
