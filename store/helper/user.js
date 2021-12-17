import jwt from "jsonwebtoken"

const secretKey = process.env.SECRET_KEY

export const state = () => ({
  userData: null
})

export const mutations = {
  setUserData(state, data) {
    state.userData = data
  } 
}

export const actions = {
  decodeToken({ commit }, payload) {
    const decoded = jwt.verify(payload, secretKey)
    commit('setUserData', decoded)
  }
}