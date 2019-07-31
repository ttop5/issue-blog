export default {
  username: 'xiaoyueyue165', // GitHub 用户名
  repository: 'blog', // 记录 issue 的仓库名
  accessToken: 'MWRhYzQzOTFkZDA3Y2I5NzdmMTYyY2YyODkwMDZmMGMyOTI2MTQxYw==', // 经过 base64 加密后的 GitHub Token
  blogName: "RainBow's Blog", // 给你的博客取个名字
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
      title: 'Email',
      subTile: 'xiaoyueyue165@gmail.com',
      icon: 'fas fa-envelope',
      url: 'mailto:xiaoyueyue165@gmail.com',
    },
    {
      title: 'Home',
      subTile: 'xiaoyueyue.org',
      icon: 'fas fa-home',
      url: 'https://xiaoyueyue.org/',
    },
    {
      title: 'GitHub',
      subTile: 'github.com/xiaoyueyue165',
      icon: 'fab fa-github',
      url: 'https://github.com/xiaoyueyue165',
    },
  ],
};
