// Inspiration for this script taken from StackOverflow: https://stackoverflow.com/a/20197641/26566
const fs = require('fs');
const ts = require('typescript');
const path = require('path');

// const source = './01_items.ts';
//
// const sourceFile = ts.createSourceFile(process.argv[2], source, ts.ScriptTarget.Latest, true);

const comparisonResults = []

// Передаем код, чтобы получить у его AST
const codeOne = `
/**
 * @ignore
 * @packageDocumentation
 */
import { Widget } from './102_ui_widgets';
`;
const codeTwo = `
123
/**
 * @ignore
 * @packageDocumentation
 */
import { Widget } from './102_ui_widgets';
`;

let jsonOne = new Promise((resolve, reject) => {
  let res = getAST(codeOne)
  if (typeof res === 'string') {
    resolve(res)
  } else {
    reject('Ошибка в jsonOne')
  }
})

let jsonTwo = new Promise((resolve, reject) => {
  let res = getAST(codeTwo)
  if (typeof res === 'string') {
    resolve(res)
  } else {
    reject('Ошибка в jsonTwo')
  }
})

Promise.all([jsonOne, jsonTwo])
  .then(value => {
    const [jsonOne, jsonTwo] = value

    if (jsonOne !== jsonTwo) {
      recursion(jsonOne, jsonTwo)
    }
  })
  .catch(_ => console.log('Произошла ошибка!'))


function recursion(jsonOne, jsonTwo) {
  // setJson(jsonOne)
  if (jsonOne.fileName === jsonTwo.fileName) {
    getSortAST(jsonOne)
  } else {
    console.log('Структура файла разная')
  }
}

function getSortAST(el = el.statements) {

}


















// Получаем AST
function getAST(code) {
// filename сделать по имени файла
  const filename = 'temp.ts';
  const sourceFile = ts.createSourceFile(
    filename, code, ts.ScriptTarget.Latest
  );
// Добавляем идентификатор(id) к каждому узлу в дереве, чтобы его было легче идентифицировать
  let nextId = 0;

  function addId(node) {
    nextId++;
    node.id = nextId;
    ts.forEachChild(node, addId);
  }

  addId(sourceFile);

// Нет необходимости снова сохранять источник кода (code)
  delete sourceFile.text;

// копия текущего AST
  const cache = [];
  return JSON.stringify(sourceFile, (key, value) => {
    // Следующий код исключает элементы из объекта при преобразовании в JSON

    if (key === 'flags' || key === 'transformFlags' || key === 'modifierFlagsCache') {
      return;
    }

    // Замените «ребенка» строковым представлением.
    if (key === 'kind') {
      value = ts.SyntaxKind[value];
    }

    if (typeof value === 'object' && value !== null) {
      // Найден дубликат ссылки, удалить ключ
      if (cache.includes(value)) return;

      cache.push(value);
    }
    return value;
  });
}

// сохраняет различия в JSON файл
function setJson(json) {
  fs.writeFile(path.resolve(__dirname, 'ast-main.json'), json, function (error) {
    if (error) throw error;
    console.log("Запись файла завершена. Содержимое файла: находится ...");
  });
}
