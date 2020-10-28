import React, { FC, memo } from "react";
import { Box, Text } from "rebass/styled-components";

import { NAV_OPTIONS } from "@/constants/nav";
import RouteLink from "../common/RouteLink";

interface NavProps {
  path: string;
}

const Nav: FC<NavProps> = ({ path }) => (
  <Box as="nav" sx={{ textAlign: "center" }} py={[1, 2, 3]}>
    <Box as="ul" p={1}>
      {NAV_OPTIONS.map(({ title, href }) => (
        <Box as="li" key={title} my={[1, 2]}>
          <RouteLink href={href}>
            <Text
              fontWeight={path === href ? "bold" : "inherit"}
              sx={{
                "&:hover": {
                  color: "terraCottaDark",
                },
              }}
            >
              {title}
            </Text>
          </RouteLink>
        </Box>
      ))}
    </Box>
  </Box>
);

export default memo(Nav);
