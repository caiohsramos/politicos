import Typography from "@mui/material/Typography";
import image from "images/image1.jpg";

const About = () => (
  <div className="container">
    <Typography variant="h1">Sobre</Typography>
    <Typography variant="h4">Opções</Typography>
    <Typography variant="body1" gutterBottom>
      As opções disponibilizadas no quiz foram selecionadas de acordo com o mapa
      das propostas retirado da{" "}
      <a href="https://veja.abril.com.br/politica/eleicoes-2018-mapa-das-propostas/">
        matéria
      </a>
      .
    </Typography>
    <Typography variant="h4">Resultado</Typography>
    <Typography variant="body1" gutterBottom>
      O resultado apresentado não tem qualquer relação com a realidade, dado que
      as pontuações foram selecionadas de acordo com a interpretação dos
      criadores.
    </Typography>
    <Typography variant="h4">Motivação</Typography>
    <Typography variant="body1" gutterBottom>
      Conteúdo criado com foco no aprendizado dos desenvolvedores.
    </Typography>
    <img alt="dog" src={image} height="5" width="5" />
    <a
      className="github-button"
      href="https://github.com/caiohsramos/politicos"
      data-icon="octicon-star"
      data-size="large"
      aria-label="Star caiohsramos/politicos on GitHub"
    >
      Star
    </a>{" "}
    and{" "}
    <a
      className="github-button"
      href="https://github.com/caiohsramos"
      data-size="large"
      aria-label="Follow @caiohsramos on GitHub"
    >
      Follow @caiohsramos
    </a>
  </div>
);
export default About;
