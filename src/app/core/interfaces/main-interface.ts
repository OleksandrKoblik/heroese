export interface AuthUser {
  confirmPassword: string
  email: string
  password: string
  userName: string
}

export interface AllHeroResponse {
  response: string;
  results: Hero[];
  'results-for': string;
}

export interface PowerUps {
  imgUrl: string,
  param: string,
  quantity: number,
  stats: number,
  title: string
}

export interface Hero {
  biography: {
    aliases: string[],
    alignment: string,
    alterEgos: string,
    firstAppearance: string,
    fullName: string,
    placeOfBirth: string,
    publisher: string
  },
  id: string,
  image: {
    url: string
  },
  name: string,
  powerstats: {
    combat: string,
    durability: string,
    intelligence: string,
    power: string,
    speed: string,
    strength: string
  }
}

