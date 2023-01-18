// MUI
import { Box } from "@mui/material";
// Components
import PageHeader from "@/components/layout/PageHeader";
import CheatsheetTabs from "@/components/CheatsheetTabs";

export default function brelShaza() {
  const gateList = [
    {
      name: "Gate 1",
      image: "/assets/img/raids/brelshaza/brelshaza-gate-1.webp",
    },
    {
      name: "Gate 2",
      image: "/assets/img/raids/brelshaza/brelshaza-gate-2.webp",
    },
    {
      name: "Gate 3",
      image: "/assets/img/raids/brelshaza/brelshaza-gate-3.webp",
    },
    {
      name: "Gate 4",
      image: "/assets/img/raids/brelshaza/brelshaza-gate-4.webp",
    },
    {
      name: "Gate 5",
      image: "/assets/img/raids/brelshaza/brelshaza-gate-5.webp",
    },
    {
      name: "Gate 6",
      image: "/assets/img/raids/brelshaza/brelshaza-gate-6.webp",
    },
  ];

  return (
    <Box>
      <PageHeader title="Brelshaza" />
      <CheatsheetTabs gateList={gateList} />
    </Box>
  );
}
