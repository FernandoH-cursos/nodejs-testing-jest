const winston = require("winston");
const { combine, timestamp, json } = winston.format;

// Configuración de logger para mostrar info, errores, debug,etc
export const logger = winston.createLogger({
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
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

export function buildLogger(service: string) {
  return {
    log: (message: string) => {
      logger.log("info", { message, service });
    },
    error: (message: string) => {
      logger.error("error", { message, service });
    },
  };
};
