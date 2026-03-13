import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ExampleView } from './ExampleView';

describe('ExampleView', () => {
  test('It renders', () => {
    expect(() => render(<ExampleView />)).not.toThrow();
  });
});
