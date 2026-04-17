import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-red-700 bg-red-900/30 text-sm px-4 py-1">Прокат авто в Старом Осколе</Badge>,
    title: "Садись и езжай.",
    content: 'Аренда автомобилей без лишних вопросов. От 1000 ₽ в сутки.',
    showButton: true,
    buttonText: 'Забронировать авто'
  },
  {
    id: 'fleet-1',
    title: 'ВАЗ Самара 2115',
    content: 'Надёжная классика. Подходит для города и загородных поездок.',
    carImage: 'https://cdn.poehali.dev/projects/28778356-6d9e-479c-a3be-8d58b9202770/files/7cb9ebda-d97c-4850-a049-dec69c14ece4.jpg',
    carName: 'ВАЗ 2115 Самара',
    carPrice: '1 000 ₽/сутки',
    features: [
      'Вместимость 5 человек',
      'Расход топлива ~7 л/100 км',
      'Кондиционер',
    ]
  },
  {
    id: 'fleet-2',
    title: 'Лада Нива 4×4',
    content: 'Проедет везде. Незаменима для дачи, охоты и бездорожья.',
    carImage: 'https://cdn.poehali.dev/projects/28778356-6d9e-479c-a3be-8d58b9202770/files/c8f0d87b-9d29-4149-af15-51b8285fec9f.jpg',
    carName: 'Лада Нива 4×4',
    carPrice: '1 000 ₽/сутки',
    features: [
      'Полный привод 4×4',
      'Проходимость любого бездорожья',
      'Вместимость 4 человека',
    ]
  },
  {
    id: 'fleet-3',
    title: 'Лада Гранта',
    content: 'Современный и экономичный седан для ежедневных поездок.',
    carImage: 'https://cdn.poehali.dev/projects/28778356-6d9e-479c-a3be-8d58b9202770/files/dceabf44-8e1c-4ecd-8232-a5f02de4af60.jpg',
    carName: 'Лада Гранта',
    carPrice: '1 000 ₽/сутки',
    features: [
      'Экономичный двигатель',
      'Просторный багажник',
      'Кондиционер и мультимедиа',
    ]
  },
  {
    id: 'conditions',
    title: 'Условия аренды',
    content: 'Минимум бюрократии — максимум удобства.',
    features: [
      'Возраст от 21 года, стаж от 2 лет',
      'Паспорт и водительское удостоверение',
      'Залог 5 000 ₽ (возвращается)',
      'Страховка включена в стоимость',
      'Выдача авто в Старом Осколе',
    ]
  },
  {
    id: 'cta',
    title: 'Готовы в путь?',
    content: 'Свяжитесь с нами — подберём автомобиль под вашу задачу и согласуем удобное время выдачи.',
    showButton: true,
    buttonText: 'Позвонить нам'
  },
]
