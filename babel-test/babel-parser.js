import { transform } from 'babel-core'
import { toEstree } from 'babel-to-estree'
// import myPlugin from  './my-babel-plugin'

const source = 'let el: string = "test"'

const { ast, code } = transform(source, { plugins: [] })

// mutates `ast` input
toEstree (ast, source);

// contains Literal, not StringLiteral
console.log(ast.body[0].expression.arguments[0])

// Node {
// type: 'Literal',
// start: 5,
// end: 11,
// loc: SourceLocation {
// start: Position { line: 1, column: 5 },
// end: Position { line: 1, column: 11 } },
// extra: { rawValue: 'here', raw: '"here"' },
// value: 'here',
// range: [ 5, 11 ],
// _babelType: 'StringLiteral',
// raw: '"here"'
// }
