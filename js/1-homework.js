//* 1. Создайте в программе 3 ошибки:

//* 	SyntaxError

// console.log(;

//* 	ReferenceError

// console.log(ref);

//* 	TypeError

// let typeErr;
// console.log(typeErr.lenght);

// Что такое call stack?


//* 2. Укажите все значения NaN
// 	"2em" - 2 ++
// 	null + 3
// 	undefined + 10 ++
// 	true + false

//* 2.5. Укажите все значения NaN
// 	"1fr" + 2
// 	"1rem" - 2 ++
// 	3 * 4 * null
// 	"5px" / "3px" ++
// 	true + false


//* 3. Укажите все случаи для которых typeof === "number"
// 	" -9 " + 5
// 	"" - 1 + 0 ++
// 	"" + 1 + 0 // "10"
// 	"4" - 2 ++
// 	NaN ++
// 	Infinity ++




//* 4. Все случаи для которых typeof === "object"
// 	typeof null ++
// 	typeof alert
// 	typeof {} ++
// 	typeof [] ++


//* Задача 5. Укажите все значения для которых верно равенство Boolean(<значение>) === true 
// 	""
// 	" " ++
// 	"text" ++
// 	{} ++
// 	[] ++
// 	0
// 	10 ++
// 	null
// 	undefined
// 	[3, 7, 4] ++
// 	[1] ++
// 	[0] ++
// 	-infinity err


//* Задача 5.5. Укажите все значения для которых верно равенство Boolean(<значение>) === false
// 	null ++
// 	"" ++
// 	{}
// 	0 ++
// 	[1]
// 	[]
// 	" "
// 	1
// 	undefined ++
// 	[3, 7, 4]
// 	[0]
// 	[{}]
// 	{[]} err ?
// 	-1
// 	infinity err


//* 6. Укажите все значение для которых верно равенство === false
// 	"false"
// 	undefined
// 	null
// 	"0" 


//* 6.5 Укажите все значение для которых верно равенство == false
// 	"false"
// 	undefined
// 	null
// 	"0"  ++

//* 7. Чему будет равно значение выражения 1 + "3" + false + 22
// 	26
// 	"26"
// 	NaN
// 	"13false22" ++


//* 8. Чему будет равно значение выражения 1 - "3" + null + 22
// 	20 ++
// 	"-222"
// 	NaN
// 	"-2null22"


//* 9. Чему будет равно значение выражения 1 - "3" - null + "22"
// 	"NaN"
// 	"-222" +++
// 	NaN
// 	"2undefined22"
// 	20


//* 10. Реализуйте функцию defaultTo, которая принимает значение первым аргументом и его значение по-умолчанию вторым. (Функция просто принимает на вход 2 параметра) ??
// Если первое значение null, NaN или undefined, то должно быть возвращено значение по-умолчанию (второй аргумент). 
// Если нет, то нужно вернуть само значение (первый аргумент).
// Пример:
// console.log(defaultTo(3, 22)); // 3;
// console.log(defaultTo(undefined, 7)); // 7;

function defaultTo(a, b) {
  if (a === null || isNaN(a) || a === undefined) {
    console.log(b);
  } else {
    console.log(a);
  }
}
defaultTo(9, 8);