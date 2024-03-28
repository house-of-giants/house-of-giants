---
title: 'Five Syntax Highlighting Plugins for NextJS that arent Terrible'
image: '/images/blog/syntax.webp'
author:
  name: Dominic Magnifico
  picture: '/images/dom.jpeg'
excerpt: 'Which syntax highlighting plugin reigns supreme for NextJS & Markdown? Is it PrismJS with its customizable might, or does Highlight.js steal the throne with ease of use? Perhaps, the dark horse, CSS-in-JS, offers more than meets the eye? 🤔💡'
date: '2024-03-13'
---

As a connoisseur of artisanal tech blogs myself, I’ve found myself lost in the world of syntax highlighters, and after building our new blog here at House of Giants, I’ve found myself at a crossroads: which syntax highlighting plugin do we embrace? Fear not, for we shall explore the crème de la crème of syntax highlighting plugins, dissecting their virtues and shortcomings, and offering you a skeleton key for setup.

### 1. **PrismJS**

**Pros:**

- PrismJS used to stand as a colossus, offering an unparalleled breadth of themes and languages. Customizability is its crown jewel, enabling you to tailor the aesthetics to your blog’s unique style.
- Performance-wise, it’s a lightweight contender, ensuring your blog remains quick and bloat-less.

**Cons:**

- The setup might summon a bit of a Herculean effort, particularly for those less acquainted with Webpack configs. _I despise messing with a Webpack config 😬._
- Seemingly inactive. Prism v2 began development in August of 2022 but development has since seemed to stall out. The last update was almost two years ago.

**Setup Snapshot:**
From the [Prism Docs](https://prismjs.com/#basic-usage):

> If you want to use Prism with a bundler, install Prism with npm:

```bash
$ npm install prismjs
```

You can then import into your bundle:

```js
import Prism from 'prismjs';
```

To make it easy to configure your Prism instance with only the languages and plugins you need, use the babel plugin, [babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs). This will allow you to load the minimum number of languages and plugins to satisfy your needs. See that plugin's documentation for configuration details.

### 2. **Highlight.js**

**The Jack-of-All-Trades**

**Pros:**

- Highlight.js is praised for its out-of-the-box readiness, and eagerness to embellish your blog without demanding much in return.
- Support for over 190+ languages. If it’s code, it can be highlighted.

**Cons:**

- Themes exist, there are close to 500 themes to choose from, but customizing outside of those themes may be a bit cumbersome.
- Requires additional setup to be integrated into Markdown blogs.

**Setup Snapshot:**

```bash
npm i highlight.js
```

Simplicity reigns. Include the Highlight.js library and desired stylesheet in your project, most simply in your `_app.js` file, or for our Next 13+ friends, your default `layout.js` file.

```js
import 'highlight.js/styles/default.css';
```

Once the styles are imported you can register the languages you’d like to highlight and create a Component to apply syntax highlighting to the code within.

```js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default function CodeBlock() {
	const myCode = "console.log('Hello World!')";
	const myHtml = hljs.highlight(myCode, { language: 'javascript' }).value;
	return (
		<pre>
			<code dangerouslySetInnerHTML={{ __html: myHtml }} />
		</pre>
	);
}
```

### 3. **react-syntax-highlighter**

**Pros:**

- As a native citizen of the React ecosystem, it integrates seamlessly with NextJS, like a hand fitting perfectly into a glove.
- Offers a broad selection of themes and the flexibility to dynamically render code blocks without the need for server-side processing.

**Cons:**

- Its dependency on the React framework might be considered overkill for projects seeking the utmost in performance and minimalism.

**Setup Snapshot:**
Fairly similar to Highlight.js.

```bash
$ npm install react-syntax-highlighter --save
```

Create a new component, and import the package, along with the theme you’d like to use:

```js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExample = () => {
	const codeString = `function add(a, b) {
    return a + b;
  }`;

	return (
		<SyntaxHighlighter language="javascript" style={solarizedlight}>
			{codeString}
		</SyntaxHighlighter>
	);
};
```

From [the docs](https://www.dhiwise.com/post/crafting-beautiful-code-blocks-with-react-syntax-highlighter) as well:

> This example demonstrates how to import the Prism version of the syntax highlighter along with a specific style. The Prism version is optimized for JSX and other web technologies, making it a popular choice for React developers.

### 4. **Shiki**

**Pros:**

- Utilizes the same syntax highlighting engine as VS Code, promising a result that’s not just visually consistent with your development environment but also striking.
- Offers an impressive range of themes and the ability to extend with custom VS Code themes.

**Cons:**

- Shiki’s richness comes with a cost—additional setup steps that may deter those in pursuit of simplicity.

**Setup Snapshot:**
Shiki provides straightforward setup instructions to highlight code passed to it via helper functions, that can then be used within React components like the others listed above. Where Shiki pulls ahead is its integrations. One I particularly like is the [Rehype integration](https://shiki.matsu.io/packages/rehype):

```js
$ npm install -D shiki @shikijs/rehype
```

After installation, you can pare Shiki with Remark and its various modules to highlight your markdown files. I struggled with this myself, but what usually ends up having to happen, within a Next application this file will live as a helper function that converts your markdown to HTML.

```js
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';

export default async function markdownToHtml(markdown) {
	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeShiki, {
			// or `theme` for a single theme
			themes: {
				light: 'vitesse-light',
				dark: 'vitesse-dark',
			},
		})
		.use(rehypeStringify)
		.process(markdown);

	return String(file);
}
```

### 5. **MDX**

**Pros:**

- MDX transcends traditional markdown, allowing you to use JSX within your blog posts. This means you can directly leverage React components for syntax highlighting, offering an unparalleled level of flexibility and interactivity.
- Perfect for those who wish to blend technical writing with React-powered features, from interactive diagrams to live code editors.
- Next has an MDX plugin and can be easily integrated into existing Next sites.

**Cons:**

- With great power comes great complexity. MDX’s learning curve is steep, requiring familiarity not just with markdown, but also with React.

**Setup Snapshot:**
[I’m just going to link you to the comprehensive Next documentation for this one.](https://nextjs.org/docs/app/building-your-application/configuring/mdx)

---

In our quest to adorn our blogs with beautifully highlighted code, the path we choose is as much about personal preference as it is about technical requirements. Each plugin offers a unique set of features, each containing unique narratives and complexities. May this guide serve as a compass, leading you to the syntax highlighting plugin that balances the annoyance of build processes and integrations.

Which syntax highlighter has proven itself to you, and are there any that you believe deserve exile from our codebases? Let me know which method of syntax highlighting has proved the easiest to set up, or you can be like me and share your disdain for messing with a Webpack config. I'm fine with either 🤷
