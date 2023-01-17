import { Box, Grid } from "@mui/material";

import NewsItem from "./NewsItem";

export default function NewsList({ newsList }) {
  return (
    <Grid spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} container>
      {newsList.map((news, index) => (
        <Grid item key={news.Title}>
          <NewsItem {...news} />
        </Grid>
      ))}
    </Grid>
  );
}
