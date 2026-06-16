import c from 'ansi-colors';
import { describe, expect, test, vi } from 'vitest';
import type { RecordValue } from 'xenopomp-essentials';
import { injectMocks } from 'xenopomp-essentials/vitest';

import type { PREFIXES } from '@scripts/impl';
import { DevLogger, LONGEST_PREFIX_LENGTH } from '@scripts/impl';

type PrefixDataEntry = RecordValue<typeof PREFIXES>;

describe('Logger methods', () => {
  const spyLog = vi.spyOn(console, 'log');
  const spyError = vi.spyOn(console, 'error');
  const spyWarn = vi.spyOn(console, 'warn');
  const spyInfo = vi.spyOn(console, 'info');

  // This will clear all mocks after tests
  injectMocks(() => {});

  test('.start(_)', () => {
    DevLogger.start('START 12');
    expect(spyLog).toHaveBeenCalledWith(`${c.green('START')} START 12`);
  });

  test('.end(_)', () => {
    DevLogger.end('This is an end');
    expect(spyLog).toHaveBeenCalledWith(`${c.green('  END')} This is an end`);
  });

  test('.log(_)', () => {
    DevLogger.log('Hello, Gleb!');
    expect(spyLog).toHaveBeenCalledWith(`${c.white('  LOG')} Hello, Gleb!`);
  });

  test('.error(_)', () => {
    DevLogger.error('Bombastic');
    expect(spyError).toHaveBeenCalledWith(`${c.red('ERROR')} Bombastic`);
  });

  test('.warn(_)', () => {
    DevLogger.warn('Hello, warning!');
    expect(spyWarn).toHaveBeenCalledWith(
      `${c.yellow(' WARN')} Hello, warning!`,
    );
  });

  test('.info(_)', () => {
    DevLogger.info('Gleb does not exist');
    expect(spyInfo).toHaveBeenCalledWith(
      `${c.cyanBright(' INFO')} Gleb does not exist`,
    );
  });

  test('.debug(_)', () => {
    DevLogger.debug('Bug');
    expect(spyLog).toHaveBeenCalledWith(`${c.magenta.bold('DEBUG')} Bug`);
  });
});

describe('Logger prefixes', () => {
  test('Max length is calculated correctly', () => {
    expect(LONGEST_PREFIX_LENGTH).toEqual(5);
  });
});
