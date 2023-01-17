import { TableCell, Stack, Box } from "@mui/material";
import NextImage from "next/image";

export default function Skill({ name, src }) {
  return (
    <TableCell>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box>
          <NextImage src={src} alt={name} width={32} height={32} />
        </Box>
        <Box>{name}</Box>
      </Stack>
    </TableCell>
  );
}
