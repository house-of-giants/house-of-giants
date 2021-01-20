import styled from "styled-components"

const StyledFooter = styled.footer`
	background-color: var(--c-dark);
	color: var(--c-light);
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	padding: 4rem;

	@media(min-width: 768px) {
		grid-template-columns: repeat(3, 1fr)
	}

	& div:last-child {
		grid-column: 1 / -1;
	}

	& a {
		box-shadow: 0 -.05rem 0 inset var(--c-primary-h);
		color: var(--c-light);
		font-weight: 100;

		&:hover {
			box-shadow: 0 -.15rem 0 inset var(--c-primary-h);
		}
	}

	& ul {
		margin: 0;
		padding: 0;
	}

	& li {
		align-items: center;
		display: inline-flex;

		&:not(:first-child) {
			padding-left: 0.5rem;
		}
	}

	& p {
		font-size: 1rem;
		margin: 0;
	}

	& h5 {
		color: var(--c-secondary-h);
		margin: 0;
	}

	& .emoji {
		display: inline-block;
		padding-right: 0.5rem;
	}
`

const Footer = () => {
	const today = new Date()

	return (
		<StyledFooter>
			<div>
				<h5><span className="emoji">🖥</span> Working remote</h5>
				<p><span className="emoji">🏡</span> Denver, CO</p>
			</div>

			<div>
				<h5>Give us a shout</h5>
				<p><a href='&#109;ailt&#111;&#58;&#37;&#54;8&#37;65&#108;lo&#64;hous&#37;65&#111;f%67i&#37;&#54;1&#110;t%73&#46;&#37;63om' target="_blank" rel="noopener noreferrer">hell&#111;&#64;houseofgia&#110;&#116;s&#46;&#99;&#111;m</a></p>
			</div>

			<div>
				<h5>The socials</h5>
				<ul>
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Instagram</a></li>
					<li><a href="https://www.linkedin.com/company/house-of-giants/" rel="noopener noreferrer">Linkedin</a></li>
				</ul>
			</div>

			<div>
				<p>&copy; {today.getFullYear()} House of Giants, LLC</p>
			</div>
		</StyledFooter>
	)
}

export default Footer