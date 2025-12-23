import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    include: { author: true }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Awesome Blog</h1>
        <p className="text-gray-600">Thoughts, stories and ideas.</p>
      </header>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                {new Date(post.createdAt).toLocaleDateString()} • {post.author.name || 'Unknown'}
              </div>
              <Link href={`/blog/${post.slug}`} className="block mt-2">
                <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600">{post.title}</h2>
              </Link>
              <p className="mt-3 text-gray-600 line-clamp-3">
                {post.content.substring(0, 150)}...
              </p>
              <div className="mt-4">
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          No posts yet. Check back later!
        </div>
      )}
    </div>
  )
}
