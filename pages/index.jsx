import { Box, Typography } from "@mui/material";
// Components
import NewsList from "@/components/news/NewsList";

export default function Home({ news }) {
  return (
    <Box>
      <Box py={4}>
        <Typography variant="h1" component="h1">
          News
        </Typography>
      </Box>
      <Box py={4}>
        <NewsList newsList={news} />
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://developer-lostark.game.onstove.com/news/events",
    {
      headers: {
        authorization: `bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}
