'use server'

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function createPost(formData: FormData) {
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error("Not authenticated")
  }

  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const content = formData.get("content") as string
  const published = formData.get("published") === "on"

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
      published,
      authorId: session.user.id,
    },
  })

  revalidatePath('/admin')
  revalidatePath('/')
  redirect('/admin')
}

export async function updatePost(id: string, formData: FormData) {
    const session = await auth()
    if (!session?.user?.id) {
      throw new Error("Not authenticated")
    }
  
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const content = formData.get("content") as string
    const published = formData.get("published") === "on"
  
    await prisma.post.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        published,
      },
    })
  
    revalidatePath('/admin')
    revalidatePath('/')
    redirect('/admin')
}
