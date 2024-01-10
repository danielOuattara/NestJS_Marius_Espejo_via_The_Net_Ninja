import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas: CreateNinjaDto[] = [
    { ninjaId: 0, name: 'ninja0', weapon: 'stars' },
    { ninjaId: 1, name: 'ninja1', weapon: 'sword' },
  ];

  findAllNinjas(weapon?: string) {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  findNinja(ninjaId: number) {
    const ninja = this.ninjas.find((ninja) => ninja.ninjaId === ninjaId);

    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    this.ninjas = [
      ...this.ninjas,
      { ninjaId: new Date().getTime(), ...createNinjaDto },
    ];

    // return this.ninjas;
  }

  updateNinja(ninjaId: number, data: CreateNinjaDto) {
    const ninjaToUpdateIndex = this.ninjas.findIndex(
      (ninja) => ninja.ninjaId === ninjaId,
    );

    this.ninjas[ninjaToUpdateIndex] = { ...data };

    // return  this.ninjas
  }

  patchNinja(ninjaId: number, data: UpdateNinjaDto) {
    const ninjaToUpdateIndex = this.ninjas.findIndex(
      (ninja) => ninja.ninjaId === ninjaId,
    );

    this.ninjas[ninjaToUpdateIndex] = {
      ...this.ninjas[ninjaToUpdateIndex],
      ...data,
    };
  }

  deleteNinja(ninjaId: number) {
    const ninjaToDeleteIndex = this.ninjas.findIndex(
      (ninja) => ninja.ninjaId === ninjaId,
    );

    this.ninjas.splice(ninjaToDeleteIndex, 1);
  }
}
