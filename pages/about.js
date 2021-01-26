import StyledWrap from "@/components/Global/StyledWrap";
import styled from "styled-components";

const StyledCover = styled.div`
	max-height: 40vh;
	height: 100%;
	width: 100%;

	& img {
		height: 100%;
		object-fit: cover;
		object-position: 50% 40%;
		width: 100%;
	}
`

export default function About() {
 return(
	 <StyledWrap>
			<h1>This is how we do it <small>(la la la la lo lo)</small></h1>
			<StyledCover>
				<img src="/slingin-coffee-code.jpg" />
			</StyledCover>
			<p><b>House of Giants</b> is sick of the traditional agency world of "yes and"-ing ourselves into boring marketing website hell. Gone are the days of redundant layouts just for the sake of fashion, inaccessible websites, or the small mindedness of the Web 2.0 revolution. We are here to do <b>cool shit</b>, <b>think big</b>, and <b>become GIANTS</b>. We believe in <b>community</b>, <b>communication</b> and a constant way of thinking in which we are always pushing ourselves, and you, to do the best work we possibly can.</p>
			<h2>Interactive Experiences</h2>
			<p>We forge our web applications and development projects to ensure that you and your users are met with the most enjoyable experience possible.</p>

			<h2>Modern Tech</h2>
			<p>It's hard to sift through the buzz words these days. We'll research the best technology that fits your project. No biases, no taking the easy way out.</p>

			<h2>Data Driven UI / UX</h2>
			<p>We can't stand doing something just because others do it too. We take hard data and leverage that to inform our User Experience and User Interaction Design.</p>

			<h2>Development Quality</h2>
			<p>We have exceptionally high standards for ourselves, our code, our process, and each and every project. We demand the best to ensure your project stands out from the rest.</p>
	 </StyledWrap>
 )
}