'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { Post } from '@/lib/posts'

interface CarouselProps {
  posts: Post[]
}

export const Carousel: React.FC<CarouselProps> = ({ posts }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {posts.map((post) => (
            <div className="flex-[0_0_100%] min-w-0 pl-4" key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-96 flex flex-col">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                     {/* Placeholder for cover image if not present, or use next/image if you have real images */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold opacity-80 group-hover:scale-105 transition-transform duration-500">
                        {post.title.charAt(0)}
                     </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-center">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all z-10"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all z-10"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  )
}
