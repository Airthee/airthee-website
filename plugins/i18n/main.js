export default function ({ app }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    app.router.afterEach((to, from) => {
      window.location.href = to.fullPath
    })
  }
}
