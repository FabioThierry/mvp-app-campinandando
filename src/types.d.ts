export interface ILoc {
  lat: number;
  lon: number;
}

export interface Marker {
  icon: string;
  title: string;
  loc: ILoc;
}

export interface Caminhadas {
  titulo: string;
  descricao: string;
  slug: string;
  imagem: string;
  markers?: Marker[];
}
