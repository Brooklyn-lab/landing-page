export type Locale = "pl" | "ua";

export const translations = {
  pl: {
    header: {
      phone: "+48 575 901 115",
      email: "podos.gabinet@gmail.com",
    },
    nav: {
      about: "O mnie",
      why: "Dlaczego warto wybrać?",
      services: "Usługi i ceny",
      address: "Adres",
      portfolio: "Moje prace",
      contact: "Kontakt",
    },
    hero: {
      title:
        "PodOS Gabinet Podologiczny (Wrocław) - zdrowe stopy - lekki chód.",
    },
    about: {
      title: "O mnie",
      subtitle:
        "PodOS - to miejsce, gdzie troska o zdrowie i estetykę stóp łączy się z profesjonalizmem i nowoczesnymi metodami leczenia.",
      description: [
        "Nazywam się Helena Stepaniuk, jestem wykwalifikowanym specjalistą - podologiem. Oferuję kompleksowe usługi podologiczne, które pomogą zachować zdrowie stóp niezależnie od wieku.",
        "Indywidualne podejście do każdego pacjenta, zaczynam od dokładnego badania i wywiadu, w którym wyjaśniam problemy i przyczyny ich wystąpienia. Podczas zabiegu staram się maksymalnie przekazać i wyjaśnić pacjentowi, jakie metody leczenia i preparaty będą stosowane. Udzielam wskazówek dotyczących wykonywania zabiegów pielęgnacyjnych w domu.",
      ],
    },
    why: {
      title: "Dlaczego warto wybrać PodOS?",
      subtitle:
        "PodOS - przestrzeń stworzona z myślą o Twoim komforcie i zdrowiu.",
      description: [
        "Oferta obejmuje profilaktykę i leczenie różnych form chorób: wrastające paznokcie, odciski, nagniotki, grzybica stóp i paznokci itp.",
        "W gabinecie nowoczesny i profesjonalny sprzęt. Podczas zabiegów używam tylko profesjonalnych narzędzi i specjalistycznych preparatów.",
        "Wszystkie narzędzia po zabiegach są sterylizowane w myjce ultradźwiękowej i autoklawie. Po każdym zabiegu stanowisko pracy jest dezynfekowane, wszystkie jednorazowe środki bezpieczeństwa używane podczas leczenia są utylizowane zgodnie z normami i zasadami ochrony zdrowia i bezpieczeństwa, co sprawia, że leczenie pacjentów w moim gabinecie jest bezpieczne.",
        "Jeśli szukasz skutecznych rozwiązań w pielęgnacji stóp, gabinet PodOS będzie Twoim właściwym wyborem.",
      ],
    },
    certificates: {
      description:
        "W gabinecie oferuję specjalistyczne i nowoczesne metody leczenia. Stosuję systemy korekcyjne UniBrace, nici tytanowe, które szybko pomagają w rozwiązywaniu problemów z wrastającymi i zdeformowanymi paznokciami. Prowadzę terapie leczenia brodawek, pęknięć na piętach, usuwam odciski, nagniotki.",
    },
    services: {
      title: "Usługi i ceny w PodOS",
      subtitle:
        "W swojej pracy kieruję się przejrzystością i lojalnością cenową.",
      description: [
        "Gabinet PodOS to miejsce komfortu, gdzie każdy zabieg jest dostosowywany do potrzeb pacjenta, pozwalając na uzyskanie optymalnych efektów.",
        "Dla dzieci i pacjentów w podeszłym wieku - udzielany jest stały rabat na wszystkie rodzaje usług.",
      ],
      labels: {
        price: "Cena",
        description: "Zabieg",
        duration: "Czas trwania",
      },
      items: [
        {
          id: 1,
          title: "Konsultacja",
          price: "100 zł",
          description:
            "Diagnoza zmian w obrębie skóry i paznokci. Przedstawienie i omówienie terapii.",
          duration: "30 min.",
        },
        {
          id: 2,
          title: "Pedicure podologiczny",
          price: "od 200 zł.",
          description:
            "Opracowanie podeszwy stóp, skrócenie i oczyszczenie paznokci, aplikacja preparatów kosmetycznych.",
          duration: "do 90 min.",
        },
        {
          id: 3,
          title: "Pedicure podologiczny leczniczy",
          price: "od 250 zł.",
          description:
            "Opracowanie podeszwy stóp, skrócenie i oczyszczenie paznokci, aplikacja preparatów leczniczych.",
          duration: "do 120 min.",
        },
        {
          id: 4,
          title: "Pedicure klasyczny z lakierem hybrydowym",
          price: "od 220 zł.",
          description:
            "Opracowanie podeszwy stóp, skrócenie i oczyszczenie paznokci, naniesienie pokrycia hybrydowego, aplikacja preparatów kosmetycznych.",
          duration: "do 120 min.",
        },
        {
          id: 5,
          title: "Pedicure SPA (pedicure japoński)",
          price: "od 220 zł.",
          description:
            "Opracowanie podeszwy stóp, skrócenie i oczyszczenie paznokci, aplikacja preparatów kosmetycznych, wykonanie pedicure metodą mechanicznego wcierania pasty specjalnej leczniczej w płytkę paznokcia i polerowanie pudrem mineralnym.",
          duration: "do 120 min.",
        },
        {
          id: 6,
          title: "Masaż stóp z elementami refleksologii",
          price: "od 70 zł.",
          duration: "30 min.",
        },
        {
          id: 7,
          title: "Kąpiele parafinowe stóp (z masażem)",
          price: "od 100 zł.",
          duration: "60 min.",
        },
        {
          id: 8,
          title: "Kąpiele parafinowe stóp i dłoni (z masażem)",
          price: "od 200 zł.",
          description:
            "Opracowanie stóp i dłoni, aplikacja preparatów kosmetycznych, zanurzenie w kąpieli parafinowej, masaż.",
          duration: "do 120 min.",
        },
        {
          id: 9,
          title: "Grzybica paznokci",
          price: "od 150 zł.",
          description:
            "Diagnoza podologiczna, opracowanie i leczenie, aplikacja produkty leczniczego.",
          duration: "do 60 min.",
        },
        {
          id: 10,
          title: "Terapia brodawek wirusowych",
          price: "od 150 zł. (1 wizyta)\nod 100 zł. (2 wizyta)",
          description: "Opracowanie brodawek, leczenie.",
          duration: "do 30 min.",
        },
        {
          id: 11,
          title: "Paznokieć wrastający",
          price: "od 100 zł.",
          description: "Opracowanie wrastającej części i leczenie paznokcia.",
          duration: "do 60 min.",
        },
        {
          id: 12,
          title: "Usunięcie modzela/odcisku",
          price: "od 100 zł.",
          description:
            "Usunięcie modzela lub odcisku oraz założenie odciązenia.",
          duration: "do 60 min.",
        },
        {
          id: 13,
          title: "Leczenie pękających pięt",
          price: "od 150 zł.",
          description:
            "Opracowanie pęknięć, aplikacja preparatów leczniczych, nałożenie bandaża.",
          duration: "do 60 min.",
        },
        {
          id: 14,
          title: "Instalacja systemu UniBrace",
          price: "od 200 zł.",
          description:
            "Poprawa kształtu, zapobieganie procesu zapalnego i wrastaniu paznokcia w skórę.",
          duration: "do 30 min. (1 palec)",
        },
        {
          id: 15,
          title: "Klamra tytanowa",
          price: "od 200 zł.",
          description:
            "Poprawa kształtu, zapobieganie procesu zapalnego i wrastaniu paznokcia w skórę.",
          duration: "do 30 min. (1 palec)",
        },
      ],
    },
    address: {
      description:
        '53-680 Wrocław, ul. Braniborska 61/13 (budynek Legnicka Residence, 2 piętro, gabinet przy salonie "Pracownia fryzur")',
      additional: ["parking", "możliwość wjazdu dla osób niepełnosprawnych"],
    },
    portfolio: {
      title:
        "PodOS - to gwarancja pielęgnacji na najwyższym poziomie. Odwiedź i dowiedz się, jak mogę Ci pomóc!",
      description:
        "Wykonuję zabiegi z serii SPA - kąpiele parafinowe dłoni i stóp, które mają nie tylko dobry efekt kosmetyczny dla skóry, ale także leczniczy, fizjoterapeutyczny dla stawów. Oferuję masaż z elementami refleksologii zarówno jako osobną usługę, jak i na zakończenie zabiegów SPA.",
    },
    contact: {
      title: "Gabinet PodOS - zaufaj profesjonaliście",
      description: [
        "To nie tylko miejsce wykonywania zabiegów, ale także swego rodzaju centrum szkoleniowe, gdzie pacjentom pokazuję praktycznie i udzielam wskazówek do codziennej pielęgnacji stóp.",
        "Opowiadam o znaczeniu prawidłowego odżywiania i utrzymania równowagi wodnej, o wpływie różnych chorób na stan skóry i paznokci. Jak prawidłowo przyjmować witaminy i wiele innych wskazówek dla utrzymania zdrowia stóp i organizmu jako całości.",
      ],
      form: {
        title: "Skontaktuj się ze mną za pomocą poniższego formularza.",
        name: "Imię i nazwisko:",
        phone: "Numer telefonu:",
        email: "Adres e-mail:",
        message: "Wiadomość:",
        submit: "Wyślij",
      },
    },
    footer: {
      copyright: "© 2024 PodOS. Wszelkie prawa zastrzeżone.",
    },
  },
  ua: {
    header: {
      phone: "+48 575 901 115",
      email: "podos.gabinet@gmail.com",
    },
    nav: {
      about: "Про мене",
      why: "Чому PodOs?",
      services: "Послуги та ціни",
      address: "Адреса",
      portfolio: "Мої роботи",
      contact: "Контакти",
    },
    hero: {
      title:
        "PodOS Кабінет Подологічний (Вроцлав) – здорові стопи - легка хода.",
    },
    about: {
      title:
        "PodOS - це місце, де турбота про здоров'я та естетику ніг поєднується з професіоналізмом та сучасними методами лікування.",
      description: [
        "Мене звати Олена Степанюк, я кваліфікований фахівець - подолог. Пропоную комплексні подологічні послуги, що допоможуть зберегти здоров'я ніг незалежно від віку.",
        "Індивідуальний підхід до кожного пацієнта, розпочинаю з ретельного огляду і співбесіди, в якій з'ясовую проблеми та причини їх появи. В процесі виконання процедури, стараюся максимально донести і роз'яснити пацієнту, які методи лікування та препарати будуть використовуватися. Даю рекомендації щодо проведення доглядових процедур вдома.",
      ],
    },
    why: {
      title: "PodOS - простір, створений з думкою про ваш комфорт і здоров'я.",
      description: [
        "Пропозиція включає профілактику і лікування різних форм захворювань: врослі нігті, натоптиші, мозолі, мікози стоп та нігтів та ін.",
        "В кабінеті сучасне і професійне обладнання. Під час процедур використовую тільки професіональні інструменти та спеціалізовані препарати.",
        "Всі інструменти після процедур проходять стерилізацію в ультразвуковій мийці та автоклаві. Після кожної процедури робоче місце дезінфікується, всі одноразові засоби безпеки, які використовувалися під час лікування, утилізуються відповідно до норм і правил охорони здоров'я та безпеки, що робить лікування пацієнтів в моєму кабінеті безпечним.",
        "Якщо ви шукаєте ефективні рішення в догляді за стопами, кабінет PodOS буде вашим правильним вибором.",
      ],
    },
    certificates: {
      description:
        "В кабінеті я пропоную спеціалізовані та сучасні методи лікування. Використовую корекційні системи UniBrace, титанові ниті, які швидко допомагають в рішенні проблем врослих та деформованих нігтів. Проводжу терапії з лікування бородавок, тріщин на п'ятах, усуваю мозолі, натоптиші.",
    },
    services: {
      title: "В роботі дотримуюся прозорості та лояльності в цінах.",
      description: [
        "Кабінет PodOS – це місце комфорту, де кожна процедура адаптується до потреб пацієнта, що дозволяє досягти оптимальних результатів.",
        "Для дітей і літніх пацієнтів - надається постійна знижка на всі види послуг.",
      ],
      labels: {
        price: "Ціна",
        description: "Опис",
        duration: "Тривалість",
      },
      items: [
        {
          id: 1,
          title: "Консультація",
          price: "100 злотих",
          description:
            "Діагностика змін на шкірі і нігтях. Обговорення терапії і методів лікування. Безплатна при умові на процедуру.",
          duration: "30 хв.",
        },
        {
          id: 2,
          title: "Педикюр подологічний",
          price: "200 злотих",
          description:
            "Очищення стоп, обрізання нігтів, нанесення препаратів косметичних.",
          duration: "до 90 хв.",
        },
        {
          id: 3,
          title: "Педикюр подологічний лікувальний",
          price: "250 злотих",
          description:
            "Очищення стоп, підготування нігтів, нанесення препаратів косметичних та лікувальних.",
          duration: "до 120 хв.",
        },
        {
          id: 4,
          title: "Педикюр класичний з гібридним покриттям нігтів",
          price: "від 220 злотих",
          description:
            "Очищення стоп, підготування нігтів, покриття лаком гібридним, нанесення препаратів косметичних.",
          duration: "до 120 хв.",
        },
        {
          id: 5,
          title: "Педикюр СПА (японський педикюр)",
          price: "від 220 злотих",
          description:
            "Очищення стоп, обрізання нігтів, нанесення препаратів косметичних, виконання педикюру методом механічного втирання в нігтьову пластину спеціальної лікувальної пасти та полірування мінеральною пудрою",
          duration: "до 120 хв.",
        },
        {
          id: 6,
          title: "Масаж стоп з елементами рефлексології",
          price: "від 70 злотих",
          duration: "30 хв.",
        },
        {
          id: 7,
          title: "Ванни парафінові для ніг (+масаж)",
          price: "від 100 злотих",
          duration: "60 хв.",
        },
        {
          id: 8,
          title: "Ванни парафінові для ніг і рук (+масаж)",
          price: "від 200 злотих",
          description:
            "Очищення, накладання препаратів косметичних, занурення до ванни з парафіном, масаж.",
          duration: "до 120 хв.",
        },
        {
          id: 9,
          title: "Грибкове ураження нігтів",
          price: "від 150 злотих",
          description:
            "Діагностика подологічна, очищення нігтів, аплікація лікувальна.",
          duration: "до 60 хв.",
        },
        {
          id: 10,
          title: "Терапія бородавок вірусних",
          price:
            "від 150 злотих (1-й візит)\nвід 100 злотих (подальше лікування)",
          description: "Очищення бородавок, лікування.",
          duration: "до 30 хв.",
        },
        {
          id: 11,
          title: "Врослий ніготь",
          price: "від 100 злотих",
          description: "Робота з врослою частиною і лікування нігтя.",
          duration: "до 60 хв.",
        },
        {
          id: 12,
          title: "Видалення мозолів/натоптишів",
          price: "від 100 злотих",
          description:
            "Видалення мозоля або натоптиша та накладання розвантаження.",
          duration: "до 60 хв.",
        },
        {
          id: 13,
          title: "Лікування тріщин на п'ятах",
          price: "від 150 злотих",
          description:
            "Обробка тріщин, нанесення лікувальних препаратів, накладання бандажу.",
          duration: "до 60 хв.",
        },
        {
          id: 14,
          title: "Встановлення системи UniBrace",
          price: "від 200 злотих",
          description:
            "Покращення форми, запобігання запального процесу та вростання нігтя в шкіру.",
          duration: "до 30 хв. (1 палець)",
        },
        {
          id: 15,
          title: "Титанова скоба",
          price: "від 200 злотих",
          description:
            "Покращення форми, запобігання запального процесу та вростання нігтя в шкіру.",
          duration: "до 30 хв. (1 палець)",
        },
      ],
    },
    address: {
      description:
        "53-680 Вроцлав, вул. Браніборська 61/13 (будівля Legnicka Residence, 2-й поверх, кабінет при салоні 'Pracownia fryzur')",
      additional: ["паркінг", "можливість в'їзду для осіб з інвалідністю"],
    },
    portfolio: {
      title:
        "PodOS - це гарантія догляду на найвищому рівні. Відвідайте і дізнайтеся, як можу вам допомогти!",
      description:
        "Виконую процедури із серії СПА - парафінові ванни для рук і стоп, які мають не тільки добрий косметичний ефект для шкіри, але й оздоровчий, фізіотерапевтичний для суглобів. Пропоную масаж з елементами рефлексології як окремий вид послуги, так на закінчення СПА процедур.",
    },
    contact: {
      title: "Кабінет PodOS– довіртесь професіоналу",
      description: [
        "Це не лише місце проведення процедур, але й своєрідний навчальний центр, де пацієнтам показую практично і надаю рекомендації для щоденного догляду за стопами.",
        "Розповідаю про важливість правильного харчування і дотримання водного балансу, про вплив на стан шкіри й нігтів різних захворювань. Як правильно вживати вітаміни та дуже багато інших рекомендацій, для підтримання здоров'я стоп та організму в цілому.",
      ],
      form: {
        title: "Зв'яжіться зі мною за допомогою форми нижче.",
        name: "Ім'я та прізвище:",
        phone: "Номер телефону:",
        email: "Адреса електронної пошти:",
        message: "Повідомлення:",
        submit: "Відправити",
      },
    },
    footer: {
      copyright: "© 2024 PodOS. Всі права захищені.",
    },
  },
} as const;

export type TranslationKeys = keyof typeof translations.pl;
