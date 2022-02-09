import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { GradeType } from "quiz/Quiz";

type Props = {
  handleNext: (arg0: GradeType | null) => void;
};

const Intro = (props: Props) => (
  <Box>
    <Paper elevation={4} sx={{ padding: 2, marginTop: 4 }}>
      <Typography variant="h3">Introdução</Typography>
      <Typography variant="subtitle1">
        Escolha as opções sobre cada um dos temas como o seu candidato
        escolheria. No final você terá um ranking com os candidatos mais
        parecidos com as duas escolhas.
      </Typography>
      <Button
        variant="contained"
        onClick={() => props.handleNext(null)}
        sx={{ marginTop: 1 }}
      >
        Começar
      </Button>
    </Paper>
  </Box>
);

export default Intro;
