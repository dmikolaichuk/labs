// Лабораторна робота №4 — Робота з функціями у JavaScript
// Результати дивіться у Developer Tools → Console.
// Залиште лише свій варіант (непарний номер у журналі — Варіант 1, парний — Варіант 2).

// ======================= ВАРІАНТ 1 =======================
(function variant1() {
  console.log("===== Варіант 1 =====");

  // Завдання 1: іменована функція — сума чисел від 1 до n
  function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log("Завдання 1: calculateSum(10) =", calculateSum(10)); // 55

  // Завдання 2: функціональний вираз — добуток двох чисел
  const multiply = function (a, b) {
    return a * b;
  };
  console.log("Завдання 2: multiply(6, 7) =", multiply(6, 7)); // 42

  // Завдання 3: стрілкова функція — піднесення a до степеня b
  const power = (a, b) => a ** b;
  console.log("Завдання 3: power(2, 10) =", power(2, 10)); // 1024

  // Завдання 4: рекурсія — гармонічний ряд H(n) = 1 + 1/2 + ... + 1/n
  function harmonicSeries(n) {
    if (n <= 1) {
      return 1; // базовий випадок
    }
    return 1 / n + harmonicSeries(n - 1); // рекурсивний виклик
  }
  console.log("Завдання 4: harmonicSeries(5) =", harmonicSeries(5)); // 2.2833...

  // Завдання 5: замикання — створення множника
  function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  console.log("Завдання 5: double(5) =", double(5), "; triple(5) =", triple(5)); // 10; 15

  // Завдання 6: функція, що приймає функцію (колбек)
  function applyFunction(value, func) {
    return func(value);
  }
  console.log("Завдання 6: подвоєння 7 =", applyFunction(7, (x) => x * 2)); // 14
  console.log("Завдання 6: квадрат 7 =", applyFunction(7, (x) => x * x)); // 49

  // Завдання 7*: застосування колбека до всіх елементів Set
  function processSet(set, callback) {
    const result = new Set();
    set.forEach((item) => result.add(callback(item)));
    return result;
  }
  const numbers = new Set([1, 2, 3, 4]);
  console.log("Завдання 7*: processSet(x * 10) =", processSet(numbers, (x) => x * 10)); // Set {10, 20, 30, 40}
})();

// ======================= ВАРІАНТ 2 =======================
(function variant2() {
  console.log("===== Варіант 2 =====");

  // Завдання 1: найбільше з двох чисел
  function findMax(a, b) {
    return a > b ? a : b;
  }
  console.log("Завдання 1: findMax(8, 15) =", findMax(8, 15)); // 15

  // Завдання 2: функціональний вираз — віднімання
  const subtract = function (a, b) {
    return a - b;
  };
  console.log("Завдання 2: subtract(10, 4) =", subtract(10, 4)); // 6

  // Завдання 3: стрілкова функція — квадратний корінь
  const sqrt = (n) => Math.sqrt(n);
  console.log("Завдання 3: sqrt(144) =", sqrt(144)); // 12

  // Завдання 4: рекурсія — сума перших n членів геометричної прогресії
  // S(n) = a * (1 - r^n) / (1 - r) = a + a*r + ... + a*r^(n-1)
  function geometricProgression(n, a, r) {
    if (n <= 0) {
      return 0; // базовий випадок
    }
    return a * r ** (n - 1) + geometricProgression(n - 1, a, r); // рекурсивний виклик
  }
  console.log("Завдання 4: geometricProgression(5, 2, 3) =", geometricProgression(5, 2, 3)); // 242
  console.log("Перевірка за формулою:", 2 * (1 - 3 ** 5) / (1 - 3)); // 242

  // Завдання 5: замикання — створення дільника
  function createDivider(divisor) {
    return function (number) {
      return number / divisor;
    };
  }
  const half = createDivider(2);
  const third = createDivider(3);
  console.log("Завдання 5: half(10) =", half(10), "; third(9) =", third(9)); // 5; 3

  // Завдання 6: функція приймає два числа і функцію для їх обробки
  function applyOperation(a, b, func) {
    return func(a, b);
  }
  console.log("Завдання 6: додавання 5 і 3 =", applyOperation(5, 3, (x, y) => x + y)); // 8
  console.log("Завдання 6: множення 5 і 3 =", applyOperation(5, 3, (x, y) => x * y)); // 15

  // Завдання 7*: застосування колбека до всіх елементів Set
  function processSet(set, callback) {
    const result = new Set();
    set.forEach((item) => result.add(callback(item)));
    return result;
  }
  const numbers = new Set([1, 2, 3, 4]);
  console.log("Завдання 7*: processSet(x * 10) =", processSet(numbers, (x) => x * 10)); // Set {10, 20, 30, 40}
})();
