class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (!config)
            throw new Error();

        this.config = config;
        this.state = 'normal';
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (!this.config.states[state])
            throw new Error();
        this.state = state;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) { // Study
        let state = getStateByTransition(this.config, event);
        this.config.initial = state;
        this.changeState(state);
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {

    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {

    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {

    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {

    }

    /**
     * Clears transition history
     */
    clearHistory() {

    }
}

function getStateByTransition(config, transition) {
    for (let state in config.states) {
        if (config.states[state].transitions[transition])
            return config.states[state].transitions[transition];
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
