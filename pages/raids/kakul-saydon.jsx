// MUI
import { Box } from "@mui/material";
// Components
import PageHeader from "@/components/layout/PageHeader";
import CheatsheetTabs from "@/components/CheatsheetTabs";

export default function kakulSaydon() {
  const gateList = [
    {
      name: "Gate 1",
      image: "/assets/img/raids/kakul_saydon/kakul-saydon-gate-1.webp",
    },
    {
      name: "Gate 2",
      image: "/assets/img/raids/kakul_saydon/kakul-saydon-gate-2.webp",
    },
    {
      name: "Gate 3",
      image: "/assets/img/raids/kakul_saydon/kakul-saydon-gate-3.webp",
    },
  ];

  return (
    <Box>
      <PageHeader title="Kakul Saydon" />
      <CheatsheetTabs gateList={gateList} />
    </Box>
  );
}
