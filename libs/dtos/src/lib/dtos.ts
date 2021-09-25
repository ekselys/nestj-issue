import { PickType } from '@nestjs/swagger';
import { IsAlphanumeric, IsBoolean, IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';

export class SalePoint {

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @MaxLength(64)
  public readonly id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(64)
  public name: string;

  @IsBoolean()
  public isHeadQuarter: boolean;

  @IsBoolean()
  public isJewelry: boolean;

  @IsBoolean()
  public isGoldSeller: boolean;


  constructor(id: string,
              name: string,
              isHeadQuarter: boolean,
              isJewelry: boolean,
              isGoldSeller: boolean) {
    this.id = id;
    this.name = name;
    this.isHeadQuarter = isHeadQuarter;
    this.isJewelry = isJewelry;
    this.isGoldSeller = isGoldSeller;
  }
}

export class SalePointSnippet extends PickType(SalePoint, [ 'id', 'name' ] as const) {}
