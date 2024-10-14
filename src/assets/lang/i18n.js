import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "parents": "Parents",
                    "turkmen": "Turkmen",
                    "english": "English",
                    "rus": "Russian",
                    "aboutus": "About Us",
                    "teachers": "Educators",
                    "babies": "Babies",
                    "search": "Search...",
                    "videos": "Vidoes",
                    "books": "Books",
                    "blogs": "Blogs",
                    "tales": "Tales",
                    "musics": "Audio recordings",
                    "lessons": "Lessons",
                    "view": "views",
                    "name": "Name",
                    "author": "Author",
                    "read": "Read",
                    "copyright": "© 2024. All rights reserved.",
                    "all": "All",
                    "top_read": "Top Read",

                }
            },
            tm: {
                translation: {
                    "turkmen": "Türkmen dili",
                    "english": "Iňlis dili",
                    "rus": "Rus dili",
                    "parents": "Ene-atalar",
                    "aboutus": "Biz Barada",
                    "teachers": "Terbiýeçiler",
                    "babies": "Körpeler",
                    "search": "Gözleg...",
                    "videos": "Wideolar",
                    "books": "Kitaplar",
                    "blogs": "Makalalar",
                    "tales": "Ertekiler",
                    "musics": "Audio ýazgylar",
                    "lessons": "Dersler",
                    "view": "görülen",
                    "name": "Ady",
                    "author": "Awtory",
                    "read": "Oka",
                    "copyright": "© 2024. Ähli hukuklar goralandyr.",
                    "all": "Hemmesi",
                    "top_read": "Iň köp okalanlar",
                }
            },
            ru: {
                translation: {
                    "turkmen": "Туркменский язык",
                    "english": "Английский язык",
                    "rus": "Русский язык",
                    "parents": "Родители",
                    "aboutus": "О Нас",
                    "teachers": "Педагоги",
                    "babies": "Младенцы",
                    "search": "Поиск...",
                    "videos": "Видео",
                    "books": "Книга",
                    "blogs": "Блоги",
                    "tales": "Сказки",
                    "musics": "Аудиозаписи",
                    "lessons": "Урок",
                    "view": "просмотръ",
                    "name": "Имя",
                    "author": "Автор",
                    "read": "Читать",
                    "copyright": "© 2024. Все права защищены.",
                    "all": "Все",
                    "top_read": "Iň köp okalanlar",
                }
            }

        },
        lng: "tm", // if you're using a language detector, do not define the lng option
        fallbackLng: "tm",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });