class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /** 
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const listener = this.events.get(eventName);
        listener.push(callback);

        return {
            unsubscribe: () => {
                const index = listener.indexOf(callback);
                listener.splice(index, 1);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }

        const listener = this.events.get(eventName);
        const result = [];

        for (const item of listener) {
            result.push(item(...args));
        }

        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */