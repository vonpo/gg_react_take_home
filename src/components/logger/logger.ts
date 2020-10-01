// Simple logger.

/* tslint:disable no-console  */
const info = (message: string) => console.info(message);
const error = (message: string) => console.error(message);

export const logger = {
  info,
  error,
};
