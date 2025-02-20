class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.nums = value;
        this.err = null;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.nums += value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.nums -= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.nums *= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value) {
            this.nums /= value;
        } else {
            this.err = "Division by zero is not allowed"
        }

        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.nums **= value;
        return this;
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.err ? this.err : this.nums;
    }
}