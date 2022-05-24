import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";
import {log} from "util";
console.clear()
console.log('start')

const filename = "ttt213.ts";
const code = `const i = 'num'`;

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

// console.log('+++)))')
function printRecursiveFrom(
    node: ts.Node, indentLevel: number, sourceFile: ts.SourceFile
) {
    const indentation = "-".repeat(indentLevel);
    const syntaxKind = ts.SyntaxKind[node.kind];
    const nodeText = node.getText(sourceFile);

    // console.log(syntaxKind)
    // console.log(`${indentation}${syntaxKind}: ${nodeText}`);
    // json[syntaxKind] = `${nodeText} + ${node.getStart(sourceFile)}`
    // console.log(node.getChildren(sourceFile))
    // json[indentLevel] = `${syntaxKind} + ${nodeText}`
    // console.log(syntaxKind)
    if (0 === indentLevel) {

    }
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
        console.log("Асинхронная запись файла завершена. Содержимое файла:");
    });
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
