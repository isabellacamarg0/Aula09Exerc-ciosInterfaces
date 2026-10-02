import { Animal } from "./Animal.js";
import { CachorroProps } from "../interfaces/AnimalProps.js";

export class Cachorro extends Animal<CachorroProps> {

    public get getPorte(): string {
        return this.props.porte;
    }

    public get getPrecisaTosa(): boolean {
        return this.props.precisaTosa;
    }
}