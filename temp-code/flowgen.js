const {compiler} = require('flowgen')

// To compile a d.ts file
const flowdef = compiler.compileDefinitionFile('01_items.ts');
console.log(flowdef)


// выводит данные, но нет подробностей и не подходит для нас
