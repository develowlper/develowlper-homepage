import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0aba1960 = () => import('../src/pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */).then(m => m.default || m)
const _0540a7c0 = () => import('../src/pages/components/index.vue' /* webpackChunkName: "pages/components/index" */).then(m => m.default || m)
const _5a82aa68 = () => import('../src/pages/impress.vue' /* webpackChunkName: "pages/impress" */).then(m => m.default || m)
const _3b82ba16 = () => import('../src/pages/auth/signed-in.vue' /* webpackChunkName: "pages/auth/signed-in" */).then(m => m.default || m)
const _6ec86655 = () => import('../src/pages/auth/sign-in.vue' /* webpackChunkName: "pages/auth/sign-in" */).then(m => m.default || m)
const _c6111b22 = () => import('../src/pages/auth/sign-off.vue' /* webpackChunkName: "pages/auth/sign-off" */).then(m => m.default || m)
const _0508e74a = () => import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/dashboard",
			component: _0aba1960,
			name: "dashboard"
		},
		{
			path: "/components",
			component: _0540a7c0,
			name: "components"
		},
		{
			path: "/impress",
			component: _5a82aa68,
			name: "impress"
		},
		{
			path: "/auth/signed-in",
			component: _3b82ba16,
			name: "auth-signed-in"
		},
		{
			path: "/auth/sign-in",
			component: _6ec86655,
			name: "auth-sign-in"
		},
		{
			path: "/auth/sign-off",
			component: _c6111b22,
			name: "auth-sign-off"
		},
		{
			path: "/",
			component: _0508e74a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
