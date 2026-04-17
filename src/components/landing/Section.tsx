import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

const LOGO_URL = 'https://cdn.poehali.dev/projects/28778356-6d9e-479c-a3be-8d58b9202770/bucket/f79e1709-6490-4cb0-8de0-054f9df039b5.jpg'

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, buttonUrl, carImage, carName, carPrice, features }: SectionProps) {
  const showLogo = id === 'hero' || id === 'cta'
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {showLogo && (
        <motion.div
          className="absolute top-6 right-16 md:right-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={LOGO_URL}
            alt="Арва Моторс"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
            style={{ mixBlendMode: 'screen' }}
          />
        </motion.div>
      )}
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <div className={`flex flex-col ${carImage ? 'lg:flex-row items-center gap-12' : ''}`}>
        <div className="flex-1">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          {content && (
            <motion.p
              className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}

          {features && (
            <motion.ul
              className="mt-6 space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-300 text-lg">
                  <Icon name="CheckCircle" size={20} className="text-red-600 shrink-0" />
                  {f}
                </li>
              ))}
            </motion.ul>
          )}

          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 md:mt-16"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-white bg-red-800 border-red-700 hover:bg-red-700 hover:border-red-500 transition-colors font-semibold text-lg px-8 py-6"
                onClick={() => window.open(buttonUrl ?? 'tel:+79805279797', buttonUrl ? '_blank' : '_self')}
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>

        {carImage && (
          <motion.div
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-red-900/50 shadow-2xl shadow-red-950/50">
              <img
                src={carImage}
                alt={carName}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <span className="text-white font-bold text-xl">{carName}</span>
                {carPrice && (
                  <span className="bg-red-700 text-white font-bold px-4 py-1.5 rounded-full text-sm">
                    {carPrice}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}