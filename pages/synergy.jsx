import { Box, Typography, Stack } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import TableSynergy from "@/components/table/TableSynergy";

export default function Synergy({ data, error }) {
  const dataSet = [
    {
      title: "Flat Percent Damage (Burst)",
      rows: data
        .filter((row) => row.type === "Flat Percent Damage (Burst)")
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
  ];

  return (
    <Box>
      <Box py={4}>
        <Typography variant="h1" component="h1">
          Party Synergy
        </Typography>
      </Box>
      <Stack spacing={4}>
        {!error &&
          dataSet.map((dataElement) => (
            <TableSynergy
              key={dataElement.id}
              dataSet={dataElement.rows}
              title={dataElement.title}
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
