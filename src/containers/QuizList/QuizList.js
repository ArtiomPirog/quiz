import React, {Component} from 'react'
import classes from './QuizList.module.css'
import {Link} from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import axios from 'axios'

export default class QuizList extends Component {

  state = {
    quizes: [],
    loading: true
  }

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li
          key={quiz.id}
        >
          <Link to={'/quiz/' + quiz.id}>
            {quiz.name}
          </Link>
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://react-quiz-3a17f-default-rtdb.firebaseio.com/quizes.json')

      const quizes = []

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        })
      })

      this.setState({
        quizes, loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>

          {
            this.state.loading
              ? <Loader />
              : <ul>
                  { this.renderQuizes() }
                </ul>
          }

        </div>
      </div>
    )
  }
}