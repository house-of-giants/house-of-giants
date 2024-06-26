import markdownStyles from './markdown-styles.module.css';

export const PostBody = (props) => {
	const { content } = props;
	return (
		<section className="container max-w-3xl mx-auto px-4 pb-12">
			<div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
		</section>
	);
};
