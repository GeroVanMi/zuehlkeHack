import possibleRounds from "../assets/possibleRounds.json";

/**
 * @typedef {Object} Round
 * @property {number} letters - The available letters in the round.
 * @property {number} words - The possible words from the letters.
 */

export default class RoundList {

    constructor(length) {
        /** @type {Round} */
        this.rounds = {};

        // TODO: Increase this limit.
        if(length > 5) {
            length = 5;
        }
        this.generateRounds(length);
    }

    /**
     * Adds a random round to the list.
     * @returns {boolean}
     */
    addRandomRound() {
        let key = Math.floor(Math.random() * possibleRounds['length']);
        if(this.rounds[key] !== undefined) {
            return false;
        }
        if(Object.values(this.rounds).length === 0) {
            this.currentRoundIndex = key;
        }
        this.rounds[key] = possibleRounds[key];
        return true;
    }

    /**
     * Increments the current round counter by one.
     *
     * @return Returns the next key in line or null if the last round was reached.
     */
    incrementRoundCounter() {
        for(let key in Object.keys(this.rounds)) {
            if(key > this.currentRoundIndex) {
                this.currentRoundIndex = key;
                return key;
            }
        }
        return null;
    }

    /**
     * Reads out random rounds from assets/possibleRounds.json and stores them into the rounds property.
     *
     * @param length
     */
    generateRounds(length) {
        while(Object.keys(this.rounds).length < length) {
            this.addRandomRound();
        }
    }
}
