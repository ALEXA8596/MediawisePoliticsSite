import { getAllBillAnalysisPosts } from "@/lib/posts"
import { Carousel } from "@/components/Carousel"
import Link from "next/link"

export default function Home() {
  const posts = getAllBillAnalysisPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage',
  ])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero / Welcome Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight uppercase">
            Welcome to PoliMediaWise
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our mission is to equip the community with the tools to navigate today’s media landscape with clarity, confidence, and integrity.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            In a world filled with information, bias, and emotional influence, we believe that media literacy is essential for a healthy democracy and a connected society. Our goal is to foster critical thinking, promote balanced understanding, and encourage thoughtful engagement with news and information.
          </p>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Through practical lessons, real-world examples, and accessible tools, we help people recognize bias, analyze multiple perspectives, and reflect on their emotional responses to media. By doing so, we empower individuals to make informed decisions and engage in respectful dialogue across differences. Together, we can create a more media-savvy and resilient future.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm my-12">
            <blockquote className="text-2xl font-serif italic text-gray-800 mb-4">
              “Media literacy is not just important, it's absolutely critical. It's going to make the difference between whether kids are a tool of the mass media or whether the mass media is a tool for kids to use."
            </blockquote>
            <cite className="text-gray-500 font-medium">— Linda Ellerbee</cite>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 uppercase tracking-wide">Our Curriculum</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* What We Teach */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">What We Teach</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span><strong>What is Media Bias?</strong> Types, effects, and political usage.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span><strong>Mitigating Bias through Sources:</strong> Identifying biased vs. unbiased sources.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span><strong>Analytically Mitigating Bias:</strong> Identifying and interpreting biases ourselves.</span>
                </li>
              </ul>
            </div>

            {/* How We Teach */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">How We Teach</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <div>
                    <strong>Understanding Bias:</strong>
                    <ul className="ml-6 mt-1 list-disc text-sm text-gray-600">
                      <li>Lectures on bias types and effects</li>
                      <li>Bias Exercises: Spotting bias in articles</li>
                      <li>Source Comparison: Analyzing opposing sources</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <div>
                    <strong>Critical Thinking Skills:</strong>
                    <ul className="ml-6 mt-1 list-disc text-sm text-gray-600">
                      <li>Emotional Reflection: Tracking reactions</li>
                      <li>Information Reduction: Diagramming core facts</li>
                      <li>AI Analysis: Using tools for neutral summaries</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/resources" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              SEE OUR MEETING TIMES
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Analysis Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide">Featured Analysis</h2>
          <Carousel posts={posts} />
          <div className="text-center mt-8">
            <Link href="/bill-analysis" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
              View All Analysis &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
