import { createI18n } from "vue-i18n";

// call with I18n option
const i18n = createI18n({
  locale: "pl",
  legacy: false,
  messages: {
    pl: {
      nav: {
        home: "Głowna",
        about: "O nas",
        messages: "Wiadomości",
        profile: "Profil",
        events: "Wydarzenia",
        search: "Szukaj",
      },
      dashboard: {
        dashboard: "Tablica",
        meetings: "Spotkania",
        cnmeeting: "Utwórz nowe spotkanie",
        tasks: "Zadania",
        users: "Użytkownicy",
        groups: "Grupy",
        events: "Wydarzenia",
        messages: "Wiadomości",
      },
      home: {
        header: "Witaj w SRS!",
      },
      about: {
        header: "O nas",
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
      },
      home: {
        header: "Welcome to the Vue 3 I18n tutorial!",
      },
      about: {
        header: "About us",
      },
    },
  },
});

export default i18n;
