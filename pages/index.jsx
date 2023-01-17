import { Box, Typography } from "@mui/material";
// Components
import NewsList from "@/components/news/NewsList";

export default function Home({ news }) {
  return (
    <Box>
      <Typography variant="h1" component="h1" py={4}>
        Home
      </Typography>
    </Box>
  );
}
