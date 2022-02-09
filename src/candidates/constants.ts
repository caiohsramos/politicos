import alvaroImg from "images/alvaro-dias.jpg";
import alckminImg from "images/geraldo-alckmin.jpg";
import ciroImg from "images/ciro-gomes.jpg";
import boulosImg from "images/guilherme-boulos.jpg";
import meirellesImg from "images/henrique-meirelles.jpg";
import bolsonaroImg from "images/jair-bolsonaro.jpg";
import amoedoImg from "images/joao-amoedo.jpg";
import marinaImg from "images/marina-silva.jpg";
import haddadImg from "images/fernando-haddad.jpg";

const candidates = {
  alvaro: {
    fullName: "Alvaro Fernandes Dias",
    party: {
      name: "Podemos",
      number: 19,
    },
    websiteUrl: "https://www.alvarodias.com.br/",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000618462",
    image: alvaroImg,
  },
  alckmin: {
    fullName: "Geraldo José Rodrigues Alckmin Filho",
    party: {
      name: "PSDB",
      number: 45,
    },
    websiteUrl: "https://www.geraldoalckmin.com.br/",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000602477",
    image: alckminImg,
  },
  ciro: {
    fullName: "Ciro Ferreira Gomes",
    party: {
      name: "PDT",
      number: 12,
    },
    websiteUrl: "https://www.cirogomes.com.br/",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000605589",
    image: ciroImg,
  },
  boulos: {
    fullName: "Guilherme Castro Boulos",
    party: {
      name: "PSOL",
      number: 50,
    },
    websiteUrl: "https://www.psol50.org.br/author/guilhermeboulos/",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000601016",
    image: boulosImg,
  },
  meirelles: {
    fullName: "Henrique de Campos Meirelles",
    party: {
      name: "MDB",
      number: 15,
    },
    websiteUrl: "https://twitter.com/meirelles",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000622281",
    image: meirellesImg,
  },
  bolsonaro: {
    fullName: "Jair Messias Bolsonaro",
    party: {
      name: "PSL",
      number: 13,
    },
    websiteUrl: "https://www.bolsonaro.com.br/",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000614517",
    image: bolsonaroImg,
  },
  amoedo: {
    fullName: "João Dionisio Filgueira Barreto Amoêdo",
    party: {
      name: "Novo",
      number: 30,
    },
    websiteUrl: "https://joaoamoedo.com.br/",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000607640",
    image: amoedoImg,
  },
  marina: {
    fullName: "Maria Osmarina da Silva Vaz de Lima",
    party: {
      name: "Rede",
      number: 18,
    },
    websiteUrl: "https://marinasilva.org.br/",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000622171",
    image: marinaImg,
  },
  haddad: {
    fullName: "Fernando Haddad",
    party: {
      name: "PT",
      number: 13,
    },
    websiteUrl: "https://www.facebook.com/fernandohaddad/",
    cleanFileUrl:
      "http://divulgacandcontas.tse.jus.br/divulga/#/candidato/2018/2022802018/BR/280000629808",
    image: haddadImg,
  },
};

export { candidates };
