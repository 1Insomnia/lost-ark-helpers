import PropTypes from "prop-types";
// MUI
import { Grid, Box } from "@mui/material";
// Components
import CardRaid from "./CardRaid";

export default function CardRaidList({ raidList }) {
  return (
    <Box>
      <Grid container direction="row" alignItems="center" spacing={4}>
        {raidList.map((raidItem) => (
          <Grid item key={raidItem.title}>
            <CardRaid
              title={raidItem.title}
              href={raidItem.href}
              image={raidItem.image}
              iLevel={raidItem.iLevel}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CardRaidList.propTypes = {
  raidList: PropTypes.array.isRequired,
};
