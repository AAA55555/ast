import * as ts from "ntypescript";

function printAllChildren(node: ts.Node, depth = 0) {
    console.log(new Array(depth + 1).join('-'), ts.formatSyntaxKind(node.kind), node.getText());
    // console.log(node)
    // console.log('ts.formatSyntaxKind(node.kind)', ts.formatSyntaxKind(node.kind))
    depth++;
    // console.log(ts.formatSyntaxKind(288))
    node.getChildren().forEach(c=> printAllChildren(c, depth));
}

var sourceCode = `
 export interface StatusHistoryItemRef<T extends ItemData, P extends ItemData> extends ItemRef<StatusHistoryItem<T, P>> {
    /**
     * @ignore
     */
    readonly kind: 'statushistory';
}

`.trim();

var sourceFile = ts.createSourceFile('foo.ts', sourceCode, ts.ScriptTarget.ES5, true);
printAllChildren(sourceFile);

