
window.onload = () => {
  let media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
  const setting = localStorage.getItem('hexo-color-scheme') || 'auto' //
  let isDark = () => {
    let prefersDark = media.matches;
    // if (setting === 'dark' || (prefersDark && setting !== 'light')) {
    //   console.log('setting: ' + setting + ' and prefersDark: ' + prefersDark)
    //   return true
    // } else {
    //   console.log('setting: ' + setting + ' and prefersDark: ' + prefersDark)
    //   return false
    // }
    console.log("浏览器", prefersDark)
    console.log("设置", setting === 'dark')
    if ((setting === 'dark' && prefersDark) || (setting === 'light' && !prefersDark) || setting === 'auto') {// 都是暗黑模式或者都是白天模式
      console.log("跟随浏览器", prefersDark)
      return prefersDark // 跟随浏览器系统
    } else { // 两者不一样
      console.log("跟随设置", setting === 'dark')
      return setting === 'dark' // 跟随设置
    }

  }
  // 切换为深色模式
  let toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark', true)
    document.getElementById('moon-icon').style.display = 'block'
    document.getElementById('sun-icon').style.display = 'none'
    localStorage.setItem('hexo-color-scheme', 'dark')
  }
  // 切换为浅色模式
  let toggleLightMode = () => {
    document.documentElement.classList.toggle('dark', false)
    document.getElementById('moon-icon').style.display = 'none'
    document.getElementById('sun-icon').style.display = 'block'
    localStorage.setItem('hexo-color-scheme', 'light')
  }
  // 切换为自动模式
  let updateMode = (e) => {
    if (isDark()) {
      console.log('浏览器是暗黑模式',)
      document.documentElement.classList.toggle('dark', true)
      document.getElementById('moon-icon').style.display = 'block'
      document.getElementById('sun-icon').style.display = 'none'
      /* toggleDarkMode() */
    } else {
      document.documentElement.classList.toggle('dark', false)
      document.getElementById('moon-icon').style.display = 'none'
      document.getElementById('sun-icon').style.display = 'block'
      /* toggleLightMode() */
    }
  }

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', updateMode)
  } else if (typeof media.addListener === 'function') {
    media.addListener(updateMode)
  }

  if (isDark()) {
    document.getElementById('moon-icon').style.display = 'block'
  } else {
    document.getElementById('sun-icon').style.display = 'block'
  }
  document.getElementById('moon-icon').addEventListener('click', () => {
    toggleLightMode()
  })
  document.getElementById('sun-icon').addEventListener('click', () => {
    toggleDarkMode()
  })
}

