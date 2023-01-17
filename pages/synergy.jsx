import { Box, Typography, Stack } from "@mui/material";

import NextImage from "next/image";
import synergiesData from "./synergiesData";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Skill({ name, src }) {
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

export default function Synergy() {
  const flatPercentDamageConstant = synergiesData
    .filter((row) => row.type === "Flat Percent Damage (Constant)")
    .sort((a, b) => (a.className > b.className ? 1 : -1));

  return (
    <Box>
      <Box py={4}>
        <Typography variant="h1" component="h1">
          Party Synergy
        </Typography>
      </Box>
      <Box py={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class</TableCell>
                <TableCell>Skill</TableCell>
                <TableCell>Synergy</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Uptime</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flatPercentDamageConstant.map((skill) => {
                return (
                  <TableRow key={skill.uuid}>
                    <TableCell>{skill.className}</TableCell>
                    {/* <Skill img={skill.image} name={skill.name} /> */}
                    <Skill src={skill.image} name={skill.name} />
                    <TableCell>{skill.duration}</TableCell>
                    <TableCell>
                      {skill.synergy.map((row) => (
                        <span key={row}>{row}</span>
                      ))}
                    </TableCell>
                    <TableCell>{skill.uptime}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
