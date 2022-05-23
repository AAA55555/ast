import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";
import {type} from "os";
console.clear()
console.log('start')
// const {ts} = require("typescript")
// const fs = require("fs")
// const path = require("path")
// const serialize = require('serialize-to-js')

const filename = "ttt213.ts";
const code = `export interface ItemRef<I extends BaseItem<any>> extends RefItem {
    /**
     * Запрос цели ссылки
     */
    fetch(): Promise<I>;
}`;

const sourceFile = ts.createSourceFile(
    filename, code, ts.ScriptTarget.Latest
);
// console.log(sourceFile)
let objectAST: object = sourceFile
// console.log(str)

let arrayKeys: string[] = Object.keys(objectAST)
// console.log(arrayKeys)
type ObjectKey = keyof typeof objectAST;

const myVar = 'statements' as ObjectKey;
// console.log('myVar')
// console.log(myVar)
// console.log(objectAST[myVar]);
console.log('---')
console.log(ts.isVariableDeclaration)







fs.writeFile(path.resolve(__dirname, 'ast-main.json'), String(objectAST[myVar]['end']), function(error){

    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
});
// console.log('+++)))')
function printRecursiveFrom(
    node: ts.Node, indentLevel: number, sourceFile: ts.SourceFile
) {
    const indentation = "-".repeat(indentLevel);
    const syntaxKind = ts.SyntaxKind[node.kind];
    const nodeText = node.getText(sourceFile);

    console.log(syntaxKind)
    // console.log(`${indentation}${syntaxKind}: ${nodeText}`);

    node.getChildren(sourceFile).forEach(child =>
        printRecursiveFrom(child, indentLevel + 1, sourceFile)
    );
}

// printRecursiveFrom(sourceFile, 0, sourceFile);

// let array: string[] = ['name', 'text']
//
// const obj = {
//     name: 'Tom1',
//     text: 'Chile',
// };
//
// type ObjectKey = keyof typeof obj;
//
// const myVar = array[1] as ObjectKey;
// console.log(myVar)
// console.log(obj[myVar]);

