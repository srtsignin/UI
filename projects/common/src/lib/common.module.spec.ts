import { SRTCommonModule } from './common.module';

describe('SRTCommonModule', () => {
  let srtCommonModule: SRTCommonModule;

  beforeEach(() => {
    srtCommonModule = new SRTCommonModule();
  });

  it('should create an instance', () => {
    expect(srtCommonModule).toBeTruthy();
  });
});
