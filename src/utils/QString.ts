

export default class QString {

    value: string;
    
    protected argIndex: number;

    constructor(value: string = '') {
        this.value = value.toString();
        this.argIndex = 0;
    }
    
    arg(argValue: string|number) {
        let rv = new QString();
        rv.argIndex = this.argIndex + 1;
        rv.value = this.value.replace(new RegExp(`%${rv.argIndex}`, 'g'), "" + argValue);
        return rv;
    }

    toString() {
        return this.value;
    }

}
