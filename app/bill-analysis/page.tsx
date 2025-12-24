import { getAllBillAnalysisPosts } from "@/lib/posts"
import Link from "next/link"

export default function BillAnalysisPage() {
  const posts = getAllBillAnalysisPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage'
  ])

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Bill Analysis</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          In-depth analysis of current bills and media coverage.
        </p>
      </header>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString()}
              </div>
              <Link href={`/bill-analysis/${post.slug}`} className="block mt-2">
                <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600">{post.title}</h2>
              </Link>
              <p className="mt-3 text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <Link href={`/bill-analysis/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center">
                  Read more 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          No analysis posts yet. Check back later!
        </div>
      )}
    </div>
  )
}
