import React from "react";
import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const NavButton = ({ href = "/", children }) => {
  return (
    <Box bg="rebeccapurple" color="white" display="inline">
      <Link as={NextLink} href={href}>
        {children}
      </Link>
    </Box>
  );
};

export default NavButton;
