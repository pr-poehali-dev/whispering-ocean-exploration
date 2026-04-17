import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface ReviewsSectionProps {
  isActive: boolean
}

const reviews = [
  {
    name: 'Алексей',
    text: 'Все чётко, без нареканий, очень удобно.',
    stars: 5,
    delay: 0.2,
  },
  {
    name: 'Сергей',
    text: 'Отличный прокат! Арендовал на неделю, сделка прошла гладко и быстро.',
    stars: 5,
    delay: 0.4,
  },
]

export default function ReviewsSection({ isActive }: ReviewsSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Отзывы клиентов
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            className="flex-1 bg-black/60 border border-red-900/50 rounded-2xl p-6 md:p-8 shadow-2xl shadow-red-950/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={isActive ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: review.delay }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: review.stars }).map((_, i) => (
                <Icon key={i} name="Star" size={18} className="text-red-500 fill-red-500" />
              ))}
            </div>
            <p className="text-neutral-200 text-lg leading-relaxed mb-6">
              «{review.text}»
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center text-white font-bold text-lg">
                {review.name[0]}
              </div>
              <span className="text-white font-semibold">{review.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
