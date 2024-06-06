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
  const result = pow(5, 3);
  console.log(`Результат: ${result}`);
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
  const resultRecursion = powRecursion(2, 3);
  console.log(`Результат: ${resultRecursion}`);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Помилка типу: ${error.message}`);
  } else if (error instanceof RangeError) {
    console.error(`Помилка діапазону: ${error.message}`);
  } else {
    console.error(`Інша помилка: ${error.message}`);
  }
}
