import Globe from '../SVG/Globe';
import { StyledSectionBar } from './StyledSectionBar';

export const SectionBar = ({ count, title }) => (
	<StyledSectionBar>
		<p>{count}</p>
		<div className="marquee">
			<p className="title">
				<span className="text">
					{title}&#x2b29;{title}&#x2b29;
				</span>
				<span className="text">
					{title}&#x2b29;{title}&#x2b29;
				</span>
				<span className="text">
					{title}&#x2b29;{title}&#x2b29;
				</span>
			</p>
		</div>
		<p className="est">
			<Globe fill="var(--c-white)" />
			Making cool shit since 2015
			<Globe fill="var(--c-white)" />
		</p>
	</StyledSectionBar>
);
