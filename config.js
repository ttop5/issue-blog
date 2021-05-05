console.log(process.env)

export default {
  username: process.env.USERNAME,
  repository: process.env.REPOSITORY,
  accessToken: process.env.ACCESS_TOKEN,
  blogName: process.env.BLOG_NAME,

  /**
   * 定制左侧菜单链接部分
   * 格式：
   * {
   *   title: '',   // 名称
   *   subTile: '', // 描述
   *   icon: '',    // 图标名称，上这里查找你需要的图标名称 https://fontawesome.com ，如果需要自定义图标的参考示例的最后一个配置，并将图标文件放到 /src/statics 目录中
   *   url: '',     // 链接
   * }
   * 示例如下：
   */
  links: [
    {
      title: 'RSS',
      subTile: 'rsshub.app/github/issue/ttop5/blog',
      icon: 'fas fa-rss-square',
      url: 'https://rsshub.app/github/issue/ttop5/blog',
    },
    {
      title: 'Email',
      subTile: 'ttop5@qq.com',
      icon: 'fas fa-envelope',
      url: 'mailto:ttop5@qq.com',
    },
    {
      title: 'Home',
      subTile: 'ttop5.net',
      icon: 'fas fa-home',
      url: 'https://ttop5.net',
    },
    {
      title: 'GitHub',
      subTile: 'github.com/ttop5',
      icon: 'fab fa-github',
      url: 'https://github.com/ttop5',
    },
    {
      title: 'Steam',
      subTile: 'steamcommunity.com/id/ttop5',
      icon: 'fab fa-steam',
      url: 'https://steamcommunity.com/id/ttop5',
    },
    {
      title: 'DouBan',
      subTile: 'douban.com/people/ttop5',
      icon: 'img:statics/douban.svg',
      url: 'https://www.douban.com/people/ttop5',
    },
  ],
};
