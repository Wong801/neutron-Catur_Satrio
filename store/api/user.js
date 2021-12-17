import jwt from "jsonwebtoken"

const secretKey = process.env.SECRET_KEY

export const state = () => ({
  jwt: null
})

export const mutations = {
  setToken(state, token) {
    state.jwt = token
  } 
}

export const actions = {
  login({ commit }, payload) {
    const token = jwt.sign({username: payload.username}, secretKey)
    commit('setToken', token)
  }
}