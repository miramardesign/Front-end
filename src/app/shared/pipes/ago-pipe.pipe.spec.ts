import { AgoPipe } from './ago-pipe.pipe';

describe('AgoPipePipe', () => {

  it('create an instance', () => {
    const pipe = new AgoPipe();
    expect(pipe).toBeTruthy();
  });

  it('should show singular second', () => {
    const pipe = new AgoPipe();
    expect(pipe.transform(1)).toEqual('just now');
  });

  it('should show plural seconds', () => {
    const pipe = new AgoPipe();
    expect(pipe.transform(45)).toEqual('45 seconds ago');
  });

  it('should show singular minute', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(60)).toEqual('1 minute ago');
  });

  it('should show plural minutes', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(130)).toEqual('2 minutes ago');
  });

  it('should show singular hour', () => {
    const pipe = new AgoPipe();
    expect(pipe.transform(3600)).toEqual('1 hour ago');
  });

  it('should show plural hours', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(7200)).toEqual('2 hours ago');
  });


  it('should show singular day', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(86400)).toEqual('1 day ago');
  });

  it('should show plural days', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(86400 * 2)).toEqual('2 days ago');
  });

  it('should show singular year', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(86400 * 366)).toEqual('1 year ago');
  });

  it('should show plural year', () => {
    const pipe = new AgoPipe();

    expect(pipe.transform(86400 * 366 * 2)).toEqual('2 years ago');
  });
});
