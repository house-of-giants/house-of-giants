import { colors } from "../styles/base/variables";

export const slideL = {
  hidden: {
    x: -100,
    opacity: 0
  },
  shown: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
      when: "beforeChildren"
    }
  }
};

export const shadowU = {
  hidden: { boxShadow: `0 0 0 inset ${colors.yellow}` },
  shown: {
    boxShadow: `0 -2rem 0 inset ${colors.yellow}`,
    transition: {
      duration: 0.3,
      delay: 1.3
    }
  },
}

export const fade = {
  hidden: { opacity: 0 },
  shown: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 1.3
    }
  },
}