import tutorialsData from './tutorials.json';

export const categories = [
  {
    id: 'payments',
    name: { en: 'Payments', hi: 'पेमेंट्स' },
    headline: { en: 'Learn payment apps', hi: 'पेमेंट ऐप सीखें' },
    description: { en: 'Easy step-by-step guides for sending money safely.', hi: 'पैसे सुरक्षित तरीके से भेजने के आसान कदम।' },
    icon: 'account_balance_wallet',
    accent: 'bg-primary-fixed text-primary',
  },
  {
    id: 'taxis',
    name: { en: 'Taxis', hi: 'टैक्सी' },
    headline: { en: 'Book taxis confidently', hi: 'आसानी से टैक्सी बुक करें' },
    description: { en: 'Learn how to book and track rides.', hi: 'राइड बुक और ट्रैक करना सीखें।' },
    icon: 'local_taxi',
    accent: 'bg-secondary-fixed text-secondary',
  },
  {
    id: 'shopping',
    name: { en: 'Shopping', hi: 'शॉपिंग' },
    headline: { en: 'Shop online with ease', hi: 'ऑनलाइन खरीदारी करें' },
    description: { en: 'Simple guides to browse and order products.', hi: 'सामान देखने और ऑर्डर करने की आसान गाइड।' },
    icon: 'shopping_bag',
    accent: 'bg-surface-container-high text-primary',
  },
  {
    id: 'groceries',
    name: { en: 'Groceries', hi: 'किराना' },
    headline: { en: 'Get groceries delivered', hi: 'किराना घर पर मंगाएं' },
    description: { en: 'Step-by-step help for ordering essentials.', hi: 'ज़रूरी सामान मंगाने की आसान मदद।' },
    icon: 'local_mall',
    accent: 'bg-tertiary-fixed text-tertiary',
  },
];

export const apps = [
  { id: 'phonepe', categoryId: 'payments', name: 'PhonePe', note: { en: 'Most Popular', hi: 'सबसे लोकप्रिय' }, icon: 'account_balance_wallet', accent: 'bg-primary/5 text-primary' },
  { id: 'ola', categoryId: 'taxis', name: 'Ola', note: { en: 'Book a ride', hi: 'राइड बुक करें' }, icon: 'local_taxi', accent: 'bg-secondary/10 text-secondary' },
  { id: 'amazon', categoryId: 'shopping', name: 'Amazon', note: { en: 'Online shopping', hi: 'ऑनलाइन शॉपिंग' }, icon: 'shopping_bag', accent: 'bg-surface-container-high text-primary' },
  { id: 'blinkit', categoryId: 'groceries', name: 'Blinkit', note: { en: 'Fast delivery', hi: 'तेज़ डिलीवरी' }, icon: 'storefront', accent: 'bg-tertiary-fixed text-tertiary' },
];

export const tutorials = tutorialsData.tutorials;

export const safetyTips = [
  {
    icon: 'lock',
    accent: 'bg-primary-fixed text-primary',
    title: { en: 'Never share your OTP with anyone.', hi: 'अपना OTP किसी के साथ कभी साझा न करें।' },
    text: { en: 'Bank staff will never ask for your OTP on call or message.', hi: 'बैंक वाले आपसे कभी कॉल या मैसेज पर OTP नहीं मांगते।' },
  },
  {
    icon: 'pin',
    accent: 'bg-secondary-fixed text-secondary',
    title: { en: 'Do not share your UPI PIN.', hi: 'अपना UPI PIN साझा न करें।' },
    text: { en: 'You need a PIN only when sending money, not when receiving it.', hi: 'PIN केवल पैसे भेजने के लिए लगता है, पैसे लेने के लिए नहीं।' },
  },
  {
    icon: 'person_search',
    accent: 'bg-surface-container-high text-primary',
    title: { en: 'Verify names before payment.', hi: 'भुगतान से पहले नाम जांचें।' },
    text: { en: 'Pause and check the person, number, and amount one more time.', hi: 'रुककर व्यक्ति, नंबर और राशि एक बार फिर जांचें।' },
  },
  {
    icon: 'phone_missed',
    accent: 'bg-error-container text-error',
    title: { en: 'Avoid unknown urgent calls.', hi: 'अनजान जल्दीबाज़ी वाले कॉल से बचें।' },
    text: { en: 'Scammers often create pressure. You can hang up and ask family first.', hi: 'ठग अक्सर दबाव बनाते हैं। कॉल काटें और पहले परिवार से पूछें।' },
  },
];
