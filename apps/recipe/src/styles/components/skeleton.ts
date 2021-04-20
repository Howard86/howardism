import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Skeleton: ComponentStyleConfig = {
  baseStyle: {
    rounded: "md",
  },
  defaultProps: {
    startColor: "primary.500",
    endColor: "secondary.500",
  },
};

export default Skeleton;
