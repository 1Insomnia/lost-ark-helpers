import { Typography } from "@mui/material";

export default function PageHeader(props) {
  return (
    <Typography variant="h1" component="h1" {...props}>
      {props.title}
    </Typography>
  );
}
