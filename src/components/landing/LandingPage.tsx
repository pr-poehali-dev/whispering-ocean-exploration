import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import MapSection from './MapSection'
import ReviewsSection from './ReviewsSection'
import Layout from './Layout'
import { sections } from './sections'
import type { Section as SectionType } from '@/types'

const MAP_SECTION_INDEX = sections.length - 1

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const allSections = [
    ...sections.slice(0, MAP_SECTION_INDEX),
    { id: 'reviews' },
    { id: 'map' },
    ...sections.slice(MAP_SECTION_INDEX),
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout>
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {allSections.map((section, index) => (
          <button
            key={section.id}
            className={`w-3 h-3 rounded-full my-2 transition-all ${
              index === activeSection ? 'bg-white scale-150' : 'bg-gray-600'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-30"
        style={{ scaleX }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {allSections.map((section, index) =>
          section.id === 'map' ? (
            <MapSection key="map" isActive={index === activeSection} />
          ) : section.id === 'reviews' ? (
            <ReviewsSection key="reviews" isActive={index === activeSection} />
          ) : (
            <Section
              key={section.id}
              {...(section as SectionType)}
              isActive={index === activeSection}
            />
          )
        )}
      </div>
    </Layout>
  )
}