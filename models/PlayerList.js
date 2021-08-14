import Player from "./Player";

export default class PlayerList {
    constructor() {
        /**
         * Object of players where the key is their name and the value is an instance of player.         * @type {Object.<string, Player>}
         */
        this.players = {};
    }

    /**
     * Adds a player to the global players object.
     *
     * @param name
     * @returns {boolean} Returns false if the player name is already taken or true on success.
     */
    addPlayer = (name) => {
        if (this.players[name]) {
            return false;
        }
        this.players[name] = new Player(name);

        return true;
    }

    /**
     * Removes a player from the global players object.
     *
     * @param name
     * @returns {boolean} Returns false if the player doesn't exist or true on success.
     */
    removePlayer = (name) => {
        if (!this.players[name]) {
            return false;
        }
        delete this.players[name];
        return true;
    }
}
