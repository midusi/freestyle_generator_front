import axios from 'axios'

const API = "http://www.mocky.io/v2/5ebccde331000057005b0d0c"

export const genRhyme = word => axios.get(`${API}`)

export const getPercentage = code => axios.get(`${API}`)

export const getRhyme = code => axios.get(`${API}`)
