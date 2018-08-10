import { Module4Module } from './module4.module';

describe('Module4Module', () => {
  let module4Module: Module4Module;

  beforeEach(() => {
    module4Module = new Module4Module();
  });

  it('should create an instance', () => {
    expect(module4Module).toBeTruthy();
  });
});
