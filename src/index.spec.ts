import { helloWorld } from './index';

describe('helloWorld', () => {
  it('should log "Hello, world!"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    helloWorld();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, world!');
    consoleSpy.mockRestore();
  });
});
