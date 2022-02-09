import { candidates } from "candidates/constants";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
  name: string;
};

const CandidateCard = ({ name }: Props) => {
  const candidate = candidates[name as keyof typeof candidates];
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
      <Card sx={{ width: [250, 400] }}>
        <CardMedia component="img" height="200" image={candidate.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {candidate.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${candidate.party.name} ${candidate.party.number}`}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "space-around",
          }}
        >
          <Button size="small" href={candidate.websiteUrl} target="_blank">
            Página do candidato
          </Button>
          <Button size="small" href={candidate.cleanFileUrl} target="_blank">
            Ficha limpa
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CandidateCard;
