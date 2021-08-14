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
        this.currentRoundCount = 0;

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
        this.rounds[key] = possibleRounds[key];
        return true;
    }

    /**
     * Increments the current round counter by one.
     */
    incrementRoundCounter() {
        this.currentRoundCount++;
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
