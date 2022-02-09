import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "candidates/Card";
import { candidates } from "candidates/constants";

const renderCandidates = () =>
  Object.keys(candidates).map((candidate, idx) => (
    <Grid item>
      <Card key={idx} name={candidate}></Card>
    </Grid>
  ));

const Candidates = () => {
  return (
    <>
      <Typography variant="h2">Políticos</Typography>
      <Typography variant="subtitle1" gutterBottom mb={4}>
        Presidência
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {renderCandidates()}
      </Grid>
    </>
  );
};

export default Candidates;
