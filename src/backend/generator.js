import { verses } from './data'

export const getRhyme = idx => new Promise((resolve, reject) => {
  setTimeout(
    () => resolve(verses[idx]),
    250
  )
})

/*

API functions

import axios from 'axios'

const API = "https://352577d3.ngrok.io/run/"

export const genRhyme = word => axios.get(`${API}`)

export const getPercentage = code => axios.get(`${API}`)

export const getRhyme = code => axios.get(`${API}${code}/Freestyle`)
*/