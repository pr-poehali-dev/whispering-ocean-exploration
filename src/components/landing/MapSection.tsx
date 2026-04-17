import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface MapSectionProps {
  isActive: boolean
}

export default function MapSection({ isActive }: MapSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Как нас найти
      </motion.h2>

      <motion.div
        className="flex items-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Icon name="MapPin" size={22} className="text-red-500 shrink-0" />
        <span className="text-neutral-300 text-xl">Старый Оскол, ул. Жукова, 24а</span>
      </motion.div>

      <motion.div
        className="flex-1 max-w-4xl w-full rounded-2xl overflow-hidden border border-red-900/50 shadow-2xl shadow-red-950/50"
        style={{ maxHeight: '55vh' }}
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <iframe
          src="https://yandex.ru/map-widget/v1/?text=Старый+Оскол+Жукова+24а&z=16&l=map"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '300px', height: '100%' }}
          allowFullScreen
          title="Карта"
        />
      </motion.div>

      <motion.div
        className="flex items-center gap-3 mt-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Icon name="Phone" size={18} className="text-red-500 shrink-0" />
        <a href="tel:+79805279797" className="text-neutral-300 text-lg hover:text-white transition-colors">
          +7 980 527-97-97
        </a>
      </motion.div>
    </section>
  )
}
