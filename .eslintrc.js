module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'parser': 'babel-eslint',
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 2015,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [ 'error', 'tab'],
		'linebreak-style': [ 'error', 'windows' ],
		'quotes': [ 1, 'single' ],
		'semi': [ 'error', 'never' ],
		'no-unused-vars': [2, {
			'vars': 'local',
			'args': 'none'
		}],
		'no-multiple-empty-lines': [0, { 'max': 100 }],
		'no-mixed-spaces-and-tabs': [0],
		'no-console': 'off',
		'no-undef': 0,
		'no-trailing-spaces': 1,
		'camelcase': 2,
		'comma-dangle': [2, 'never'],
		'consistent-this': [2, 'that']
	}
}
