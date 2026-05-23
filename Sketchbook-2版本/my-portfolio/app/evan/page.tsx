import DetailLayout from '@/components/DetailLayout'

const categories = [
  {
    id: 'epilogue',
    name: '后记篇',
    articles: [
      { id: 'ep-1', title: '后记篇 - 文章标题 1', content: '<h1>后记篇 - 文章 1</h1><p>这里是文章内容，后续可以替换为真实内容...</p>' },
      { id: 'ep-2', title: '后记篇 - 文章标题 2', content: '<h1>后记篇 - 文章 2</h1><p>这里是文章内容...</p>' },
      { id: 'ep-3', title: '后记篇 - 文章标题 3', content: '<h1>后记篇 - 文章 3</h1><p>这里是文章内容...</p>' },
      { id: 'ep-4', title: '后记篇 - 文章标题 4', content: '<h1>后记篇 - 文章 4</h1><p>这里是文章内容...</p>' },
      { id: 'ep-5', title: '后记篇 - 文章标题 5', content: '<h1>后记篇 - 文章 5</h1><p>这里是文章内容...</p>' },
    ],
  },
  {
    id: 'daily',
    name: '日常篇',
    articles: [
      { id: 'da-1', title: '日常篇 - 文章标题 1', content: '<h1>日常篇 - 文章 1</h1><p>这里是文章内容...</p>' },
      { id: 'da-2', title: '日常篇 - 文章标题 2', content: '<h1>日常篇 - 文章 2</h1><p>这里是文章内容...</p>' },
      { id: 'da-3', title: '日常篇 - 文章标题 3', content: '<h1>日常篇 - 文章 3</h1><p>这里是文章内容...</p>' },
      { id: 'da-4', title: '日常篇 - 文章标题 4', content: '<h1>日常篇 - 文章 4</h1><p>这里是文章内容...</p>' },
      { id: 'da-5', title: '日常篇 - 文章标题 5', content: '<h1>日常篇 - 文章 5</h1><p>这里是文章内容...</p>' },
    ],
  },
  {
    id: 'dimension',
    name: '次元篇',
    articles: [
      { id: 'di-1', title: '次元篇 - 文章标题 1', content: '<h1>次元篇 - 文章 1</h1><p>这里是文章内容...</p>' },
      { id: 'di-2', title: '次元篇 - 文章标题 2', content: '<h1>次元篇 - 文章 2</h1><p>这里是文章内容...</p>' },
      { id: 'di-3', title: '次元篇 - 文章标题 3', content: '<h1>次元篇 - 文章 3</h1><p>这里是文章内容...</p>' },
      { id: 'di-4', title: '次元篇 - 文章标题 4', content: '<h1>次元篇 - 文章 4</h1><p>这里是文章内容...</p>' },
      { id: 'di-5', title: '次元篇 - 文章标题 5', content: '<h1>次元篇 - 文章 5</h1><p>这里是文章内容...</p>' },
    ],
  },
]

export default function EvanPage() {
  return (
    <DetailLayout
      title="光夜同人 - Evan"
      bgColor="hsl(334, 25%, 95%)"
      indexColor="hsl(334, 25%, 40%)"
      categories={categories}
      showCategories={true}
    />
  )
}
