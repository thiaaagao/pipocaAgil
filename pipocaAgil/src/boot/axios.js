import { boot } from 'quasar/wrappers'
import axios from 'axios'

const api = axios.create({ baseURL: 'https://pipoca-agil-backend-eb2b6ef17563.herokuapp.com/api#/' })


export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api

})

export { api }
