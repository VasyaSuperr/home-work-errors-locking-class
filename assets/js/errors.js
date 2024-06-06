console.log("Task 1");

function pow(base, exponent = 2) {
  if (typeof base !== "number" || !Number.isInteger(base)) {
    throw new TypeError("Основа (base) повинна бути цілим числом !!!");
  }
  if (typeof exponent !== "number" || !Number.isInteger(exponent)) {
    throw new TypeError("Показник (exponent) повинен бути цілим числом !!!");
  }
  if (exponent < 0) {
    throw new RangeError("Показник (exponent) повинен бути більше нуля !!!");
  }

  return base ** exponent;
}

try {
  console.log(`Результат: ${pow(5, 3)}`);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Помилка типу: ${error.message}`);
  } else if (error instanceof RangeError) {
    console.error(`Помилка діапазону: ${error.message}`);
  } else {
    console.error(`Інша помилка: ${error.message}`);
  }
}

function powRecursion(base, exponent = 2) {
  if (exponent === 0) {
    return 1;
  }

  if (typeof base !== "number" || !Number.isInteger(base)) {
    throw new TypeError("Основа (base) повинна бути цілим числом !!!");
  }
  if (typeof exponent !== "number" || !Number.isInteger(exponent)) {
    throw new TypeError("Показник (exponent) повинен бути цілим числом !!!");
  }
  if (exponent < 0) {
    throw new RangeError("Показник (exponent) повинен бути більше нуля !!!");
  }

  return base * powRecursion(base, exponent - 1);
}

try {
  console.log(`Результат: ${powRecursion(2, 3)}`);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Помилка типу: ${error.message}`);
  } else if (error instanceof RangeError) {
    console.error(`Помилка діапазону: ${error.message}`);
  } else {
    console.error(`Інша помилка: ${error.message}`);
  }
}

console.log("Task 2");
function validateEmail(email) {
  if (typeof email !== "string") {
    throw new TypeError("Email повинен бути рядком !!!");
  }
  if (email.indexOf("@") === -1) {
    throw new Error("Email повинен містити символ '@' !!!");
  }
  if (email[0] === "@" || email[email.length - 1] === "@") {
    throw new Error("Символ '@' не може бути на початку, або в кінці !!!");
  }

  let fl = 0;
  for (let i = 0; i < email.length; i++) {
    if (email.indexOf("@") != -1) {
      fl++;
    }
  }
  if (fl > 1) {
    throw new Error(
      "Символ '@' не може використовуватись більше одного разу !!!"
    );
  }

  return email;
}

try {
  console.log(`Результат: ${validateEmail("vasya200@gmail.com")}`);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Помилка типу: ${error.message}`);
  } else {
    console.error(`Інша помилка: ${error.message}`);
  }
}
