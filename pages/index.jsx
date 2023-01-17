import { Box, Typography } from "@mui/material";
// Components
import NewsList from "@/components/news/NewsList";

export default function Home({ news }) {
  console.log(news);

  return (
    <Box>
      <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
        Hello
      </Typography>
      <Box pt={4}>
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
