import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  ninjaId: number;

  @MinLength(3)
  name?: string;

  @IsEnum(['stars', 'nunchucks', 'sword'], {
    message: 'Please use correct enumerated values',
  })
  weapon: string;

  country?: string;
}
