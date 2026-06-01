import { CustomError } from 'ts-custom-error';

export class CanonicalUrlParsingError extends CustomError {
  public constructor() {
    super('NEXT_PUBLIC_CANONICAL_URL field is required in .env file');
  }
}
