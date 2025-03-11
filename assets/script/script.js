const birthdateInput = document.querySelector("#date");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
const errorMessage = document.querySelector("#error");

const calculateDaysToBirthday = () => {
  const birthdateInputValue = new Date(birthdateInput.value);
  const today = new Date();

  // Проверка была ли введена дата
  if (isNaN(birthdateInputValue.getTime())) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    errorMessage.textContent = "Пожалуйста, введите дату рождения.";
    result.style.display = "none";
  } else {
    errorMessage.style.display = "none";
    result.style.display = "block";
  }

  // Проверка был ли ДР в этом году.на случай если день рождения уже прошел
  if (birthdateInputValue <= today) {
    birthdateInputValue.setFullYear(today.getFullYear() + 1);
  }
  // Считаем разницу в днях. количество дней до др
  const daysUntilBirthday = Math.ceil(
    (birthdateInputValue - today) / (1000 * 60 * 60 * 24)
  );

  // Правильное склонение слова 'день'
  let dayWord;
  if (daysUntilBirthday % 10 === 1 && daysUntilBirthday % 100 !== 11) {
    dayWord = "день";
  } else if (
    daysUntilBirthday % 10 >= 2 &&
    daysUntilBirthday % 10 <= 4 &&
    (daysUntilBirthday % 100 < 10 || daysUntilBirthday % 100 >= 20)
  ) {
    dayWord = "дня";
  } else {
    dayWord = "дней";
  }

  result.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${dayWord}`;
};

button.addEventListener("click", calculateDaysToBirthday);
