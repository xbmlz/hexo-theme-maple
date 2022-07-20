// console.log(hexo)
hexo.extend.filter.register('before_post_render', require('./render'), 9);
