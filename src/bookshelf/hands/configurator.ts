import { FileSystemBookRepository } from "./repository/FileSystemBookRepository";

export class Configurator {
    private config;

    constructor() {
        this.config = require("../../../config.json");
    }
    
    getBookRepository() {
        return new FileSystemBookRepository();
    }

    getConfig() { 
        return this.config;
    }
}