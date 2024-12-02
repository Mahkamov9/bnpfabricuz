import SofaImg from "../assets/Images/AT-Cotton-Pillow-960x720.jpg";
import SofaImg1 from "../assets/Images/allereasemain-960x720.jpg";
import SofaImg2 from "../assets/Images/Underpad-Twill-Print-01.jpg";
import SofaImg3 from "../assets/Images/Underpad-Perval-01.jpg";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const CardData = [
  {
    "id": 1,
    "title":t('card_title'),
    "category": "Texnologiya",
    "img": SofaImg,
    "text":t('card_subtitle')
  },
  {
    "id": 2,
    "title": "Uzun matolar",
    "category": "Sog'liqni Saqlash",
    "img": SofaImg1,
    "text":"Uzun matolar kolleksiyamizda nafaqat qulaylik, balki zamonaviylik ham mavjud. Ular o'zining uzun va erkin siluetlari bilan har qanday tadbirda, kundalik kiyimda yoki maxsus vaziyatlarda mukammal tanlovdir. Yumshoq va yengil to'qimalar bilan yaratilgan uzun matolar, nafaqat estetik jihatdan chiroyli, balki qulay va havo o'tkazuvchi sifatlari bilan ham ajralib turadi. Har qanday mavsum uchun ideal bo'lgan bu matolar sizni har doim chiroyli va o'ziga xos his qilishingizga yordam beradi."

  },
  {
    "id": 3,
    "title": "Paxta matolar",
    "category": "Ta'lim",
    "img": SofaImg2,
    "text":"Paxta matolar tabiiy va organik bo'lib, ular teriga do'st va nafas olishga imkon beradi. Bizning paxta matolarimizning yumshoq va yaxshi havo o'tkazuvchi tuzilmasi bilan, har qanday faslga mos keladigan qulay va salomatlikka foydali kiyimlar yaratish mumkin. Paxta matolari, ayniqsa, yozgi kiyimlar va ichki kiyimlar uchun eng yaxshi tanlov bo'lib, ular qulaylik va yumshoqlikni birlashtiradi. Tabiiy tolalar sizni salqin va toza his qilishga yordam beradi."

  },
  {
    "id": 4,
    "title": "Suniy matolar",
    "category": "Ta'lim",
    "img": SofaImg3,
    "text":"Sun'iy matolar zamonaviy texnologiyalar yordamida ishlab chiqarilgan va yuqori sifatli, lekin tabiiy matolardan ancha arzon bo'lishi mumkin. Bu matolar turli ranglar va dizaynlarda mavjud bo'lib, sizning kiyim va interyeringizga mukammal moslashadi. Ular eng so'nggi tendentsiyalarni o'zida aks ettiradi va yaxshi mustahkamlik, chidamlilik, va uzoq muddatli foydalanish imkonini beradi. Sun'iy matolar, ayniqsa, yog'och va plastik kabi materiallardan foydalanish osonligi bilan mashhur bo'lib, ular har doim yengil va qulay bo'lib qoladi."

  }
]
export default CardData