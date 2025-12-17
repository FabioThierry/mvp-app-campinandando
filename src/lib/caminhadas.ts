import type { Caminhadas } from "../types";

export const caminhadas: Caminhadas[] = [
  {
    titulo: "As águas do Açude Velho",
    descricao: "Um outro olhar sobre Campina Grande",
    slug: "aguas-acude-velho",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/A%C3%A7ude_Velho_Campina_Grande_PB_-_39074177560.jpg",
    markers: [
      {
        icon: "markers/blue_icon.png",
        title: "Açude Velho",
        loc: {
          lat: -7.224589,
          lon: -35.878767,
        },
      },
      {
        icon: "markers/home_icon.png",
        title: "Parque do Povo",
        loc: {
          lat: -7.223902,
          lon: -35.887817,
        },
      },
    ],
  },

  {
    titulo: "As formas de morar nas periferias de Campina Grande",
    descricao: "Descirção da Caminhada",
    slug: "periferias",
    imagem:
      "https://ptpb.org.br/wp-content/uploads/2019/11/Screen-Shot-2019-08-01-at-12.17.58-1024x578-1024x509.png",
    markers: [
      {
        icon: "markers/home_icon.png",
        title: "Conjunto Habitacional Jardim Continental",
        loc: {
          lat: -7.225,
          lon: -35.89,
        },
      },
      {
        icon: "markers/work_icon.png",
        title: "Complexo Industrial de Campina Grande",
        loc: {
          lat: -7.21,
          lon: -35.895,
        },
      },
    ],
  },
  {
    titulo: "Antes do Algodão e dos trilhos",
    descricao: "Campina Grande do Século XIX",
    slug: "centro-historico",
    imagem:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7YuoUrSIHgXQWd7wZywFyOVwPwsxH1Sqyouix4GO_0CWnyAPddFfuMnFV7yJ7-biUKaPQjAZniWqXYlJhoV4tpYmgsKNmt1pML2uuweaQ3Jr8VTAN-sLbkxbXA-ynYxuXHjUKnV3CjVo/s1600/catedral.JPG",
    markers: [
      {
        icon: "markers/igreja_icon.png",
        title: "Catedral de Nossa Senhora da Conceição",
        loc: {
          lat: -7.218455,
          lon: -35.881235,
        },
      },
      {
        icon: "markers/blue_icon.png",
        title: "Universidade Federal de Campina Grande",
        loc: {
          lat: -7.2171368,
          lon: -35.9097543,
        },
      },
      {
        icon: "markers/home_icon.png",
        title: "Shopping São Miguel",
        loc: {
          lat: -7.2186512,
          lon: -35.8838391,
        },
      },
    ],
  },
];
