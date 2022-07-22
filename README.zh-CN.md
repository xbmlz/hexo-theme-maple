<p align='center'>
  <img src='https://raw.githubusercontent.com/xbmlz/hexo-theme-maple/main/source/images/logo.svg' alt='Hexo-theme-maple' width='120'/>
</p>

<p align='center'>
concise but not simple hexo theme
</p>

<br>

<p align='center'>
<a href="">Live Demo</a>
</p>

<p align='center'>
<a href="https://github.com/xbmlz/hexo-theme-maple/blob/main/README.md">English</a> | <b>简体中文</b>

</p>

<br>

## 特性

- 📦 开箱即用，几乎零配置
- 🎨 自动切换明/暗主题
- 💻 移动端自适应
- 💹 百度/谷歌分析统计
- ⚗️ [MathJax 支持](http://docs.mathjax.org/en/latest/)
- ⚡️ [Mermaid 支持](https://mermaid-js.github.io/mermaid)
- 🖼️ [Fancybox Support](https://fancyapps.com/docs/ui/fancybox)

## 安装

Local git install:

```bash
cd your-blog/themes
git clone https://github.com/xbmlz/hexo-theme-maple.git themes/maple
```

npm install:

```bash
npm i hexo-theme-maple
```

## 开启

Modify `theme` setting in `_config.yml` to `maple`.

```text
_config.yml
- theme: some-theme
+ theme: maple
```

## 更新

```bash
cd themes/maple
git pull
```

## 配置

```yaml
# Header
nav:
  Posts: /archives
  Categories: /category
  Tags: /tag

# favicon
favicon: /favicon.ico

# logo
logo: /images/logo.svg

# links
links:
  Github: https://github.com/xbmlz
  # ZhiHu:
  # Twitter:
  # Weibo:

# analytics
google_analytics:
baidu_analytics:

# mathjax
fancybox: true

# mathjax
mathjax: true

# mermaid
mermaid:
  enable: true
  # Available themes: default | dark | forest | neutral
  theme: default

# disqusjs
disqusjs:
  enable: false
  api:
  apikey:
  shortname:
```
## 截图

![light](https://cdn.jsdelivr.net/gh/xbmlz/static@main/img/202207201507443.png)

![dark](https://cdn.jsdelivr.net/gh/xbmlz/static@main/img/202207201507612.png)

![light-m](https://cdn.jsdelivr.net/gh/xbmlz/static@main/img/202207201508341.png)

![dark-m](https://cdn.jsdelivr.net/gh/xbmlz/static@main/img/202207201508877.png)
