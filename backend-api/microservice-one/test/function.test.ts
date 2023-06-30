import { sayHello } from '../src/function'; // Assuming the code is in a separate module file

describe('sayHello', () => {
  it('should return a greeting message with the provided name', () => {
    const name = 'John';
    const result = sayHello(name);
    expect(result).toBe('Hello John');
  });

  it('should return a greeting message with an empty string if no name is provided', () => {
    const result = sayHello('');
    expect(result).toBe('Hello ');
  });
});
