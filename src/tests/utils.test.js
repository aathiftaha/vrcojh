import { calculateBMI } from '../utils/utils';

describe('calculateBMI Function', () => {
  it('correctly calculates BMI for valid inputs', () => {
    expect(calculateBMI(70, 1.75)).toBe('22.9');
  });

  it('returns "Invalid input" for negative weight', () => {
    expect(calculateBMI(-70, 1.75)).toBe('Invalid input');
  });

  it('returns "Invalid input" for negative height', () => {
    expect(calculateBMI(70, -1.75)).toBe('Invalid input');
  });

  it('returns "Invalid input" for zero weight', () => {
    expect(calculateBMI(0, 1.75)).toBe('Invalid input');
  });

  it('returns "Invalid input" for zero height', () => {
    expect(calculateBMI(70, 0)).toBe('Invalid input');
  });

  it('returns "Invalid input" for non-numeric inputs', () => {
    expect(calculateBMI('a', 'b')).toBe('Invalid input');
  });
});