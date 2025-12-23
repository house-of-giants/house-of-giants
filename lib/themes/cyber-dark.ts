/**
 * Custom Shiki theme matching House of Giants cyber aesthetic
 * Colors converted from OKLCH to hex for Shiki compatibility
 * Format follows VS Code/TextMate theme specification
 *
 * Brand Colors Reference:
 * - Primary (Cyber Green): oklch(0.85 0.22 170) → #7dd87d
 * - Accent (Lime): oklch(0.9 0.25 115) → #a5e887
 * - Destructive (Pink): oklch(0.65 0.28 15) → #e57373
 * - Foreground: oklch(0.95 0 0) → #f2f2f2
 * - Muted: oklch(0.65 0.01 260) → #8b9cad
 */

export const cyberDarkTheme = {
	name: 'cyber-dark',
	type: 'dark' as const,
	colors: {
		'editor.background': '#131620',
		'editor.foreground': '#e8e8e8',
		'editorLineNumber.foreground': '#4a5568',
		'editorLineNumber.activeForeground': '#8b9cad',
		'editor.selectionBackground': '#1f2937',
		'editor.lineHighlightBackground': '#1a1f2e',
		'editorCursor.foreground': '#7dd87d',
		'editorBracketMatch.background': '#1f2937',
		'editorBracketMatch.border': '#7dd87d',
	},
	settings: [
		// Default text colors
		{
			settings: {
				background: '#131620',
				foreground: '#e8e8e8',
			},
		},
		// Comments - muted and italic
		{
			scope: ['comment', 'punctuation.definition.comment', 'comment.block', 'comment.line'],
			settings: {
				foreground: '#6b7c8f',
				fontStyle: 'italic',
			},
		},
		// Strings - accent lime green
		{
			scope: ['string', 'string.quoted', 'string.quoted.single', 'string.quoted.double', 'string.template'],
			settings: {
				foreground: '#a5e887',
			},
		},
		// Regular expressions - pink/destructive
		{
			scope: ['string.regexp'],
			settings: {
				foreground: '#ff8a8a',
			},
		},
		// Keywords - cyber green primary, bold
		{
			scope: [
				'keyword',
				'keyword.control',
				'keyword.operator.new',
				'keyword.operator.expression',
				'keyword.operator.logical',
				'keyword.operator.delete',
				'keyword.operator.typeof',
				'keyword.operator.void',
				'keyword.operator.instanceof',
				'storage.type',
				'storage.modifier',
			],
			settings: {
				foreground: '#7dd87d',
				fontStyle: 'bold',
			},
		},
		// Functions - bright lime
		{
			scope: [
				'entity.name.function',
				'entity.name.method',
				'meta.function-call',
				'support.function',
			],
			settings: {
				foreground: '#b8f089',
			},
		},
		// Classes and types - cyber green
		{
			scope: [
				'entity.name.class',
				'entity.name.type',
				'entity.other.inherited-class',
				'support.type',
				'support.class',
				'entity.name.type.class',
			],
			settings: {
				foreground: '#7dd87d',
			},
		},
		// Variables - light foreground
		{
			scope: [
				'variable',
				'variable.other',
				'variable.parameter',
				'variable.other.readwrite',
				'meta.definition.variable',
			],
			settings: {
				foreground: '#e8e8e8',
			},
		},
		// Object properties - slightly muted
		{
			scope: [
				'variable.other.property',
				'variable.other.object.property',
				'meta.object-literal.key',
				'support.type.property-name',
			],
			settings: {
				foreground: '#c5d4e3',
			},
		},
		// Constants and numbers - cyber green
		{
			scope: [
				'constant.numeric',
				'constant.language',
				'constant.language.boolean',
				'constant.other',
				'support.constant',
			],
			settings: {
				foreground: '#7dd87d',
			},
		},
		// Escape characters - pink accent
		{
			scope: ['constant.character.escape', 'string.escape'],
			settings: {
				foreground: '#ff8a8a',
			},
		},
		// HTML/JSX tags - cyber green
		{
			scope: ['entity.name.tag', 'support.tag', 'tag.open', 'tag.close'],
			settings: {
				foreground: '#7dd87d',
			},
		},
		// HTML/JSX attributes - lime accent
		{
			scope: ['entity.other.attribute-name'],
			settings: {
				foreground: '#a5e887',
			},
		},
		// Punctuation and brackets - subtle gray
		{
			scope: [
				'punctuation',
				'punctuation.definition',
				'punctuation.separator',
				'punctuation.terminator',
				'meta.brace',
				'meta.delimiter',
			],
			settings: {
				foreground: '#8b9cad',
			},
		},
		// Operators - muted cyan-ish
		{
			scope: [
				'keyword.operator',
				'keyword.operator.assignment',
				'keyword.operator.arithmetic',
				'keyword.operator.comparison',
			],
			settings: {
				foreground: '#9ec8e0',
			},
		},
		// Import/export - cyber green
		{
			scope: [
				'keyword.control.import',
				'keyword.control.export',
				'keyword.control.from',
				'keyword.control.as',
			],
			settings: {
				foreground: '#7dd87d',
				fontStyle: 'bold',
			},
		},
		// Module names in imports
		{
			scope: ['string.quoted.module', 'meta.import string'],
			settings: {
				foreground: '#a5e887',
			},
		},
		// Invalid code - red with underline
		{
			scope: ['invalid', 'invalid.illegal'],
			settings: {
				foreground: '#ff6b6b',
				fontStyle: 'underline',
			},
		},
		// Markdown headings
		{
			scope: ['markup.heading', 'markup.heading.markdown', 'entity.name.section'],
			settings: {
				foreground: '#7dd87d',
				fontStyle: 'bold',
			},
		},
		// Markdown bold
		{
			scope: ['markup.bold'],
			settings: {
				foreground: '#e8e8e8',
				fontStyle: 'bold',
			},
		},
		// Markdown italic
		{
			scope: ['markup.italic'],
			settings: {
				foreground: '#c5d4e3',
				fontStyle: 'italic',
			},
		},
		// Markdown links
		{
			scope: ['markup.underline.link', 'string.other.link'],
			settings: {
				foreground: '#a5e887',
			},
		},
		// Markdown code
		{
			scope: ['markup.inline.raw', 'markup.fenced_code.block'],
			settings: {
				foreground: '#7dd87d',
			},
		},
		// JSON keys
		{
			scope: ['support.type.property-name.json'],
			settings: {
				foreground: '#a5e887',
			},
		},
		// CSS selectors
		{
			scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.id.css'],
			settings: {
				foreground: '#a5e887',
			},
		},
		// CSS properties
		{
			scope: ['support.type.property-name.css'],
			settings: {
				foreground: '#7dd87d',
			},
		},
		// CSS values
		{
			scope: ['support.constant.property-value.css', 'meta.property-value.css'],
			settings: {
				foreground: '#c5d4e3',
			},
		},
	],
};

