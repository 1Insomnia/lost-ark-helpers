// MUI
import { Box } from "@mui/material";
// Components
import PageHeader from "@/components/layout/PageHeader";
import CheatsheetTabs from "@/components/CheatsheetTabs";

export default function valtan() {
  const gateList = [
    {
      name: "Gate 1",
      image: "/assets/img/raids/valtan/valtan-gate-1.png",
    },
    {
      name: "Gate 2",
      image: "/assets/img/raids/valtan/valtan-gate-2.png",
    },
  ];

  return (
    <Box>
      <PageHeader title="Valtan" />
      <CheatsheetTabs gateList={gateList} />
    </Box>
  );
}
