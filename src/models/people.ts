import { Theme } from './theme';

export class People {

    _id: string;
    name: string;
    peoplePicked: string;
    isPicked: boolean;
    cantPick: string[];
    themesPicked: string[];
    isChild: boolean;

    constructor(people) {
        this._id = people._id;
        this.name = people.name;
        this.peoplePicked = people.peoplePicked;
        this.isPicked = people.isPicked;
        this.cantPick = people.cantPick;
        this.themesPicked = people.themesPicked;
        this.isChild = people.isChild;
    }
}
