// Generated by https://quicktype.io

export interface Jugadores {
  cedula:    string;
  nombre:    string;
  apellidos: string;
  team_id:   string;
  img_jugadores?: string;
  alt_img?: string;
}
// Generated by https://quicktype.io

export interface Teams {
  id:      string;
  name:    string;
  logo:    string;
  manager: string;
}
// Generated by https://quicktype.io

export interface Players {
  id:               string;
  name:             string;
  apellidos:        string;
  cedula:           string;
  foto:             Foto;
  equipo:           Equipo;
  numero:           string;
  posicion:         string;
  fecha_nacimiento: string;
  bt:               BT;
}

export enum BT {
  D = "D",
  DZ = "D/Z",
  LL = "L/L",
  LR = "L/R",
  Na = "NA",
  RR = "R/R",
  SR = "S/R",
  Z = "Z",
}

export enum Equipo {
  ClasicosSt = "CLASICOS ST",
  ExoticosST = "Exoticos ST",
  ExtraOld = "EXTRA OLD",
  Hangover = "HANGOVER",
  RaasGroupSt = "RAAS GROUP ST",
  TeamRulay = "TEAM RULAY",
  Titanes = "TITANES",
}

export enum Foto {
  Img = "img",
}
