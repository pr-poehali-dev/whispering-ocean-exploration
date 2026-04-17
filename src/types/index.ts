import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  carImage?: string
  carName?: string
  carPrice?: string
  features?: string[]
}

export interface SectionProps extends Section {
  isActive: boolean
}