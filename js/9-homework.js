//* 1. Напишите функцию, которая создает объект, состоящий из инвертированных ключей и значений объекта.

// Если объект содержит повторяющиеся значения, последующие значения перезаписывают присвоения свойств предыдущих значений.

// Пример:

// invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }

// `__________________________________________________________`

function invert(obj) {
  const copyObj = { ...obj };
  const values = Object.entries(copyObj);
  values.forEach(arr => arr.reverse());
  return Object.fromEntries(values);
}
// console.log(invert({ a: 1, b: 2, c: 3 }));


//* 2. (рекурсия) Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.

// Два объекта считаются равными, если у них все свойства одинаковы. В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму. 

// Пример:

const firstObject = {
  a: {
    b: {
      c: 1,
      d: 'string',
      e: {
        num: 1
      }
    }
  }
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      },
      d: 'string',
      c: 1,
    }
  }
};

// deepEqual(firstObject, secondObject); // true
const res = deepEqual({ a: 1, b: 3, c: { d: 2, c: 3 }, p: 1 }, { b: 3, c: { d: 2, c: 3 }, a: 1, p: 1 }); // false
console.log(res);
// deepEqual(1, 2); // false
// deepEqual(true, false); // false

// !
//! for (const key in firstObject.a.b) {
//   if (firstObject.a.b[key] === secondObject.a.b[key])
// }


function deepEqual(obj1, obj2) {
  if (JSON.stringify(obj1).length !== JSON.stringify(obj2).length) {
    return false;
  }
  return (function deepEqualEntry(obj1, obj2) {
    for (const key in obj1) {
      if (obj1[key] !== null && typeof obj1[key] === "object") {

        if (!obj2.hasOwnProperty(key)) {
          return false;
        }

        if (!deepEqualEntry(obj1[key], obj2[key])) {
          return false;
        }

      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  })(obj1, obj2);

}
console.log(deepEqual(2, 1));


// * 8 типов * //
// null (typoef null === object)
// undefined

// number
// string
// boolean

// object 
// [array, object, function (typoef fun(){} === function), nodelist, htmlCollection]
// [map, set, date, weekmap, weekset, error, syntaxerror ...]


// bigint
// symbol




// function deepEqual(obj1, obj2) {
//   let middleArray = [];
//   function objObj(obj) {
//     for (const key in obj) {
//       middleArray.push([key, typeof obj[key]]);
//       if (typeof obj[key] === "object") {
//         objObj(obj[key])
//       }
//     }
//     // console.log(middleArray);
//     return JSON.stringify(middleArray.sort());
//   }
//   const firstJson = objObj(obj1);
//   console.log(firstJson);
//   middleArray = [];
//   const secondJson = objObj(obj2);
//   console.log(secondJson);
//   return firstJson === secondJson;
// }
// console.log(deepEqual(firstObject, secondObject));
// console.log(deepEqual(1, 1));
// console.log(deepEqual({ a: 1, b: 3 }, { b: 2, a: 1 }));
// console.log(deepEqual(1, 2));
// console.log(deepEqual(true, false));
//FIXME  console.log(deepEqual(null, null));

// Дополнительные проверки

// Сравнение примитивных типов
// ✓ Сравнение одинаковых примитивных значений должно быть равным 
// ✓ Сравнение разных примитивных значений не должно быть равным 
// ✓ Сравнение 0 и false не должно быть равным 
// Сравнение с null
// ✓ Сравнение двух null должно быть равным 
// ✓ Сравнение null с числом не должно быть равным 
// ✓ Сравнение объекта с null не должно быть равным
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20}};
//     - b = null
// ✓ Объект и его копия, расширенная дополнительным свойством со значением null, не должны быть равными
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20}};
//     - b = {"name":"Misha","order":{"price":20},"extraField":null} 
// Сравнение вложенных объектов
// ✓ Вложенные объекты с одинакоыми свойствами, но в разном порядке, должны быть равными
//     Входные параметры функции:
//     - a = {"test":{"name":"Misha","order":{"price":20}}};
//     - b = {"test":{"order":{"price":20},"name":"Misha"}} 
// ✓ Объект и его копия, с изменённым вложенным свойством, не должны быть равными
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20}};
//     - b = {"name":"Misha","order":{"price":1000}} 
// ✓ Объект и его копия, с дополнительным свойством со значением null во вложенном объекте, не должны быть равными
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20}};
//     - b = {"name":"Misha","order":{"price":20,"extraField":null}}
// Сравнение объектов
// ✓ Объекты с одинаковыми свойствами, но разным порядком, должны быть равными
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20}};
//     - b = {"order":{"price":20},"name":"Misha"} 
// ✓ Объект и его копия, с изменённым свойством, не должны быть равными
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20}};
//     - b = {"order":{"price":20},"name":"Petya"} 
// Сравнение объектов с глубокой вложенностью
// ✓ Объект с глубокой вложенностью и его копия, с дополнительным свойством в значении null, не должны быть равными
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11}}}}};
//     - b = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11,"eur":null}}}}}
// ✓ Объект с глубокой вложенностью и его копия, со свойствами в другом порядке, должны быть равными
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11}}}}};
//     - b = {"name":"Misha","order":{"count":1,"price":20,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withTaxes":{"vat":{"uah":30,"usd":1.11}},"withoutTaxes":{"usd":0.74,"uah":20}}}} 
// ✓ Объект с глубокой вложенностью и его копия, с изменённым свойством, не должны быть равными
//     Входные параметры функции:
//     - a = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11}}}}};
//     - b = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":575},"withTaxes":{"vat":{"uah":30,"usd":1.11,"eur":null}}}}}
// В случае, когда объекты ссылаются друг на друга, функция должна продолжать работать до переполнения call stack
// ✓ Использовать рекурсию
