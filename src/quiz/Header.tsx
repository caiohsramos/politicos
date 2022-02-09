import Typography from "@mui/material/Typography";

type Props = {
  progress: number;
  count: number;
};

const themes = [
  "Privatizações",
  "Reforma Trabalhista",
  "Política Econômica",
  "Previdência",
  "Gastos Públicos",
  "Segurança Pública",
];

const getSubtitle = (progress: number, n: number): string => {
  switch (progress) {
    case 0:
      return "Introdução";
    case n + 1:
      return "Resultado";
    default:
      return `Tema: ${themes[progress - 1]}`;
  }
};

const Header = ({ progress, count }: Props) => {
  const subtitle = getSubtitle(progress, count);

  return (
    <>
      <Typography variant="h1">Quiz</Typography>
      <Typography variant="subtitle1" gutterBottom mb={4}>
        {subtitle}
      </Typography>
    </>
  );
};

export default Header;
