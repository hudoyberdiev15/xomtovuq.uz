// Telegram foydalanuvchi nomingiz (@ belgisisiz). Shu yerga o'zingiznikini yozing:
var TG="utkirbekoglu";
var STEP=0.5; // kg qadami
var ART=[
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M36 44C18 40 8 60 18 72C26 80 38 72 39 62Z" fill="#EDB48C" /><path d="M84 44C102 40 112 60 102 72C94 80 82 72 81 62Z" fill="#EDB48C" /><path d="M44 78C24 82 16 100 26 110C36 117 50 105 54 90Z" fill="#EDB48C" /><path d="M76 78C96 82 104 100 94 110C84 117 70 105 66 90Z" fill="#EDB48C" /><circle cx="24" cy="113" r="4.5" fill="#FFF8EE"/><circle cx="96" cy="113" r="4.5" fill="#FFF8EE"/><path d="M60 24C86 24 92 50 90 68C88 88 74 98 60 98C46 98 32 88 30 68C28 50 34 24 60 24Z" fill="#F9D5B5" /><ellipse cx="60" cy="25" rx="10" ry="4" fill="#E27C6F"/></g><path d="M60 34C52 50 52 74 58 94M60 34C68 50 68 74 62 94" fill="none" stroke="#EDB48C" stroke-width="2.5" stroke-linecap="round" opacity="1"/><ellipse cx="46" cy="50" rx="9" ry="5" fill="#fff" opacity="0.55" transform="rotate(-35 46 50)"/><circle cx="46" cy="40" r="1.1" fill="#E2A27D"/><circle cx="70" cy="44" r="1.1" fill="#E2A27D"/><circle cx="54" cy="56" r="1.1" fill="#E2A27D"/><circle cx="66" cy="66" r="1.1" fill="#E2A27D"/><circle cx="48" cy="72" r="1.1" fill="#E2A27D"/><circle cx="72" cy="80" r="1.1" fill="#E2A27D"/><circle cx="58" cy="88" r="1.1" fill="#E2A27D"/><circle cx="52" cy="50" r="1.1" fill="#E2A27D"/><circle cx="64" cy="76" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M12 74C10 50 32 32 60 32C82 32 98 42 110 52C100 64 84 82 62 90C40 98 16 94 12 74Z" fill="#F7B0A6" /><path d="M66 98C80 94 98 98 104 106C96 112 78 112 66 106Z" fill="#F4A097" /></g><path d="M24 66C40 52 62 46 90 54" fill="none" stroke="#FFE9DC" stroke-width="4.5" stroke-linecap="round" opacity="1"/><path d="M26 78C44 86 66 84 88 70M36 68C50 72 68 70 82 62" fill="none" stroke="#E5877D" stroke-width="2.6" stroke-linecap="round" opacity="0.9"/><ellipse cx="46" cy="44" rx="12" ry="4" fill="#fff" opacity="0.4" transform="rotate(-12 46 44)"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M84 78L98 92" fill="none" stroke="#A8573F" stroke-width="13" stroke-linecap="round" opacity="1"/><path d="M84 78L98 92" fill="none" stroke="#FFF8EE" stroke-width="9" stroke-linecap="round" opacity="1"/><circle cx="103" cy="94" r="6.5" fill="#FFF8EE"/><circle cx="96" cy="101" r="6" fill="#FFF8EE"/><path d="M10 62C10 40 36 28 62 30C90 32 102 50 94 68C86 86 60 94 36 88C20 84 10 76 10 62Z" fill="#F9D5B5" /></g><path d="M26 78C44 90 68 90 82 78" fill="none" stroke="#EDB48C" stroke-width="3" stroke-linecap="round" opacity="0.9"/><ellipse cx="40" cy="42" rx="13" ry="5" fill="#fff" opacity="0.5" transform="rotate(-25 40 42)"/><circle cx="36" cy="60" r="1.1" fill="#E2A27D"/><circle cx="52" cy="70" r="1.1" fill="#E2A27D"/><circle cx="60" cy="50" r="1.1" fill="#E2A27D"/><circle cx="72" cy="58" r="1.1" fill="#E2A27D"/><circle cx="46" cy="80" r="1.1" fill="#E2A27D"/><circle cx="68" cy="84" r="1.1" fill="#E2A27D"/><circle cx="30" cy="70" r="1.1" fill="#E2A27D"/><circle cx="78" cy="44" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="112" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M14 82C6 64 20 44 42 46C56 48 60 64 52 76C44 90 22 94 14 82Z" fill="#F9D5B5" /><path d="M46 52C54 36 72 30 86 36C92 46 86 60 72 66C60 70 52 64 46 52Z" fill="#F9D5B5" /><path d="M82 36C92 24 104 22 109 27C106 36 96 42 88 44Z" fill="#EDB48C" /><circle cx="48" cy="58" r="6" fill="#FFF8EE"/></g><ellipse cx="30" cy="58" rx="8" ry="4" fill="#fff" opacity="0.5" transform="rotate(-30 30 58)"/><ellipse cx="68" cy="44" rx="9" ry="3.5" fill="#fff" opacity="0.5" transform="rotate(-20 68 44)"/><circle cx="24" cy="72" r="1.1" fill="#E2A27D"/><circle cx="36" cy="80" r="1.1" fill="#E2A27D"/><circle cx="60" cy="52" r="1.1" fill="#E2A27D"/><circle cx="76" cy="52" r="1.1" fill="#E2A27D"/><circle cx="52" cy="64" r="1.1" fill="#E2A27D"/><circle cx="96" cy="32" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="113" rx="36" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M10 66C8 44 30 28 56 30C70 31 77 40 85 38C99 36 111 50 109 65C107 81 92 95 74 97C58 99 52 90 38 93C22 95 12 84 10 66Z" fill="#A63346" /></g><path d="M56 32C61 50 58 72 67 92" fill="none" stroke="#6E1E2B" stroke-width="3" stroke-linecap="round" opacity="1"/><path d="M62 60C74 58 88 62 98 72" fill="none" stroke="#6E1E2B" stroke-width="2.6" stroke-linecap="round" opacity="0.8"/><ellipse cx="30" cy="56" rx="12" ry="5" fill="#E37A8E" opacity="0.75" transform="rotate(-30 30 56)"/><ellipse cx="86" cy="52" rx="9" ry="4" fill="#E37A8E" opacity="0.55" transform="rotate(-20 86 52)"/><circle cx="96" cy="86" r="4" fill="#5F7F3F" stroke="#3E5A25" stroke-width="1.5"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="114" rx="38" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M74 14C52 22 42 48 48 76C52 94 62 104 74 106C86 104 96 94 100 76C106 48 96 22 74 14Z" fill="#F4B5A0" /></g><path d="M74 18V104" fill="none" stroke="#FFF8EE" stroke-width="6" stroke-linecap="round" opacity="1"/><path d="M74 18V104" fill="none" stroke="#A8573F" stroke-width="1.2" stroke-linecap="round" opacity="1"/><path d="M74 34C60 34 52 42 50 52M74 50C60 50 52 58 50 68M74 66C60 66 53 73 52 83M74 82C62 82 56 88 55 96M74 34C88 34 96 42 98 52M74 50C88 50 96 58 98 68M74 66C88 66 95 73 96 83M74 82C86 82 92 88 93 96" fill="none" stroke="#FFF1E4" stroke-width="3.2" stroke-linecap="round" opacity="1"/><path d="M26 14C44 26 14 52 28 72C34 80 32 90 26 100" fill="none" stroke="#A8573F" stroke-width="16" stroke-linecap="round" opacity="1"/><path d="M26 14C44 26 14 52 28 72C34 80 32 90 26 100" fill="none" stroke="#F9D5B5" stroke-width="12" stroke-linecap="round" opacity="1"/><path d="M30 22L22 26M27 34L34 36M20 46L28 48M18 60L28 60M26 74L34 72M30 86L22 88" fill="none" stroke="#EDB48C" stroke-width="2.4" stroke-linecap="round" opacity="1"/><ellipse cx="26" cy="13" rx="8" ry="3.5" fill="#E27C6F" stroke="#A8573F" stroke-width="1.8"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="113" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M50 68L26 94" fill="none" stroke="#A8573F" stroke-width="14" stroke-linecap="round" opacity="1"/><path d="M50 68L26 94" fill="none" stroke="#FFF8EE" stroke-width="10" stroke-linecap="round" opacity="1"/><circle cx="21" cy="98" r="6.5" fill="#FFF8EE"/><circle cx="30" cy="103" r="6" fill="#FFF8EE"/><path d="M48 56L38 80L62 72Z" fill="#F9D5B5" /><circle cx="74" cy="44" r="29" fill="#F9D5B5"/></g><ellipse cx="64" cy="32" rx="12" ry="5" fill="#fff" opacity="0.55" transform="rotate(-30 64 32)"/><path d="M58 62C70 70 86 68 94 56" fill="none" stroke="#EDB48C" stroke-width="3" stroke-linecap="round" opacity="0.9"/><circle cx="62" cy="46" r="1.1" fill="#E2A27D"/><circle cx="78" cy="34" r="1.1" fill="#E2A27D"/><circle cx="86" cy="50" r="1.1" fill="#E2A27D"/><circle cx="70" cy="58" r="1.1" fill="#E2A27D"/><circle cx="88" cy="38" r="1.1" fill="#E2A27D"/><circle cx="56" cy="38" r="1.1" fill="#E2A27D"/><circle cx="76" cy="50" r="1.1" fill="#E2A27D"/></svg>`,
`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="114" rx="34" ry="4.5" fill="#000" opacity=".13"/><g stroke="#A8573F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M53 6C52 16 47 24 44 34L76 34C73 24 68 16 67 6Z" fill="#EDB48C" /><path d="M36 52C22 50 15 64 22 74C28 80 37 74 38 66Z" fill="#EDB48C" /><path d="M84 52C98 50 105 64 98 74C92 80 83 74 82 66Z" fill="#EDB48C" /><path d="M60 28C88 28 95 56 92 76C89 96 76 106 60 106C44 106 31 96 28 76C25 56 32 28 60 28Z" fill="#F9D5B5" /><ellipse cx="60" cy="6" rx="9.5" ry="3.5" fill="#E27C6F"/><ellipse cx="60" cy="104" rx="13" ry="4.5" fill="#E58A80"/></g><path d="M60 38C52 54 52 80 58 98M60 38C68 54 68 80 62 98" fill="none" stroke="#EDB48C" stroke-width="2.5" stroke-linecap="round" opacity="1"/><ellipse cx="45" cy="56" rx="10" ry="5" fill="#fff" opacity="0.55" transform="rotate(-35 45 56)"/><circle cx="46" cy="44" r="1.1" fill="#E2A27D"/><circle cx="72" cy="50" r="1.1" fill="#E2A27D"/><circle cx="54" cy="64" r="1.1" fill="#E2A27D"/><circle cx="68" cy="72" r="1.1" fill="#E2A27D"/><circle cx="48" cy="82" r="1.1" fill="#E2A27D"/><circle cx="74" cy="88" r="1.1" fill="#E2A27D"/><circle cx="60" cy="56" r="1.1" fill="#E2A27D"/></svg>`
];
var TINT=["#FFE8D6", "#FFE0DC", "#FFE6D0", "#FFEBD2", "#F6D9DD", "#EFE6DA", "#FFE3D0", "#FFE9D8"];

var IC={ph:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',tg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>',bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'};
// Mahsulot rasmlari: images/ papkaga shu nomlar bilan joylang (800x800 kvadrat .jpg tavsiya etiladi)
var PH=["images/p0.jpg","images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg","images/p5.jpg","images/p6.jpg","images/p7.jpg"];
function vis(i){return PH[i]?{c:" pv",s:"background-image:url("+PH[i]+")",h:""}:{c:"",s:"background:"+TINT[i],h:ART[i]}}

var T={
uz:{cat0:"Hammasi",cat1:"Go'sht",cat2:"Jigar va sho'rva",i1t:"Bepul yetkazib berish",i1:"Buyurtmangizni uyingizgacha bepul yetkazamiz.",i2t:"Ish vaqti",i2:"Har kuni 08:00 – 21:00",i3t:"100% xalol",i3:"Barcha mahsulotlarimiz sifatli va xalol.",otl:"Bugungi takliflar",more:"Batafsil",tg:["Bugungi taklif","Xalol va toza","Sovutilgan","Yangi keldi","Sifatli","Hamyonbop","Yangi","Xalol"],tot:"Jami",otitle:"Buyurtmani tasdiqlash",oname:"Ismingiz",ophone:"Telefon raqamingiz",oaddr:"Yetkazish manzili",otg:"Telegramda yuborish",ocopy:"Nusxalash",ocopied:"Buyurtma nusxalandi",ohint:"Telegram ochilganda xabar avtomatik chiqmasa, nusxalangan matnni xabarga qo'ying (Paste).",rev:"Sharhlar",revs:"ta sharh",norate:"Hali baho yo'q",nrev:"Hali sharh yo'q. Birinchi bo'ling!",yname:"Ismingiz",ycom:"Fikringizni yozing...",send:"Sharh yuborish",add:"Savatga qo'shish",need:"Baho bering va fikr yozing",thanks:"Rahmat! Fikringiz qo'shildi",anon:"Mijoz",m_home:"Bosh sahifa",m_about:"Biz haqimizda",atitle:"Biz haqimizda",a1:"Bizning sahifamiz, ya'ni «Xom tovuq» dasturimiz 2026-yilda ishlab chiqilgan va bu sayt ham demo, ham jonli variantda ishlamoqda.",a2:"Siz bizdan mahsulot olishga majbur emassiz. Biz ham sizni mahsulot olishga majburlayotganimiz yo'q.",a3:"Bu dastur odamlarga yaxshilik qilish maqsadida yaratilgan",a4:"Bu sayt Khudoyberdiev tomonidan yaratilgan.",a5:"Bizning mahsulotlarimizning barchasi sifatli va 100% xalol. Uyingizgacha bepul yetkazib berish xizmatimiz ham mavjud.",a6:"Biz bilan bog'lanish uchun tel:",m_prod:"Mahsulotlar",m_how:"Qanday buyurtma",m_contact:"Aloqa",tag:"Bugun yangi keltirildi",h1:"Sifatli, toza xom tovuq",sub:"Har kuni yangi. Sovuq zanjirda saqlanadi, tarozida aniq tortiladi va uyingizgacha yetkaziladi.",cta:"Buyurtma berish",call:"Qo'ng'iroq qilish",c1:"Halol",c2:"Sovuq zanjir",c3:"Tez yetkazish",b1:"100% yangi",ptitle:"Mahsulotlar",search:"Qidirish...",s1t:"1. Tanlang",s1:"Kerakli mahsulotni va kilogrammni + tugmasi bilan qo'shing.",s2t:"2. Telegramda yuboring",s2:"Pastdagi tugma buyurtmangizni tayyor xabar qilib Telegramga yuboradi.",s3t:"3. Qabul qiling",s3:"Operator bog'lanadi va mahsulotni manzilingizga yetkazamiz.",ctitle:"Biz bilan bog'lanish",addr:"Toshkent shahri, Chilonzor tumani, Bunyodkor ko'chasi 12",hours:"Har kuni 08:00 – 21:00",openmap:"Xaritada ochish",kg:"so'm/kg",sum:"so'm",items:"ta mahsulot",order:"Telegramda buyurtma",none:"Hech narsa topilmadi",msg:"Assalomu alaykum! Buyurtma bermoqchiman:",mq:"Har kuni yangi • Halol • Tez yetkazish • Toza va sifatli • ",
 p:[["Butun tovuq","Butun, tozalangan, 1.5–2 kg","Yosh broyler tovuq, tozalangan va yuvilgan. Qovurish, duxovkada pishirish va sho'rva uchun mos. Har kuni yangi keltiriladi."],["Ko'krak filesi","Suyaksiz, terisiz","Yog'i kam, oqsilga boy qism. Tez pishadi, kotlet, shashlik va salatlar uchun juda yaxshi."],["Son (but)","Yangi, sovutilgan","Yumshoq va shirali go'sht. Tandir, duxovka va qovurish uchun eng yaxshi tanlov."],["Qanot","Marinadga tayyor","Marinadga tayyor qanotlar. Duxovkada yoki qovurilgan holda mazali gazak."],["Jigar","Toza, yangi","Toza va yangi jigar. Temir va vitaminlarga boy, tez pishadi."],["Bo'yin go'shti","Sho'rva uchun","Sho'rva va bulon uchun. Hamyonbop narx, to'yimli ta'm."],["Butaka","Yangi, sovutilgan","Tovuqning oyoq qismi. Qovurish, duxovka va tandir uchun mos."],["Tush bo'yinli","Bo'yni bilan, tozalangan","Bo'yni bilan birga butun tush. Sho'rva, bulon va qovurish uchun yaxshi tanlov."]]},
en:{cat0:"All",cat1:"Meat",cat2:"Liver & broth",i1t:"Free delivery",i1:"We deliver your order to your door for free.",i2t:"Working hours",i2:"Every day 08:00 – 21:00",i3t:"100% halal",i3:"All our products are quality and halal.",otl:"Today's offers",more:"Details",tg:["Today's pick","Halal & clean","Chilled","Just arrived","Quality","Budget-friendly","Fresh","Halal"],tot:"Total",otitle:"Confirm your order",oname:"Your name",ophone:"Your phone number",oaddr:"Delivery address",otg:"Send on Telegram",ocopy:"Copy",ocopied:"Order copied",ohint:"If the message does not appear automatically in Telegram, paste the copied text into the message.",rev:"Reviews",revs:"reviews",norate:"No ratings yet",nrev:"No reviews yet. Be the first!",yname:"Your name",ycom:"Write your opinion...",send:"Submit review",add:"Add to cart",need:"Give a rating and write a comment",thanks:"Thank you! Your review was added",anon:"Customer",m_home:"Home",m_about:"About us",atitle:"About us",a1:"Our page, the «Xom tovuq» (Raw Chicken) app, was developed in 2026, and this site works both as a demo and as a live version.",a2:"You are not obliged to buy anything from us, and we are not pushing you to buy.",a3:"This app was created with the aim of doing good for people",a4:"This site was created by Khudoyberdiev.",a5:"All our products are high quality and 100% halal. We also offer free delivery to your door.",a6:"To contact us, call:",m_prod:"Products",m_how:"How to order",m_contact:"Contact",tag:"Fresh delivery today",h1:"Quality, clean raw chicken",sub:"Fresh every day. Kept in a cold chain, weighed exactly and delivered to your door.",cta:"Order now",call:"Call us",c1:"Halal",c2:"Cold chain",c3:"Fast delivery",b1:"100% fresh",ptitle:"Products",search:"Search...",s1t:"1. Choose",s1:"Add the product and kilograms you need with the + button.",s2t:"2. Send on Telegram",s2:"The button below sends your order to Telegram as a ready message.",s3t:"3. Receive",s3:"An operator will contact you and we deliver to your address.",ctitle:"Contact us",addr:"Tashkent, Chilanzar district, Bunyodkor street 12",hours:"Every day 08:00 – 21:00",openmap:"Open in maps",kg:"UZS/kg",sum:"UZS",items:"items",order:"Order on Telegram",none:"Nothing found",msg:"Hello! I would like to order:",mq:"Fresh every day • Halal • Fast delivery • Clean and quality • ",
 p:[["Whole chicken","Whole, cleaned, 1.5–2 kg","Young broiler chicken, cleaned and washed. Great for frying, roasting and soup. Delivered fresh every day."],["Chicken breast fillet","Boneless, skinless","Lean, protein-rich cut. Cooks fast and works well for cutlets, kebabs and salads."],["Thigh","Fresh, chilled","Soft and juicy meat. The best choice for tandoor, oven and frying."],["Wings","Ready to marinate","Wings ready for marinade. A tasty snack baked or fried."],["Liver","Clean, fresh","Clean, fresh liver. Rich in iron and vitamins, cooks quickly."],["Chicken neck","For broth","For soup and broth. Budget-friendly price and rich flavor."],["Butaka (drumstick)","Fresh, chilled","The leg part of the chicken. Good for frying, oven and tandoor."],["Carcass with neck","With neck, cleaned","Whole carcass together with the neck. A good choice for soup, broth and frying."]]},
ru:{cat0:"Все",cat1:"Мясо",cat2:"Печень и бульон",i1t:"Бесплатная доставка",i1:"Доставляем заказ до двери бесплатно.",i2t:"Время работы",i2:"Ежедневно 08:00 – 21:00",i3t:"100% халяль",i3:"Все наши продукты качественные и халяль.",otl:"Предложения дня",more:"Подробнее",tg:["Выбор дня","Халяль и чисто","Охлаждённое","Новинка","Качество","Выгодно","Свежее","Халяль"],tot:"Итого",otitle:"Подтверждение заказа",oname:"Ваше имя",ophone:"Ваш номер телефона",oaddr:"Адрес доставки",otg:"Отправить в Telegram",ocopy:"Копировать",ocopied:"Заказ скопирован",ohint:"Если сообщение не появилось в Telegram автоматически, вставьте скопированный текст в сообщение.",rev:"Отзывы",revs:"отз.",norate:"Оценок пока нет",nrev:"Отзывов пока нет. Будьте первым!",yname:"Ваше имя",ycom:"Напишите ваш отзыв...",send:"Отправить отзыв",add:"В корзину",need:"Поставьте оценку и напишите отзыв",thanks:"Спасибо! Ваш отзыв добавлен",anon:"Клиент",m_home:"Главная",m_about:"О нас",atitle:"О нас",a1:"Наша страница, приложение «Xom tovuq» («Сырая курица»), разработано в 2026 году, и этот сайт работает как в демо-, так и в живом режиме.",a2:"Вы не обязаны ничего у нас покупать, и мы вас к покупке не принуждаем.",a3:"Это приложение создано, чтобы делать людям добро",a4:"Этот сайт создан Khudoyberdiev.",a5:"Все наши продукты качественные и на 100% халяль. У нас также есть бесплатная доставка до вашего дома.",a6:"Чтобы связаться с нами, звоните:",m_prod:"Продукты",m_how:"Как заказать",m_contact:"Контакты",tag:"Сегодня свежий завоз",h1:"Качественная чистая сырая курица",sub:"Свежая каждый день. Хранится в холодовой цепи, точно взвешивается и доставляется до двери.",cta:"Заказать",call:"Позвонить",c1:"Халяль",c2:"Холодовая цепь",c3:"Быстрая доставка",b1:"100% свежая",ptitle:"Продукты",search:"Поиск...",s1t:"1. Выберите",s1:"Добавьте нужный продукт и килограммы кнопкой +.",s2t:"2. Отправьте в Telegram",s2:"Кнопка внизу отправит заказ в Telegram готовым сообщением.",s3t:"3. Получите",s3:"Оператор свяжется с вами, мы доставим по адресу.",ctitle:"Свяжитесь с нами",addr:"Ташкент, Чиланзарский район, улица Бунёдкор 12",hours:"Ежедневно 08:00 – 21:00",openmap:"Открыть на карте",kg:"сум/кг",sum:"сум",items:"поз.",order:"Заказать в Telegram",none:"Ничего не найдено",msg:"Здравствуйте! Хочу заказать:",mq:"Свежая каждый день • Халяль • Быстрая доставка • Чисто и качественно • ",
 p:[["Тушка целиком","Целая, потрошёная, 1.5–2 кг","Молодой бройлер, очищенный и промытый. Подходит для жарки, запекания и бульона. Свежий завоз каждый день."],["Филе грудки","Без кости и кожи","Постная часть, богатая белком. Быстро готовится, отлично для котлет, шашлыка и салатов."],["Бедро","Свежее, охлаждённое","Мягкое и сочное мясо. Лучший выбор для тандыра, духовки и жарки."],["Крылья","Готовы к маринаду","Крылья, готовые к маринаду. Вкусная закуска запечённая или жареная."],["Печень","Чистая, свежая","Чистая свежая печень. Богата железом и витаминами, готовится быстро."],["Шея куриная","Для бульона","Для супа и бульона. Доступная цена и насыщенный вкус."],["Бутака (окорочок)","Свежее, охлаждённое","Ножка курицы. Подходит для жарки, духовки и тандыра."],["Тушка с шеей","С шеей, очищенная","Цельная тушка вместе с шеей. Хороший выбор для супа, бульона и жарки."]]}
};
var price=[30000,45000,30000,39000,6000,12000,10000,30000],icons=["","","","","","","",""],cart={};
var lang="uz",theme="light",$=function(i){return document.getElementById(i)};
function fmt(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")}
function render(){
 var d=T[lang],f=$("q").value.trim().toLowerCase(),h="";
 d.p.forEach(function(p,i){
  if(f&&(p[0]+" "+p[1]).toLowerCase().indexOf(f)<0)return;
  if(cat&&CATS[cat].indexOf(i)<0)return;
  var n=cart[i]||0;
  h+='<div class="row" data-p="'+i+'" tabindex="0"><div class="av'+vis(i).c+'" role="img" aria-label="'+esc(p[0])+'" style="'+vis(i).s+'">'+vis(i).h+'</div><div class="mid"><b>'+p[0]+'</b><small>'+p[1]+'</small><em>'+fmt(price[i])+' '+d.kg+'</em>'+rt(i)+'</div><div class="qty">'+(n?'<button class="s" data-a="-" data-i="'+i+'" aria-label="-">−</button><span>'+fq(n)+'</span>':'')+'<button data-a="+" data-i="'+i+'" aria-label="+">+</button></div></div>';
 });
 $("list").innerHTML=h||'<div class="none">'+d.none+'</div>';
 cartUi();
}
function cartUi(){
 var d=T[lang],c=0,s=0;
 for(var k in cart){c+=cart[k];s+=cart[k]*price[k]}
 $("cart").classList.toggle("on",c>0);
 $("ctot").textContent=fmt(s)+" "+d.sum;
 $("cinfo").textContent=fq(c)+" kg • "+Object.keys(cart).length+" "+d.items;
 $("send").innerHTML=IC.tg+"<span>"+d.order+"</span>";
}
function setLang(l){
 lang=l;try{localStorage.setItem("lang",l)}catch(e){}
 var d=T[l];document.documentElement.lang=l;
 document.querySelectorAll("[data-i]").forEach(function(el){if(d[el.dataset.i])el.textContent=d[el.dataset.i]});
 $("q").placeholder=d.search;$("rn").placeholder=d.yname;$("rc").placeholder=d.ycom;if(!$("pm").hidden)fillP();$("on").placeholder=d.oname;$("op").placeholder=d.ophone;$("oa").placeholder=d.oaddr;if(!$("om").hidden)fillO();buildC();
 var m=d.mq.repeat(8);$("mq").textContent=m+m;
 document.querySelectorAll(".lang button").forEach(function(b){b.classList.toggle("on",b.dataset.l===l)});
 render();
}
function setTheme(t){
 theme=t;document.documentElement.dataset.theme=t;$("theme").innerHTML=t==="dark"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>';
 try{localStorage.setItem("theme",t)}catch(e){}
}
document.querySelectorAll(".lang button").forEach(function(b){b.onclick=function(){setLang(b.dataset.l)}});
$("theme").onclick=function(){setTheme(theme==="dark"?"light":"dark")};
var cat=0,CATS=[null,[0,1,2,3,6,7],[4,5]];
function fq(n){return n%1?n.toFixed(1):String(n)}
$("cats").onclick=function(e){var b=e.target.closest("button");if(!b)return;cat=+b.dataset.k;document.querySelectorAll("#cats button").forEach(function(x){x.classList.toggle("on",x===b)});render()};
document.querySelectorAll('a[href=""]').forEach(function(a){a.href="https://t.me/"+TG});
var qs=0;
$("q").oninput=function(){render();var v=this.value.trim();if(v&&!qs){qs=1;$("products").scrollIntoView({behavior:"smooth"})}if(!v)qs=0};
$("q").addEventListener("keydown",function(e){if(e.key==="Enter"){$("products").scrollIntoView({behavior:"smooth"});this.blur()}});
$("sbtn").onclick=function(){var h=$("hs");h.classList.toggle("open");if(h.classList.contains("open"))$("q").focus()};
$("list").onclick=function(e){
 var b=e.target.closest("button");if(!b){var r=e.target.closest(".row");if(r)openP(+r.dataset.p);return}
 var i=b.dataset.i;
 if(b.dataset.a==="+")cart[i]=(cart[i]||0)+STEP;
 else{cart[i]-=STEP;if(cart[i]<=0)delete cart[i]}
 render();
};
$("send").onclick=openO;
var nav=$("nav"),bg=$("burger");
bg.onclick=function(){var o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nav.onclick=function(e){if(e.target.tagName==="A"){nav.classList.remove("open");bg.setAttribute("aria-expanded","false")}};
var ab=$("about");
function openAbout(e){if(e)e.preventDefault();ab.hidden=false;document.body.style.overflow="hidden";$("aclose").focus()}
function closeAbout(){ab.hidden=true;document.body.style.overflow=""}
document.querySelectorAll(".openabout").forEach(function(a){a.addEventListener("click",function(e){nav.classList.remove("open");openAbout(e)})});
$("aclose").onclick=closeAbout;
ab.onclick=function(e){if(e.target===ab)closeAbout()};
document.addEventListener("keydown",function(e){if(e.key==="Escape"){if(!ab.hidden)closeAbout();if(!$("pm").hidden)closeP();if(!$("om").hidden)closeO()}});
var cur=0,rate=0,R={};
try{R=JSON.parse(localStorage.getItem("rev")||"{}")}catch(e){R={}}
function saveR(){try{localStorage.setItem("rev",JSON.stringify(R))}catch(e){}}
function esc(t){return String(t).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function avg(i){var a=R[i]||[];if(!a.length)return null;var s=0;a.forEach(function(r){s+=r.s});return{v:(s/a.length).toFixed(1),n:a.length}}
function rt(i){var a=avg(i);return a?'<span class="rt">★ '+a.v+' ('+a.n+')</span>':''}
function stars(n){return"★★★★★".slice(0,n)+"☆☆☆☆☆".slice(0,5-n)}
function paintStars(){document.querySelectorAll("#stars button").forEach(function(b){b.classList.toggle("on",+b.dataset.v<=rate)})}
function fillP(){
 var d=T[lang],p=d.p[cur],a=avg(cur),l=R[cur]||[],h="";
 var v=vis(cur);$("pav").className="av big"+v.c;$("pav").style.cssText=v.s;$("pav").innerHTML=v.h;$("pname").textContent=p[0];$("pprice").textContent=fmt(price[cur])+" "+d.kg;
 $("pavg").textContent=a?"★ "+a.v+" · "+a.n+" "+d.revs:d.norate;
 $("pbio").textContent=p[2];$("padd").innerHTML=IC.bag+"<span>"+d.add+"</span>";
 l.slice().reverse().forEach(function(r){h+='<div class="rv"><div class="rvt"><b>'+esc(r.n)+'</b><span>'+stars(r.s)+'</span></div><p>'+esc(r.t)+'</p><small>'+esc(r.d)+'</small></div>'});
 $("plist").innerHTML=h||'<div class="none">'+d.nrev+'</div>';
}
function openP(i){cur=i;rate=0;paintStars();$("rn").value="";$("rc").value="";$("rmsg").textContent="";fillP();$("pm").hidden=false;document.body.style.overflow="hidden";$("pclose").focus()}
function closeP(){$("pm").hidden=true;document.body.style.overflow=""}
$("pclose").onclick=closeP;
$("pm").onclick=function(e){if(e.target===$("pm"))closeP()};
$("stars").onclick=function(e){var b=e.target.closest("button");if(!b)return;rate=+b.dataset.v;paintStars()};
$("list").addEventListener("keydown",function(e){if(e.key==="Enter"&&e.target.classList.contains("row"))openP(+e.target.dataset.p)});
$("padd").onclick=function(){cart[cur]=(cart[cur]||0)+STEP;render();closeP()};
$("rsend").onclick=function(){
 var d=T[lang],n=$("rn").value.trim(),t=$("rc").value.trim();
 if(!rate||!t){$("rmsg").textContent=d.need;return}
 (R[cur]=R[cur]||[]).push({n:n||d.anon,s:rate,t:t,d:new Date().toLocaleDateString()});saveR();
 rate=0;paintStars();$("rn").value="";$("rc").value="";$("rmsg").textContent=d.thanks;fillP();render();
};
function orderText(){
 var d=T[lang],t=d.msg,s=0;
 for(var k in cart){t+="\n• "+d.p[k][0]+" — "+cart[k]+" kg";s+=cart[k]*price[k]}
 t+="\n"+d.tot+": "+fmt(s)+" "+d.sum;
 var n=$("on").value.trim(),p=$("op").value.trim(),a=$("oa").value.trim();
 if(n)t+="\n"+d.oname+": "+n;
 if(p)t+="\n"+d.ophone+": "+p;
 if(a)t+="\n"+d.oaddr+": "+a;
 return t;
}
function fillO(){
 var d=T[lang],h="",s=0;
 for(var k in cart){h+='<div class="orow"><span>'+esc(d.p[k][0])+' × '+cart[k]+' kg</span><span>'+fmt(cart[k]*price[k])+'</span></div>';s+=cart[k]*price[k]}
 h+='<div class="orow otot"><span>'+d.tot+'</span><span>'+fmt(s)+' '+d.sum+'</span></div>';
 $("osum").innerHTML=h;updO();
}
function updO(){$("otg").href="https://t.me/"+TG+"?text="+encodeURIComponent(orderText())}
function openO(){if(!Object.keys(cart).length)return;$("omsg").textContent="";fillO();$("om").hidden=false;document.body.style.overflow="hidden"}
function closeO(){$("om").hidden=true;document.body.style.overflow=""}
function copyText(t){
 try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).catch(function(){});return}}catch(e){}
 var x=document.createElement("textarea");x.value=t;x.style.position="fixed";x.style.opacity="0";document.body.appendChild(x);x.select();
 try{document.execCommand("copy")}catch(e){}document.body.removeChild(x);
}
["on","op","oa"].forEach(function(id){$(id).addEventListener("input",updO)});
$("oclose").onclick=closeO;
$("om").onclick=function(e){if(e.target===$("om"))closeO()};
$("ocopy").onclick=function(){copyText(orderText());$("omsg").textContent=T[lang].ocopied};
$("otg").addEventListener("click",function(){updO();copyText(orderText());$("omsg").textContent=T[lang].ocopied});
// Chegirma foizi (0 = chegirma yo'q). Masalan birinchi mahsulotga 10% bo'lsa: [10,0,0,0,0,0,0,0]
var DISC=[0,0,0,0,0,0,0,0],BASE=price.slice();
for(var di=0;di<price.length;di++)price[di]=Math.round(BASE[di]*(100-DISC[di])/100);
var grads=["linear-gradient(135deg,#ff5f6d,#c8102e)","linear-gradient(135deg,#ff8a3d,#d9381e)","linear-gradient(135deg,#f5576c,#8e0e2b)","linear-gradient(135deg,#ff7a59,#b3122c)","linear-gradient(135deg,#e53561,#7a0c24)","linear-gradient(135deg,#ff9a44,#c0392b)","linear-gradient(135deg,#ff6b4a,#a30f2a)","linear-gradient(135deg,#ff5577,#6e0a20)"];
var cs=0,ctimer=null,cN=price.length,reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
function buildC(){
 var d=T[lang],h="",dh="";
 d.p.forEach(function(p,i){
  var pr=fmt(price[i])+" "+d.kg+(DISC[i]?'<s>'+fmt(BASE[i])+'</s>':'');
  h+='<div class="slide" style="--g:'+grads[i]+'" role="group" aria-roledescription="slide" aria-label="'+(i+1)+'/'+cN+'"><div class="st"><span class="sg">'+d.tg[i]+'</span><h3>'+esc(p[0])+'</h3><p>'+esc(p[2])+'</p><div class="sp">'+pr+'</div><div class="sb"><button class="btn" data-c="add" data-i="'+i+'">'+IC.bag+'<span>'+d.add+'</span></button><button class="btn o" data-c="info" data-i="'+i+'">'+d.more+'</button></div></div><div class="se">'+(DISC[i]?'<span class="sd">-'+DISC[i]+'%</span>':'')+'<div class="ph'+vis(i).c+'" role="img" aria-label="'+esc(p[0])+'"'+(vis(i).c?' style="'+vis(i).s+'"':'')+'>'+vis(i).h+'</div></div></div>';
  dh+='<button data-d="'+i+'" aria-label="'+(i+1)+'"></button>';
 });
 $("track").innerHTML=h;$("dots").innerHTML=dh;goC(cs,true);
}
function goC(n,keep){
 cs=(n+cN)%cN;$("track").style.transform="translateX(-"+cs*100+"%)";
 document.querySelectorAll("#dots button").forEach(function(b){b.classList.toggle("on",+b.dataset.d===cs)});
 if(!keep)playC();
}
function playC(){stopC();if(!reduce)ctimer=setInterval(function(){goC(cs+1,true)},4500)}
function stopC(){if(ctimer){clearInterval(ctimer);ctimer=null}}
$("cprev").onclick=function(){goC(cs-1)};
$("cnext").onclick=function(){goC(cs+1)};
$("dots").onclick=function(e){var b=e.target.closest("button");if(b)goC(+b.dataset.d)};
$("track").onclick=function(e){
 var b=e.target.closest("button");if(!b)return;var i=+b.dataset.i;
 if(b.dataset.c==="add"){cart[i]=(cart[i]||0)+STEP;render()}else openP(i);
};
var cw=$("cwrap"),tx=0;
cw.addEventListener("mouseenter",stopC);cw.addEventListener("mouseleave",playC);
cw.addEventListener("focusin",stopC);cw.addEventListener("focusout",playC);
cw.addEventListener("touchstart",function(e){tx=e.touches[0].clientX;stopC()},{passive:true});
cw.addEventListener("touchend",function(e){var dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>40)goC(cs+(dx<0?1:-1));else playC()},{passive:true});
document.addEventListener("visibilitychange",function(){document.hidden?stopC():playC()});
$("up").onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};
window.addEventListener("scroll",function(){$("up").style.display=window.scrollY>500?"block":"none"});
try{lang=localStorage.getItem("lang")||"uz";theme=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light")}catch(e){}
(function(){var v=vis(0),h=$("hph");h.className="hph"+v.c;h.style.cssText=v.c?v.s:"";h.innerHTML=v.h})();setTheme(theme);setLang(lang);playC();
