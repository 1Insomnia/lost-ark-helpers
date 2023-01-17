import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link as CardLink,
} from "@mui/material";

export default function NewsItem({ Title, Link, Thumbnail }) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        image={Thumbnail}
        alt="Paella dish"
        sx={{ backgroundClip: "content-box" }}
      />
      <CardContent>
        <Typography component="h3">{Title}</Typography>
        <CardLink href={Link} target="_blank" rel="noreferrer">
          Link
        </CardLink>
      </CardContent>
    </Card>
  );
}
