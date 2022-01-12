import useMousePos from "@/utils/mousePos";

import Explore from '@/components/SVG/Explore';
import Play from '@/components/SVG/Play';
import Pause from "@/components/SVG/Pause";

import { CircleGrad, StyledCursor } from "./StyledCursor";

export const Cursor = ({ el, isPlaying }) => {
  const { clientX, clientY } = useMousePos(el);

  return (
    <StyledCursor initial={{ opacity: 0  }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<CircleGrad
				className={isPlaying ? '-is-playing' : ''}
        style={{
          left: clientX,
          top: clientY,
        }}
			>
				{!isPlaying ? (
					<>
						<Explore />
						<Play />
					</>
				) : (
					<Pause />
				)}
			</CircleGrad>
    </StyledCursor>
  );
};