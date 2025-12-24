import { getBillAnalysisPostBySlug, getAllBillAnalysisPosts } from "@/lib/posts"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export async function generateStaticParams() {
  const posts = getAllBillAnalysisPosts(['slug'])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BillAnalysisPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBillAnalysisPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
  ])

  if (!post.slug) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-gray-600">
          {new Date(post.date).toLocaleDateString()}
        </div>
      </header>
      <div className="prose prose-lg max-w-none mx-auto">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
