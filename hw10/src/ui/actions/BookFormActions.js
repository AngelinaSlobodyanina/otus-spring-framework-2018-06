import server from '../server'
import {
  ACTION_BOOK_FORM_AUTHORS_LOADED,
  ACTION_BOOK_FORM_GENRES_LOADED,
  ACTION_BOOK_FORM_LOADED,
} from '../constants'

const loadedActionInstance = (book) => {
  return {
    type: ACTION_BOOK_FORM_LOADED,
    payload: {book: book},
  }
}

const getGenresActionContainer = (genres) => {
  return {
    type: ACTION_BOOK_FORM_GENRES_LOADED,
    payload: genres
  }
}

const getAuthorsActionContainer = (authors) => {
  return {
    type: ACTION_BOOK_FORM_AUTHORS_LOADED,
    payload: authors
  }
}

export function loadBookFields(id) {
  return dispatch => {
    server.getBook(id).then((book) => {
      dispatch(loadedActionInstance(book))
    })
  }
}

function toDictionary(list, fName) {
  const dictionary = {}
  list.forEach((el) => {
    dictionary[el.id] = el[fName]
  })
  return dictionary
}

export function loadGenresDictionary() {
  return dispatch => {
    server.getGenreList()
      .then((list) => {
        dispatch(getGenresActionContainer(toDictionary(list, 'title')))
      })
  }
}

export function loadAuthorsDictionary() {
  return dispatch => {
    server.getAuthorList()
      .then((list) => {
        dispatch(getAuthorsActionContainer(toDictionary(list, 'name')))
      })
  }
}

