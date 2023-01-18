import PropTypes from "prop-types";
// MUI
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";
// Components
import Skill from "./Skill";

export default function TableSynergy({ headers, dataSet, title }) {
  return (
    <Box>
      <Box py={2}>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
      </Box>
      <Box py={2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataSet.map((skill) => {
                return (
                  <TableRow key={skill.id}>
                    <TableCell>{skill.class}</TableCell>
                    <Skill src={skill.image} name={skill.name} />

                    <TableCell>
                      {skill.synergy.map((row) => (
                        <Box key={row}>{row}</Box>
                      ))}
                    </TableCell>
                    <TableCell>{skill.duration} seconds</TableCell>
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

TableSynergy.propTypes = {
  headers: PropTypes.array.isRequired,
  dataSet: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
