import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from '../actions/BookListActions'
import { bindActionCreators } from 'redux'
import { BookListItem } from '../components/BookListItem'
import { NavLink } from 'react-router-dom'


class BookList extends Component {

  componentWillMount() {
    this.props.actions.loadBookList()
  }

  render() {
    const {items} = this.props || []

    return (
      <div>
        <div className="list-group">
          {items.map(i => {
            return <BookListItem {...i} key={i.isbn} />
          })}
        </div>
        <div className="card">
          <div className="card-body">
            <NavLink to="/book/add/" className="btn btn-primary">Зарегистрировать новую книгу</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = (state) => {
  return {...state.bookList}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
