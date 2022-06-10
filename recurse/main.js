const items = [
	{
		"pos": 0,
		"end": 87,
		"kind": "ImportDeclaration",
		"importClause": {
			"pos": 51,
			"end": 62,
			"kind": "ImportClause",
			"isTypeOnly": false,
			"namedBindings": {
				"pos": 51,
				"end": 62,
				"kind": "NamedImports",
				"elements": [
					{
						"pos": 53,
						"end": 60,
						"kind": "ImportSpecifier",
						"isTypeOnly": false,
						"name": {
							"pos": 53,
							"end": 60,
							"kind": "Identifier",
							"escapedText": "Widget",
							"id": 6
						},
						"id": 5
					}
				],
				"id": 4
			},
			"id": 3
		},
		"moduleSpecifier": {
			"pos": 67,
			"end": 86,
			"kind": "StringLiteral",
			"text": "./102_ui_widgets",
			"hasExtendedUnicodeEscape": false,
			"id": 7
		},
		"jsDoc": [
			{
				"pos": 1,
				"end": 44,
				"kind": "JSDocComment",
				"tags": [
					{
						"pos": 8,
						"end": 19,
						"kind": "FirstJSDocTagNode",
						"tagName": {
							"pos": 9,
							"end": 15,
							"kind": "Identifier",
							"escapedText": "ignore"
						}
					},
					{
						"pos": 19,
						"end": 42,
						"kind": "FirstJSDocTagNode",
						"tagName": {
							"pos": 20,
							"end": 40,
							"kind": "Identifier",
							"escapedText": "packageDocumentation"
						}
					}
				]
			}
		],
		"id": 2
	},
	{
		"pos": 0,
		"end": 87,
		"kind": "ImportDeclaration",
		"importClause": {
			"pos": 51,
			"end": 62,
			"kind": "ImportClause",
			"isTypeOnly": false,
			"namedBindings": {
				"pos": 51,
				"end": 62,
				"kind": "NamedImports",
				"elements": [
					{
						"pos": 53,
						"end": 60,
						"kind": "ImportSpecifier",
						"isTypeOnly": false,
						"name": {
							"pos": 53,
							"end": 60,
							"kind": "Identifier",
							"escapedText": "Widget",
							"id": 6
						},
						"id": 5
					}
				],
				"id": 4
			},
			"id": 3
		},
		"moduleSpecifier": {
			"pos": 67,
			"end": 86,
			"kind": "StringLiteral",
			"text123": ".123",
			"hasExtendedUnicodeEscape123": true,
			"id": 7
		},
		"id": 3
	}
]

const ids = []

function getIds(items) {
	for (let i = 0; i < items.length; i++) {
		for (let el in items[i]) {
			// console.log(el);
			if (typeof items[i][el] === 'object' && Array.isArray(items[i][el]) !== true && el === 'moduleSpecifier') {
				// console.log(el);
				for (let e in items[i][el]) {
					console.log(e);
				}
			}
			// const _item = items[i]
			// ids.push(_item.id)
			// console.log('_item ', _item);
			// console.log('_item.items ', _item.items);
			// _item.items && getIds(_item.items)
		}
	}
}

getIds(items)
console.log(ids);