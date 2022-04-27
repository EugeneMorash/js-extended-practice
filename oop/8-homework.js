//* 1. Создать класс фигуры
// Он имеет только одно свойство id (любое число, которое задаёт пользователь).

// Создать 3 наследника:
// - Прямоугольник наследует класс фигуры
// --- Квадрат наследует класс прямоугольник

// - Окружность наследует класс фигуры

// В классе прямоугольник, квадрат и окружность есть свойство name, которое хранит название фигуры.
// А также стороны, которые позволяют расчитать площадь фигуры, которые задаёт пользователь при создании объекта
// Если пользователь не задал, то сделать параметры по умолчанию.
// (Окружность - радиус)
// (Прямоугольник - 2 стороны)
// (Квадрат - 1 сторона)

// В классе прямоугольник и окружность реализовать метод calcSquare, который расчитывает площадь фигуры.

// Метод должен работать и для класса квадрат. Но метод должен быть только в классе прямоугольник и окружность.


// Создать 3 объекта разных классов: прямоугольник, квадрат и окружность.
// Вызвать метод расчитать площадь для каждой из фигур.



//* 2. Calc
// Реализовать класс Calc с методами sub / add / result

// В конструкторе можем передать начальное иммутабельное значение (по умолчанию - 0), потом методами add и sum прибавлять и вычитать из него.
// Вызов add/sub можно объединять в цепочку (fluent interface) - методы возвращают новый объект класса.
// По вызову result() получаем результат вычислений.

// Пример использования:

// const calc = new Calc();
// calc.result(); // 0
// calc.add(5).result(); // 0 + 5 = 5
// calc.add(3).sub(10).result(); // 0 + 3 - 10 = -7 // (fluent interface)

// const ten = calc.add(10);
// ten.sub(5).result(); // 10 - 5 = 5
// ten.result(); // 10

// ✓ должен возвращать экземпляр класса Calc в методах add/sub
// ✓ должен корректно реализовывать математически операции
// ✓ должен реализовывать fluent interface
// ✓ должен обеспечить иммутабельность экземпляров класса