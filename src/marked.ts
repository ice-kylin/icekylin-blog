import { Marked } from 'marked';
import markedShiki from 'marked-shiki';
import { codeToHtml } from 'shiki';
import {
	transformerMetaHighlight,
	transformerMetaWordHighlight,
	transformerNotationDiff,
	transformerNotationErrorLevel,
	transformerNotationFocus,
	transformerNotationHighlight,
	transformerNotationWordHighlight
} from '@shikijs/transformers';

export const MARKED = new Marked().use(
	markedShiki({
		highlight(code, lang, props) {
			return codeToHtml(code, {
				lang,
				theme: 'github-dark-dimmed',
				meta: { __raw: props.join(' ') }, // required by `transformerMeta*`
				transformers: [
					transformerNotationDiff(),
					transformerNotationHighlight(),
					transformerNotationWordHighlight(),
					transformerNotationFocus(),
					transformerNotationErrorLevel(),
					transformerMetaHighlight(),
					transformerMetaWordHighlight()
				]
			});
		}
	})
);
