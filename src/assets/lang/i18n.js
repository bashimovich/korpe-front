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
                    "aboutus": "About Us",
                    "teachers": "Educators",
                    "babies": "Babies",
                    "search": "Search...",
                    "videos": "Vidoes",
                    "books": "Books",
                    "blogs": "Blogs",
                    "tales": "Tales",
                    "musics": "Musics",
                    "lessons": "Lessons",
                    "view": "view",
                    "name": "Name",
                    "author": "Author",
                    "read": "Read",
                    "copyright": "© 2024. All rights reserved.",
                }
            },
            tm: {
                translation: {
                    "parents": "Ene-atalar",
                    "aboutus": "Biz Barada",
                    "teachers": "Terbiýeçiler",
                    "babies": "Körpeler",
                    "search": "Gözleg...",
                    "videos": "Wideolar",
                    "books": "Kitaplar",
                    "blogs": "Makalalar",
                    "tales": "Ertekiler",
                    "musics": "Aýdymlar",
                    "lessons": "Dersler",
                    "view": "görülen",
                    "name": "Ady",
                    "author": "Awtory",
                    "read": "Oka",
                    "copyright": "© 2024. Ähli hukuklar goralandyr.",
                }
            },
            ru: {
                translation: {
                    "parents": "Родители",
                    "aboutus": "О Нас",
                    "teachers": "Педагоги",
                    "babies": "Младенцы",
                    "search": "Поиск...",
                    "videos": "Видео",
                    "books": "Книга",
                    "blogs": "Блоги",
                    "tales": "Сказки",
                    "musics": "Музыка",
                    "lessons": "Урок",
                    "view": "просмотръ",
                    "name": "Имя",
                    "author": "Автор",
                    "read": "Читать",
                    "copyright": "© 2024. Все права защищены.",
                }
            }

        },
        lng: "tm", // if you're using a language detector, do not define the lng option
        fallbackLng: "tm",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });