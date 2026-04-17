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
    carImage: 'https://cdn.poehali.dev/projects/28778356-6d9e-479c-a3be-8d58b9202770/bucket/e0a28d5c-b624-4c34-a64a-34e0a323378d.jpg',
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
    title: 'ГАЗ Газель 2747',
    content: 'Грузовой фургон для перевозки мебели, товаров и переездов.',
    carImage: 'https://cdn.poehali.dev/projects/28778356-6d9e-479c-a3be-8d58b9202770/bucket/dc9b02fc-f3c0-4e7b-b15f-71a41ff64d91.jpg',
    carName: 'ГАЗ Газель 2747',
    carPrice: '1 000 ₽/сутки',
    features: [
      'Грузоподъёмность до 1,5 тонны',
      'Закрытый фургон — груз под защитой',
      'Подходит для переездов и доставки',
    ]
  },
  {
    id: 'fleet-3',
    title: 'Новинки скоро в прокате.',
    content: 'Мы постоянно обновляем автопарк. Следите за новыми поступлениями или свяжитесь с нами — расскажем, что появится в ближайшее время.',
    showButton: true,
    buttonText: 'Узнать подробнее',
    buttonUrl: 'https://vk.com/autojurist',
  },
  {
    id: 'conditions',
    title: 'Условия аренды',
    content: 'Минимум бюрократии — максимум удобства.',
    features: [
      'Возраст от 18 лет, стаж от 1 года',
      'Паспорт и водительское удостоверение',
      'Залог не требуется',
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