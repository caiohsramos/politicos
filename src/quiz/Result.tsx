import { GradeType } from "quiz/Quiz";
import Card from "candidates/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type Props = {
  handleReset: () => void;
  grades: GradeType;
};

const renderBest = (grades: GradeType) => {
  const name = Object.keys(grades).reduce((a, b) =>
    grades[a as keyof GradeType] > grades[b as keyof GradeType] ? a : b
  );

  return <Card name={name} />;
};

const Result = ({ grades, handleReset }: Props) => {
  return (
    <>
      {renderBest(grades)}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button variant="contained" color="secondary" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </>
  );
};

export default Result;
