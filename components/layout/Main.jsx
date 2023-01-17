import { Box, Container } from "@mui/material";
// Component
import NavBar from "./NavBar";

export default function Main({ children }) {
  return (
    <>
      <NavBar />
      <Box
        component="main"
        color="primary.dark"
        bgcolor="accents.800"
        minHeight="100vh"
      >
        <Container maxWidth="lg" sx={{ pt: "calc(64px + 1rem)" }}>
          {children}
        </Container>
      </Box>
    </>
  );
}
