"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
const winston = require("winston");
const { combine, timestamp, json } = winston.format;
// Configuración de logger para mostrar info, errores, debug,etc
exports.logger = winston.createLogger({
    // Nivel de log
    level: "info",
    // Devuelve el log en los archivos en formato JSON combinado con la fecha timestamp
    format: combine(timestamp(), json()),
    // defaultMeta: { service: 'user-service' },
    // Crea un archivo para el logs de los errores y otro para todos los logs
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});
// Agrega el log en consola en formato de texto
exports.logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));
function buildLogger(service) {
    return {
        log: (message) => {
            exports.logger.log("info", { message, service });
        },
        error: (message) => {
            exports.logger.error("error", { message, service });
        },
    };
}
exports.buildLogger = buildLogger;
;
