// Inspiration for this script taken from StackOverflow: https://stackoverflow.com/a/20197641/26566
const fs = require('fs');
const ts = require('typescript');
const process = require('process');
const path = require('path');

// const source = './01_items.ts';
//
// const sourceFile = ts.createSourceFile(process.argv[2], source, ts.ScriptTarget.Latest, true);
const filename = "ttt213.ts";
const code = `
/**
 * @ignore
 * @packageDocumentation
 */

/**
 * @ignore
 */
import { Widget } from './102_ui_widgets';

/**
 * # Корневой объект API для клиентских скриптов.
 */
export interface UI {
    /**
     * Доступ к API отображения виджетов (применяется для виджета «Код»)
     */
    widget: Widget;
    let elem = '444'
}

`;

const sourceFile = ts.createSourceFile(
  filename, code, ts.ScriptTarget.Latest
);
// Add an ID to every node in the tree to make it easier to identify in
// the consuming application.
let nextId = 0;
function addId(node) {
  nextId++;
  node.id = nextId;
  ts.forEachChild(node, addId);
}
addId(sourceFile);

// No need to save the source again.
delete sourceFile.text;

const cache = [];
const json = JSON.stringify(sourceFile, (key, value) => {
  // Discard the following.
console.log(key)

  if (key === 'flags' || key === 'transformFlags' || key === 'modifierFlagsCache') {
    return;
  }

  // Replace 'kind' with the string representation.
  if (key === 'kind') {
    value = ts.SyntaxKind[value];
  }

  if (typeof value === 'object' && value !== null) {
    // Duplicate reference found, discard key
    if (cache.includes(value)) return;

    cache.push(value);
  }
  return value;
});

// console.info(json);

// console.log(cache)
setTimeout(() => {
  // console.log(json)
  setJson()
}, 500)

function setJson() {
  fs.writeFile(path.resolve(__dirname, 'ast-main.json'), json, function(error){

    if(error) throw error; // если возникла ошибка
    // console.log("Асинхронная запись файла завершена. Содержимое файла:");
  });

  // console.log('objCurrentAST', objCurrentAST)
}
