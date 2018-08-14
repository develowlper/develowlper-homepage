import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default function ({ store, req }) {
   // If nuxt generate, pass this middleware
  if (process.isServer && !req) return
  const loggedUser = process.isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
  store.commit('SET_USER', loggedUser)
}
