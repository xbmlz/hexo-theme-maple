const echartsMaps = (args, content) => {
  const config = hexo.theme.config;
  if (!config.echarts) {
    return;
  }
  let options = {};
  if (content.length) {
    options = content
  }
  let id = 'echarts-' + ((Math.random() * 9999) | 0);
  let height = options.height || '400';
  let width = options.width || '85%';
  return `
  <div id="${id}" style="width: ${width}; height: ${height}px; margin: 0 auto"></div>
  <script src="https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.min.js"></script>
  <script>
    var myChart = echarts.init(document.getElementById('${id}'));
    var option = ${options};
    myChart.setOption(option);
  </script>
  `;
};

hexo.extend.tag.register('echarts', echartsMaps, {
  async: false,
  ends: true
});

// usage
// {% echarts 400 '85%' %}
// \\TODO echarts option goes here
// {% endecharts %}
