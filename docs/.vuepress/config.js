module.exports = {
  title: 'Se7en 的架构笔记',
  description: '分享云原生，大数据，搜索引擎，编程语言等相关技术',
  dest: 'dist',
  themeConfig: {
    sidebar: { 
		 '/algorithm/leetcode/': [
            'one',
			'two',
			'three'
		 ]
	},
    nav: [
      { text: '首页', link: '/' },
      { text: '搜索引擎', link: '/search/' },
      { text: '数据结构与算法',
         'items': [
           { text: '数据结构基础', link: '/algorithm/structure/'},
		   { text: '排序算法', link: '/algorithm/sort/'},
		   { text: '算法思想', link: '/algorithm/thought/' },
		   { text: 'LeetCode 刷题', link: '/algorithm/leetcode/' }
		 ]
	  },
      { text: '大数据', link: '/bigdata/' },
      { text: '云原生', link: '/cloudnative/' },
	  { text: 'Github', link: 'https://www.github.com/cr7258'}
    ]
  }
}
