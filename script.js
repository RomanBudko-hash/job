const app = Vue.createApp({
  data() {
    return {
      selectedCity: "",
      selectedGuild: "-",
      selectedEmployee: "-",
      guilds: {
        saratov: ["Первый", "Пятый"],
        moscow: ["Второй", "Четвертый"],
        "st.petersburg": ["Третий"],
      },
      employees: {
        Первый: ["Ирина", "Майя", "Олег", "Владимир", "Александр"],
        Второй: ["Алексей", "Дмитрий"],
        Третий: ["Роман", "Марк", "Ева", "Петр", "Алишер"],
        Четвертый: ["Игорь", "Татьяна"],
        Пятый: ["Виталий", "Полина"],
      },
      crew: "",
    };
  },
  computed: {
    selectedShift() {
      const now = new Date();
      return now.getHours() >= 8 && now.getHours() < 20 ? "Первая" : "Вторая";
    },
  },
  watch: {
    selectedCity() {
      this.crew = this.selectedShift;
    },
    selectedShift() {
      this.crew = this.selectedShift;
    },
  },
});

app.mount("#app");
