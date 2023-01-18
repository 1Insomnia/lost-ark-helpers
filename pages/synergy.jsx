import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import TableSynergy from "@/components/table/TableSynergy";
import { Dataset } from "@mui/icons-material";

export default function Synergy({ data, error }) {
  const [synergyType, setSynergyType] = useState("all");

  const dataSet = [
    {
      title: "Flat Percent Damage (Burst)",
      rows: data
        .filter((row) => row.type === "Flat Percent Damage (Burst)")
        .sort((a, b) => (a.class > b.class ? 1 : -1)),
    },
    {
      title: "Flat Percent Damage (Constant)",
      rows: data
        .filter((row) => row.type === "Flat Percent Damage (Constant)")
        .sort((a, b) => (a.class > b.class ? 1 : -1)),
    },
    {
      title: "Attack Power",
      rows: data
        .filter((row) => row.type === "Attack Power")
        .sort((a, b) => (a.class > b.class ? 1 : -1)),
    },
    {
      title: "Crit Rate (Burst)",
      rows: data
        .filter((row) => row.type === "Crit Rate (Burst)")
        .sort((a, b) => (a.class > b.class ? 1 : -1)),
    },
    {
      title: "Crit Rate (Constant)",
      rows: data
        .filter((row) => row.type === "Crit Rate (Constant)")
        .sort((a, b) => (a.class > b.class ? 1 : -1)),
    },
    {
      title: "Defense Reduction",
      rows: data
        .filter((row) => row.type === "Defense Reduction")
        .sort((a, b) => (a.class > b.class ? 1 : -1)),
    },
  ].filter((row) => (synergyType !== "all" ? row.title === synergyType : row));

  return (
    <Box>
      <Box py={4}>
        <Typography variant="h1" component="h1">
          Party Synergy
        </Typography>
        <FormControl fullWidth sx={{ mt: 4 }}>
          <InputLabel id="synergyType">Synergy Type</InputLabel>
          <Select
            labelId="synergyType"
            id="synergyType"
            value={synergyType}
            label="Synergy Type"
            onChange={(e) => setSynergyType(e.target.value)}
          >
            <MenuItem value="all" selected>
              All
            </MenuItem>
            <MenuItem value="Flat Percent Damage (Burst)" selected>
              Flat Percent Damage (Burst)
            </MenuItem>
            <MenuItem value="Flat Percent Damage (Constant)">
              Flat Percent Damage (Constant)
            </MenuItem>
            <MenuItem value="Attack Power">Attack Power</MenuItem>
            <MenuItem value="Crit Rate (Burst)">Crit Rate (Burst)</MenuItem>
            <MenuItem value="Crit Rate (Constant)">
              Crit Rate (Constant)
            </MenuItem>
            <MenuItem value="Defense Reduction">Defense Reduction</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Stack spacing={4}>
        {!error &&
          dataSet.map((dataElement) => (
            <TableSynergy
              key={dataElement.title}
              dataSet={dataElement.rows}
              title={dataElement.title}
              headers={["Class", "Skill", "Synergy", "Duration", "Uptime"]}
            />
          ))}
      </Stack>
    </Box>
  );
}

export async function getServerSideProps() {
  try {
    const querySnapShot = await getDocs(collection(db, "skill"));
    const dataSet = querySnapShot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return {
      props: {
        data: dataSet,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        error: error.message,
      },
    };
  }
}
