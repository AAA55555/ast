const { parse, find } = require('abstract-syntax-tree')
const source = `
/**
 * # Ссылка на объект истории изменения статусов
 */
export interface StatusHistoryItemRef<T extends ItemData, P extends ItemData> extends ItemRef<StatusHistoryItem<T, P>> {
    /**
     * @ignore
     */
    readonly kind: 'statushistory';
}

`
const tree = parse(source, {
  loc: true,
  ranges: true
})
// console.log(tree.body[0].declarations[0]['id']) // { type: 'Program', body: [ ... ], loc: {...} }
console.log(tree) // { type: 'Program', body: [ ... ], loc: {...} }

// не работает с typescript, падает ошибка, что не известно 'Unexpected token: \'interface\''
