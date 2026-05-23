import DetailLayout from '@/components/DetailLayout'

const articles = [
  {
    id: 'characters',
    title: '人物设定',
    content: `
      <h1>人物设定</h1>
      <p>这里是人物设定的内容，后续可插入文字与图片。</p>
    `,
  },
  {
    id: 'worldview',
    title: '世界观',
    content: `
      <h1>世界观</h1>
      <p>这里是世界观的内容，后续可插入文字与图片。</p>
    `,
  },
  {
    id: 'highlights',
    title: '高光片段',
    content: `
      <h1>高光片段</h1>
      <p>这里是高光片段的内容，后续可插入文字与图片。</p>
    `,
  },
]

export default function OriginalPage() {
  return (
    <DetailLayout
      title="原创武侠言情"
      bgColor="#F4F4F4"
      indexColor="#4a4a4a"
      articles={articles}
      showCategories={false}
    />
  )
}
