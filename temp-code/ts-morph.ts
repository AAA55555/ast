import { Project, node } from "ts-morph";
import * as ts from "typescript"

const allChildren = node.getChildren();

node.forEachChild(node => {
    console.log(node.getText());
});

const classDec = node.forEachChild(node => {
    if (Node.isClassDeclaration(node))
        return node; // stops iterating over the children and returns this value
    return undefined; // return a falsy value or no value to continue iterating
});
