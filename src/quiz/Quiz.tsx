import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

import QuizHeader from "quiz/Header";
import QuizContent from "quiz/Content";
import { answerCount } from "quiz/constants";

export type GradeType = {
  alvaro: number;
  ciro: number;
  alckmin: number;
  boulos: number;
  meirelles: number;
  bolsonaro: number;
  amoedo: number;
  marina: number;
};

const Quiz = () => {
  const [progress, setProgress] = React.useState(0);
  const [grades, setGrades] = React.useState<GradeType>({
    alvaro: 0,
    ciro: 0,
    alckmin: 0,
    boulos: 0,
    meirelles: 0,
    bolsonaro: 0,
    amoedo: 0,
    marina: 0,
  });

  const handleAnswer = (answerGrades: GradeType | null) => {
    if (answerGrades == null) {
      setProgress(progress + 1);
      return;
    }
    setProgress(progress + 1);
    setGrades({
      alvaro: grades.alvaro + answerGrades.alvaro,
      ciro: grades.ciro + answerGrades.ciro,
      alckmin: grades.alckmin + answerGrades.alckmin,
      boulos: grades.boulos + answerGrades.boulos,
      meirelles: grades.meirelles + answerGrades.meirelles,
      bolsonaro: grades.bolsonaro + answerGrades.bolsonaro,
      amoedo: grades.amoedo + answerGrades.amoedo,
      marina: grades.marina + answerGrades.marina,
    });
  };

  const handleReset = () => {
    setProgress(0);
    setGrades({
      alvaro: 0,
      ciro: 0,
      alckmin: 0,
      boulos: 0,
      meirelles: 0,
      bolsonaro: 0,
      amoedo: 0,
      marina: 0,
    });
  };

  return (
    <Box>
      <QuizHeader progress={progress} count={answerCount} />
      {progress !== answerCount + 1 && (
        <LinearProgress
          variant="determinate"
          value={progress * (100 / answerCount)}
        />
      )}

      <QuizContent
        progress={progress}
        handleNext={handleAnswer}
        answerCount={answerCount}
        grades={grades}
        handleReset={handleReset}
      />
    </Box>
  );
};

export default Quiz;
