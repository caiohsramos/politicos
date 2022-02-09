import { GradeType } from "quiz/Quiz";

import Intro from "quiz/Intro";
import Result from "quiz/Result";
import Theme from "quiz/Theme";

type Props = {
  progress: number;
  handleNext: (arg0: GradeType | null) => void;
  answerCount: number;
  grades: GradeType;
  handleReset: () => void;
};

const Content = (props: Props) => {
  switch (props.progress) {
    case 0:
      return <Intro handleNext={props.handleNext} />;
    case props.answerCount + 1:
      return <Result grades={props.grades} handleReset={props.handleReset} />;
    default:
      return (
        <Theme
          n={props.progress}
          handleAnswer={props.handleNext}
          handleReset={props.handleReset}
        />
      );
  }
};

export default Content;
