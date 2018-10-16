import { RolesAdapterModule } from './roles-adapter.module';

describe('RolesAdapterModule', () => {
  let rolesAdapterModule: RolesAdapterModule;

  beforeEach(() => {
    rolesAdapterModule = new RolesAdapterModule();
  });

  it('should create an instance', () => {
    expect(rolesAdapterModule).toBeTruthy();
  });
});
