import React from 'react'

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 uppercase tracking-wide text-center">Resources</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide border-b pb-2">Meeting Times</h2>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
          <p className="text-xl text-gray-700 mb-2">Join us for our weekly meetings!</p>
          <p className="text-gray-600">Please check back soon for the updated schedule for the upcoming semester.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide border-b pb-2">Location</h2>
        <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 font-medium mb-2">Leland High School</p>
            <p className="text-gray-400 text-sm">6677 Camden Ave, San Jose, CA 95120</p>
            <p className="text-gray-400 text-xs mt-4">(Map Placeholder)</p>
          </div>
        </div>
      </section>
    </div>
  )
}
