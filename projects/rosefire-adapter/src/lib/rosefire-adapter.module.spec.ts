import { RosefireAdapterModule } from './rosefire-adapter.module';

describe('RosefireAdapterModule', () => {
  let rosefireAdapterModule: RosefireAdapterModule;

  beforeEach(() => {
    rosefireAdapterModule = new RosefireAdapterModule();
  });

  it('should create an instance', () => {
    expect(rosefireAdapterModule).toBeTruthy();
  });
});
