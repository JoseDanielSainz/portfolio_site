'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

type Tab = 'frontend' | 'motion' | 'design'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('frontend')
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate hero section on load
    if (heroRef.current) {
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
    }
  }, [])

  useEffect(() => {
    // Animate content when tab changes
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      })
    }
  }, [activeTab])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 md:py-16">
        <div ref={heroRef} className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-thin mb-4 text-black">
            José Daniel Sainz
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 mb-6">
            Frontend Developer | Motion Graphics Artist | Web Designer
          </p>
          <div className="flex flex-wrap gap-4 text-base">
            <a 
              href="mailto:joedanielslaine@gmail.com" 
              className="text-gray-700 hover:text-black transition-colors"
            >
              joedanielsainz@gmail.com
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="container mx-auto px-6">
        <div className="border-b border-gray-300">
          <nav className="flex gap-1 -mb-px">
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'frontend'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Frontend Development
            </button>
            <button
              onClick={() => setActiveTab('motion')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'motion'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Motion Graphics
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'design'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Web Design
            </button>
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="container mx-auto px-6 py-12">
        <div ref={contentRef} className="max-w-4xl">
          {/* Frontend Development Tab */}
          {activeTab === 'frontend' && (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal text-black">
                Frontend Development
              </h2>
              <p className="text-lg text-gray-600">
                Building modern, responsive web applications with React and Next.js.
              </p>
              <a 
                href="https://notedash.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden bg-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/notedash_thumbnail.png"
                    alt="NoteDash.dev project preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm">Add notedash-thumbnail.png to /public folder</div>'
                      }
                    }}
                  />
                </div>
              </a>
              <a 
                href="https://notedash.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-black text-white  hover:bg-gray-800 transition-colors"
              >
                View Project: notedash.dev →
              </a>
            </div>
          )}

          {/* Motion Graphics Tab */}
          {activeTab === 'motion' && (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal text-black">
                Motion Graphics & Video Editing
              </h2>
              <p className="text-lg text-gray-600">
                Creating dynamic visual content and motion graphics that bring ideas to life.
              </p>
              <div className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden bg-gray-200 shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/0Aat2f6p7Vw"
                  title="Motion Graphics Reel"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Web Design Tab */}
          {activeTab === 'design' && (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal text-black">
                Web Design
              </h2>
              <p className="text-lg text-gray-600">
                Designing user-centered web experiences that engage and convert.
              </p>
              {/* <a 
                href="https://soyautonomo.mx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden bg-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/soyautonomo-thumbnail.png"
                    alt="SoyAutonomo.mx project preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm">Add soyautonomo-thumbnail.png to /public folder</div>'
                      }
                    }}
                  />
                </div>
              </a> */}
              <a 
                href="https://soyautonomo.mx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
              >
                View Project: soyautonomo.mx →
              </a>
            </div>
          )}
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-300 mt-auto">
        <p className="text-gray-500">
          © {new Date().getFullYear()} José Daniel Sainz. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
