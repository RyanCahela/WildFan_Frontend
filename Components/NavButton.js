import React from "react";
import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const NavButton = ({ href = "/", children }) => {
  return (
    <Box bg="rebeccapurple" color="white" display="inline" p={2}>
      <Link as={NextLink} href={href}>
        {children}
      </Link>
    </Box>
  );
};

export default NavButton;
