import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('check pipe result', () => {
    const pipe = new ReversePipe();
    // expect(pipe).toBeTruthy();
    expect(pipe.transform('hello')).toEqual('olleh');
  });
});
