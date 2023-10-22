const start = () => {
  const allSelectFields = ["city", "guild", "employee", "crew"];
  const [city, guild, employee, crew] = allSelectFields.map((el) =>
    document.querySelector(`.${el}`)
  );
  const now = new Date();
  const guilds = {
    saratov: ["Первый", "Пятый"],
    moscow: ["Второй", "Четвертый"],
    "st.peterburg": ["Третий"],
  };
  const employees = {
    Первый: ["Ирина", "Майя", "Олег", "Владимир", "Александр"],
    Второй: ["Алексей", "Дмитрий"],
    Третий: ["Роман", "Марк", "Ева", "Петр", "Алишер"],
    Четвертый: ["Игорь", "Татьяна"],
    Пятый: ["Виталий", "Полина"],
  };
  const select = function (options, mainSelect, arrBound) {
    options.innerHTML = "";
    let g = mainSelect.value,
      o;
    for (let i = 0; i < arrBound[g].length; i++) {
      o = new Option(arrBound[g][i], arrBound[g][i], false, false);
      options.add(o);
    }
  };
  city.addEventListener("change", (e) => {
    select(guild, city, guilds);
    employee.innerHTML = "";
  });
  guild.addEventListener("change", (e) => {
    select(employee, guild, employees);
  });
  now.getHours() > 8 && now.getHours() < 20
    ? (crew.innerHTML = "Первая")
    : (crew.innerHTML = "Вторая");
};
start();
