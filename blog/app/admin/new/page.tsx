import { createPost } from "@/app/actions"

export default function NewPostPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <form action={createPost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" name="title" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Slug</label>
          <input type="text" name="slug" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Content (Markdown)</label>
          <textarea name="content" rows={10} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"></textarea>
        </div>
        <div className="flex items-center">
          <input type="checkbox" name="published" id="published" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Publish immediately</label>
        </div>
        <div>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create Post
          </button>
        </div>
      </form>
    </div>
  )
}
