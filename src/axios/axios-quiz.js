import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-3a17f-default-rtdb.firebaseio.com/'
})