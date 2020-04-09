

export default class QString {

    value: string;
    
    protected argIndex: number;

    constructor(value: string|QString = '') {
        this.value = value.toString();
        this.argIndex = 0;
    }
    
    arg(argValue: string|number|QString) {
        let rv = new QString();
        rv.argIndex = this.argIndex + 1;
        rv.value = this.value.replace(new RegExp(`%${rv.argIndex}`, 'g'), "" + argValue);
        return rv;
    }

    toString() {
        return this.value;
    }

}
