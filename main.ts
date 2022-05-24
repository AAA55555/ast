import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";
import {log} from "util";

console.clear()
console.log('start')

const filename = "ttt213.ts";
const code = `function test(num) {
\tlet ttt = '555'
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
// console.log(Array.isArray(objectAST[myVar]) );
// console.log('---')
// console.log(ts.isVariableDeclaration)
let i: any = sourceFile['statements'][0]
let n: any = ts.SyntaxKind[i.kind]
// console.log(n)

let json: any = {}

interface Obj {
    any: any
}

// AST текущего и предыдущего файла
const objCurrentAST: any = {}
const objPreviousAST: any = {}
let tempVariableCur: any = ''
let tempVariablePrev: any = ''
let tempNameCur: any = ''
let tempNamePrev: any = ''
let idxCur: number

function printRecursiveFrom(
    node: ts.Node, indentLevel: number, sourceFile: ts.SourceFile
) {
    const indentation = "-".repeat(indentLevel);
    // console.log(node.kind)
    const syntaxKind = ts.SyntaxKind[node.kind];
    const nodeText = node.getText(sourceFile);

    // console.log(indentLevel)
    // console.log(node)
    console.log(`${indentation}${syntaxKind}: ${nodeText}`);
    // json[syntaxKind] = `${nodeText} + ${node.getStart(sourceFile)}`
    // console.log(node.getChildren(sourceFile))
    // json[indentLevel] = `${syntaxKind} + ${nodeText}`
    // console.log(syntaxKind)
    // console.log(node.getChildren(sourceFile))
    console.log(objCurrentAST)
    if (indentLevel === 0) {
        tempNameCur = syntaxKind
        objCurrentAST[nodeText] = {}
        idxCur = indentLevel
    } else {
        let syn: string = 'syntaxKind'
        objCurrentAST[tempNameCur][syn] = 'ttt'
    }
    // console.log(node.getChildren(sourceFile))
    node.getChildren(sourceFile).forEach(child =>
        printRecursiveFrom(child, indentLevel + 1, sourceFile)
    );
}

printRecursiveFrom(sourceFile, 0, sourceFile);

setTimeout(() => {
    // console.log(json)
    setJson()
}, 500)

function setJson(): void {
    fs.writeFile(path.resolve(__dirname, 'ast-main.json'), JSON.stringify(json), function(error){

        if(error) throw error; // если возникла ошибка
        // console.log("Асинхронная запись файла завершена. Содержимое файла:");
    });

    console.log('objCurrentAST', objCurrentAST)
}








`
SourceFile
SyntaxList
FirstStatement
VariableDeclarationList
ConstKeyword
SyntaxList
VariableDeclaration
Identifier
FirstAssignment
StringLiteral
EndOfFileToken
`

