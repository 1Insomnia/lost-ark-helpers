// MUI
import { Box } from "@mui/material";
// Components
import PageHeader from "@/components/layout/PageHeader";
import CardRaidList from "@/components/CardRaidList";

export default function raids() {
  const raidList = [
    {
      title: "Valtan",
      image: "valtan/valtan",
      href: "valtan",
      iLevel: "NM : 1415 H: 1445",
    },
    {
      title: "Vykas",
      image: "vykas/vykas",
      href: "vykas",
      iLevel: "NM : 1430 H: 1460",
    },
    {
      title: "Kakul Saydon",
      image: "kakul_saydon/kakul_saydon",
      href: "kakul-saydon",
      iLevel: "NM : 1475",
    },
    {
      title: "Brelshaza",
      image: "brelshaza/brelshaza",
      href: "brelshaza",
      iLevel: "NM : 1490 1500 1520",
    },
  ];

  return (
    <Box>
      <PageHeader title="Raids" />
      <Box py={4}>
        <CardRaidList raidList={raidList} />
      </Box>
    </Box>
  );
}
