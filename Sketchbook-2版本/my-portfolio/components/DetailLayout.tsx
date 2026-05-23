'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

interface Category {
  id: string
  name: string
  articles: Article[]
}

interface Article {
  id: string
  title: string
  content: string
}

interface DetailLayoutProps {
  title: string
  bgColor: string
  indexColor: string
  categories?: Category[]
  articles?: Article[]
  showCategories?: boolean
}

export default function DetailLayout({
  title,
  bgColor,
  indexColor,
  categories,
  articles,
  showCategories = true,
}: DetailLayoutProps) {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState(categories?.[0]?.id || '')
  const [activeArticle, setActiveArticle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
  }, [])

  const handleBack = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      x: 100,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => router.push('/'),
    })
  }

  const currentArticles = showCategories
    ? categories?.find((c) => c.id === activeCategory)?.articles || []
    : articles || []

  const handleArticleClick = (article: Article) => {
    setActiveArticle(article.id)
    setContent(article.content)

    gsap.fromTo(
      '.content-box',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    )
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <button
        onClick={handleBack}
        data-clickable
        className="fixed top-8 left-8 z-50 px-6 py-3 border-2 border-black rounded-lg font-special text-base transition-all duration-300 hover:bg-black hover:text-white hover:-translate-x-1"
      >
        ← 返回
      </button>

      <h1 className="fixed top-8 left-1/2 -translate-x-1/2 text-2xl font-bold z-50">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row min-h-screen pt-24 px-6 md:px-12">
        <aside className="w-full md:w-80 flex-shrink-0 md:pr-8 mb-6 md:mb-0">
          {showCategories && categories && (
            <nav className="flex md:flex-col gap-3 mb-6 pb-6 border-b-2 border-black/10 overflow-x-auto md:overflow-visible">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setActiveArticle('')
                    setContent('')
                  }}
                  data-clickable
                  className={`px-4 py-3 text-left rounded-lg transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-black/10 font-bold'
                      : 'hover:bg-black/5'
                  }`}
                  style={{ color: indexColor }}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          )}

          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {currentArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => handleArticleClick(article)}
                data-clickable
                className={`px-4 py-3 text-left rounded-lg transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
                  activeArticle === article.id
                    ? 'bg-black/10 font-bold'
                    : 'hover:bg-black/5 hover:translate-x-1'
                }`}
                style={{ color: indexColor }}
              >
                {article.title}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 md:pl-8">
          <div className="content-box bg-white rounded-2xl p-8 md:p-12 min-h-[60vh] shadow-lg">
            {content ? (
              <div
                className="prose prose-lg max-w-none text-black"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <p className="text-gray-400 text-center py-20 italic">
                请从左侧选择文章
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
