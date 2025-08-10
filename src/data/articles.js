const baseImg = (id) => `https://picsum.photos/seed/${id}/800/450`
const baseThumb = (id) => `https://picsum.photos/seed/${id}/400/225`

const head = {
  id: 1,
  link: '#',
  imageUrl: baseImg('head1'),
  categoryLabel: 'נדל"ן למגורים',
  categoryColor: '#e2b00d',
  title: 'כותרת ראשית לדוגמה עם טקסט ארוך יחסית כדי לדמות מציאות',
  subtitle:
    'כותרת משנה המסבירה את עיקר הסיפור והופכת את החוויה ליותר אמיתית ודומה לאתר המקורי',
  date: '07.08',
  author: 'מערכת מרכז הנדל"ן'
}

const list = [
  {
    id: 2,
    link: '#',
    imageUrl: baseThumb('l1'),
    categoryLabel: 'חדשות הענף',
    categoryColor: '#ea5619',
    title: 'נדל"ן בקצרה: כותרת לדוגמה',
    date: '07.08',
    author: 'מערכת מרכז הנדל"ן'
  },
  {
    id: 3,
    link: '#',
    imageUrl: baseThumb('l2'),
    categoryLabel: 'עיצוב ואדריכלות',
    categoryColor: '#f202d5',
    title: 'איכות זו לא מילה גסה: כותרת לדוגמה',
    date: '07.08',
    author: 'נמרוד בוסו'
  },
  {
    id: 4,
    link: '#',
    imageUrl: baseThumb('l3'),
    categoryLabel: 'חדשות הענף',
    categoryColor: '#ea5619',
    title: 'חברה טענה שהתחזתה לקבלן ראשי',
    date: '07.08',
    author: 'דרור ניר קסטל'
  },
  {
    id: 5,
    link: '#',
    imageUrl: baseThumb('l4'),
    categoryLabel: 'נדל"ן מניב והשקעות',
    categoryColor: '#21c8fc',
    title: 'בשווי קרקע של כ-145 מלש"ח: קבוצת זיתוני',
    date: '07.08',
    author: 'דרור ניר קסטל'
  },
  {
    id: 6,
    link: '#',
    imageUrl: baseThumb('l5'),
    categoryLabel: 'התחדשות עירונית',
    categoryColor: '#55ebb1',
    title: 'יוסי אברהמי נבחרה להקים 500 דירות',
    date: '07.08',
    author: 'מערכת מרכז הנדל"ן'
  }
]

const mostViewed = [
  {
    id: 11,
    link: '#',
    imageUrl: baseImg('mv1'),
    categoryLabel: 'נצפות ביותר',
    categoryColor: '#000000',
    title: 'עמרם אברהם: כותרת לדוגמה',
    date: '05.08',
    author: 'מערכת מרכז הנדל"ן'
  },
  {
    id: 12,
    link: '#',
    imageUrl: baseImg('mv2'),
    categoryLabel: 'נצפות ביותר',
    categoryColor: '#000000',
    title: 'חברות בניה סיניות לא ישתתפו',
    date: '04.08',
    author: 'דרור ניר קסטל'
  }
]

export function getHeadArticle() {
  return head
}

export function getListArticles() {
  return list
}

export function getMostViewed() {
  return mostViewed
}

export function getBanners() {
  return {
    top: 'https://storage.nadlancenter.co.il/media/Modules/Banners/50302.jpg',
    sections: 'https://storage.nadlancenter.co.il/media/Modules/Banners/50696.jpg'
  }
}


