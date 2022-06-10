const {TypescriptParser} = require('typescript-parser')
const parser = new TypescriptParser();
const fs = require("fs");
const path = require('path')
// either:
const parsed1 = parser.parseSource(`/**
 * # Ссылка на объект истории изменения статусов
 */
export interface StatusHistoryItemRef<T extends ItemData, P extends ItemData> extends ItemRef<StatusHistoryItem<T, P>> {
    /**
     * @ignore
     */
    readonly kind: 'statushistory123';
}`);
// console.log(parsed)

// or a filepath
const parsed2 = parser.parseFile('01_items.ts', 'workspace root');

parsed1.then(data => {
  fs.writeFile(path.resolve(__dirname, 'ast-test.json'), JSON.stringify(data), function (error) {

    if (error) throw error; // если возникла ошибка
    // console.log("Асинхронная запись файла завершена. Содержимое файла:");
  });
})

// console.log(path.resolve(__dirname) + '01_items.ts')

// выводит, но сильно в упрощенном виде, не выводит комментарии
