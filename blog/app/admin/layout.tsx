import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) {
    redirect("/api/auth/signin")
  }
  return <div className="container mx-auto p-4">{children}</div>
}
