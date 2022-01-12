import Image from "next/image";
import styled from "styled-components";

const StyledDots = styled.div`
  padding: var(--sp-l);
  position: relative;

  & span {
    overflow: visible !important;
  }

  & img {
    position: relative;
    height: 110% !important;
    left: -5% !important;
    max-width: none !important;
    top: -5% !important;
    width: 110% !important;
    z-index: 0;
  }

  & h3 {
    margin-top: 0;
  }

  & h3,
  & p {
    position: relative;
    z-index: 1;
  }
`;

const Dots = ({ children }) => (
	<StyledDots>
    <Image
      className="dots"
      src="/images/dots.png"
      layout="fill"
      objectFit="cover"
    />
    {children}
  </StyledDots>
);

export default Dots;