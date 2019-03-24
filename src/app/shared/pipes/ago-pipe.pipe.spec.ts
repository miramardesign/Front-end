import { AgoPipe } from './ago-pipe.pipe';

describe('AgoPipePipe', () => {
  it('create an instance', () => {
    const pipe = new AgoPipe();
    expect(pipe).toBeTruthy();
  });


  it('should show plural seconds', () => {
    const pipe = new AgoPipe();
    expect(pipe.transform(45)).toContain('45 seconds ago');
  });

  it('should show singular minute', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(60)).toContain('1 minute ago');
  });

  it('should show plural minutes', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(130)).toContain('2 minutes ago');
  });
});
