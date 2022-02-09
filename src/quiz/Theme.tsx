import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import { GradeType } from "quiz/Quiz";
import { answers } from "quiz/constants";

type Props = {
  n: number;
  handleAnswer: (arg0: GradeType) => void;
  handleReset: () => void;
};

const renderLabels = (n: number) =>
  answers[n - 1].map((answer, idx) => (
    <FormControlLabel
      key={idx}
      sx={{ margin: 0.5 }}
      value={idx}
      control={<Radio />}
      label={answer.text}
    />
  ));

const Theme = ({ n, handleAnswer, handleReset }: Props) => {
  const [value, setValue] = React.useState("0");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleNext = () => {
    handleAnswer(answers[n - 1][parseInt(value)].grades);
  };
  return (
    <Paper elevation={4} sx={{ padding: 2, marginTop: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: 2,
        }}
      >
        <Button variant="contained" color="secondary" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" color="success" onClick={handleNext}>
          Próximo
        </Button>
      </Box>
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {renderLabels(n)}
      </RadioGroup>
    </Paper>
  );
};

export default Theme;
