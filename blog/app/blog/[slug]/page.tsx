import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: true }
  })

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-gray-600">
          By {post.author.name || 'Unknown'} • {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </header>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
