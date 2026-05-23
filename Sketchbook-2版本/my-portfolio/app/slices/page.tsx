import DetailLayout from '@/components/DetailLayout'

const articles = [
  {
    id: 'callback',
    title: '熊兔夜奔Callback解析',
    content: `
      <h1>熊兔夜奔Callback解析</h1>
      <p>这里是文章内容，后续可以替换为真实内容。</p>
    `,
  },
  {
    id: 'character-map',
    title: '\u2018好\u2019的人物是一张徐徐展开的地图',
    content: `
      <h1>\u2018好\u2019的人物是一张徐徐展开的地图</h1>
      <p>这里是文章内容，后续可以替换为真实内容。</p>
    `,
  },
]

export default function SlicesPage() {
  return (
    <DetailLayout
      title="光夜切片"
      bgColor="hsl(49, 56%, 95%)"
      indexColor="hsl(334, 25%, 95%)"
      articles={articles}
      showCategories={false}
    />
  )
}
