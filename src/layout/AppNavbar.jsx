import { Box, Divider, Paper, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const pathList = [
  { displayTitle: "טיפול בפניה", path: "/current-ticket" },
  { displayTitle: "הפניות של צוות משוב", path: "/team-tickets" },
];

export const AppNavbar = ({ width }) => (
  <Box
    component={Paper}
    display="flex"
    flexDirection="column"
    alignItems="center"
    width={width}
    pt={2}
  >
    <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", pb: 2 }}>
      helpdesk
    </Typography>
    <Divider />
    <Box display="flex" flexDirection="column" alignItems="end" width="100%">
      {pathList.map(({ displayTitle, path }, index) => (
        <NavbarLink key={index} to={path}>
          {displayTitle}
        </NavbarLink>
      ))}
    </Box>
  </Box>
);

const NavbarLink = styled(NavLink)`
  margin: ${({ theme }) => theme.spacing(0.5, 0)};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  width: 90%;
  border-radius: 20px 0 0 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }

  &.active {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
