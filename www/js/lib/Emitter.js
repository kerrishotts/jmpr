const _LISTENERS = Symbol("_watchers");

export const _HANDLE_BROADCAST = Symbol("_handle_broadcast");

export default class Emitter {
    constructor() {
        this[_LISTENERS] = [];
    }

    addListener(obj) {
        let listeners = this[_LISTENERS];
        // don't dup watchers
        if (!listeners.find(listener => listener === obj)) {
            listeners.push(obj);
        }
    }

    removeListener(obj) {
        let listeners = this[_LISTENERS];
        let idx = listeners.indexOf(obj);
        if (idx > -1) {
            listeners.splice(idx, 1);
        }
    }

    notifyListeners(msg, sender) {
        let listeners = this[_LISTENERS];
        for (var listener of listeners) {
            if (Reflect.has(listener, _HANDLE_BROADCAST)) {
                Reflect.apply(listener[_HANDLE_BROADCAST], listener, [msg, sender]);
            }
        }
    }

    emit(msg, sender = this) {
        this.notifyListeners(msg, sender);
    }
}

export const defaultNotificationCenter = new Emitter();