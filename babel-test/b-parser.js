// import { parse } from '@babel/parser';
// import traverse from '@babel/traverse';
// import generate from '@babel/generator';
const {parse, parseExpression} = require('@babel/parser')
const code = `
/**
 * # Участник листа согласования/ознакомления
 */
export interface Respondent {
    /**
     * ID
     *
     * @var id string
     */
    readonly id: string;
    /**
     * @deprecated
     *
     * Имя участника
     *
     * @var name string
     */
    readonly name: string;
    /**
     * Решение участника (статус)
     *
     * @var status DocflowListStatus
     */
    readonly status: DocflowListStatus;
    /**
     * Тип листа
     *
     * @var listType DocflowListType
     */
    readonly listType: DocflowListType;
    /**
     * Комментарий к решению (отказу)
     *
     * @var comment string
     */
    readonly comment: string;
    /**
     * Дата последнего обновления
     *
     * @var ts TDatetime
     */
    readonly ts: TDatetime;
}
`;

// парсим код в ast
// const ast = parse(code);
// const ast = babelParser.parseExpression(code)

const ast = require("@babel/parser").parse(code, {
  // parse in strict mode and allow module declarations

  plugins: [
    // enable jsx and flow syntax
    "flow",
  ],
});

console.log(ast)

