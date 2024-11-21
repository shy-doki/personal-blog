// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme, { VPImage } from 'vitepress/theme'
import HomeHero from './components/HomeHero.vue'
import Avatar from './components/Avatar.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': () => h(HomeHero),
      'nav-bar-content-after': () => h(Avatar)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('HomeHero', HomeHero)
  }
}
