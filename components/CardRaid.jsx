import PropTypes from "prop-types";
// NEXT
import { useRouter } from "next/router";
// MUI
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardRaid({ image, title, iLevel, href }) {
  const router = useRouter();

  return (
    <Card sx={{ width: 248 }}>
      <CardActionArea onClick={() => router.push(`/raids/${href}`)}>
        <CardMedia
          image={`assets/img/raids/${image}.png`}
          alt={title}
          sx={{ height: 362, width: 248, display: "block" }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography component="h3" variant="h3">
            {title}
          </Typography>
          <Typography component="h4" variant="h5" mt={1}>
            {iLevel}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardRaid.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  iLevel: PropTypes.string.isRequired,
};
