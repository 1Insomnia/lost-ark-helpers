// MUI
import { Box } from "@mui/material";

// Components
import PageHeader from "@/components/layout/PageHeader";
import CheatsheetTabs from "@/components/CheatsheetTabs";

export default function vykas() {
  const gateList = [
    {
      name: "Gate 1",
      image: "/assets/img/raids/vykas/vykas-gate-1.webp",
    },
    {
      name: "Gate 2",
      image: "/assets/img/raids/vykas/vykas-gate-2.webp",
    },
    {
      name: "Gate 3",
      image: "/assets/img/raids/vykas/vykas-gate-3.webp",
    },
  ];

  return (
    <Box>
      <PageHeader title="Vykas" />
      <CheatsheetTabs gateList={gateList} />
    </Box>
  );
}
