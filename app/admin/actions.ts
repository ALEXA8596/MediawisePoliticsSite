'use server'

import slugify from 'slugify'

type CreatePostResult = {
  success: boolean
  error?: string
  fileName?: string
  fileContent?: string
  folderName?: string
}

export async function createPost(formData: FormData): Promise<CreatePostResult> {
  try {
    const title = formData.get('title') as string
    const date = formData.get('date') as string
    const excerpt = formData.get('excerpt') as string
    const coverImage = formData.get('coverImage') as string
    const type = formData.get('type') as string
    const content = formData.get('content') as string

    const slug = slugify(title, { lower: true, strict: true })
    const fileName = `${slug}.md`
    
    const folderName = type === 'bill-analysis' ? 'bill-analysis-posts' : 'posts'

    const fileContent = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
coverImage: "${coverImage}"
---

${content}
`

    return { 
      success: true, 
      fileName, 
      fileContent,
      folderName
    }
  } catch (e) {
    return {
      success: false,
      error: 'Failed to create post'
    }
  }
}
