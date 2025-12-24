import React from 'react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 uppercase tracking-wide text-center">About Us</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide border-b pb-2">Our Goal</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            Our objective is to equip the Leland and the larger Almaden Community with the knowledge and abilities necessary to navigate the modern media landscape in an ethical and successful manner.
          </p>
          <p className="mb-4">
            In a world full of information, bias, and emotional impact, we believe that media literacy is essential to a strong democracy and a cohesive society. Our goals are to encourage critical thinking, balanced understanding, and purposeful engagement with news and information.
          </p>
          <p>
            By offering practical lessons, real-world examples, and readily accessible resources, we help people recognize bias, assess alternative perspectives, and think about their emotional responses to media. By doing this, we allow people to make informed decisions and politely discuss differences. Together, we can create a more resilient and media-savvy future.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wide border-b pb-2">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Harry Yin</h3>
            <a href="mailto:harry.d.yin.gpc@gmail.com" className="text-blue-600 hover:underline block mb-4">harry.d.yin.gpc@gmail.com</a>
            <p className="text-gray-600">Harry Yin is a rising Senior at Leland High School.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Kim</h3>
            <a href="mailto:alexajunkim@gmail.com" className="text-blue-600 hover:underline block mb-4">alexajunkim@gmail.com</a>
            <p className="text-gray-600">Alex Kim is a rising Senior at Leland High School.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
