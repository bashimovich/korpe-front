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
                    "teachers": "Teachers",
                    "babies": "Babies",
                    "search": "Search...",
                }
            },
            tm: {
                translation: {
                    "parents": "Ene-atalar",
                    "aboutus": "Biz Barada",
                    "teachers": "Mugallymlar",
                    "babies": "Körpeler",
                    "search": "Gözleg...",
                }
            },
            ru: {
                translation: {
                    "parents": "Родители",
                    "aboutus": "О Нас",
                    "teachers": "Учителя",
                    "babies": "Младенцы",
                    "search": "Поиск...",
                }
            }

        },
        lng: "tm", // if you're using a language detector, do not define the lng option
        fallbackLng: "tm",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });