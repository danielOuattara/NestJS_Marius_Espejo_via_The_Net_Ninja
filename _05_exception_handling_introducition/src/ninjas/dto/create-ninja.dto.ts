export enum ENUM_WEAPON {
  STARS = 'stars',
  SWORDS = 'swords',
}

export class CreateNinjaDto {
  ninjaId: number | string;
  name?: string;
  weapon: ENUM_WEAPON;
  country?: string;
}
