export class Theme {

    private name: string;
    private childTheme: boolean;

    constructor(theme) {
        this.name = theme.name;
        this.childTheme = theme.childTheme;
    }
}
