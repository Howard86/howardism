import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";

interface LinkProps extends ChakraLinkProps {
  href: string;
}

const Link: FC<LinkProps> = ({ href, ...props }) => {
  if (!href.startsWith("/")) {
    return <ChakraLink href={href} isExternal {...props} />;
  }

  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props} />
    </NextLink>
  );
};

export default Link;
