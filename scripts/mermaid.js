hexo.extend.filter.register('before_post_render', (data) => {
  const config = hexo.theme.config;
  if (!config.mermaid.enable) {
    return;
  }
  const reg = /(\s*)(`{3}) *(mermaid) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;
  const ignore = data => {
    let source = data.source;
    let ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
  }
  if (!ignore(data)) {
    data.content = data.content.replace(reg, function (raw, start, startQuote, lang, content, endQuote, end) {
        return `${start}<pre class="mermaid">${content}</pre>${end}`;
    });
  }
}, 9);
