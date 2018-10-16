import { ActiveUsersModule } from './active-users.module';

describe('ActiveUsersModule', () => {
  let activeUsersModule: ActiveUsersModule;

  beforeEach(() => {
    activeUsersModule = new ActiveUsersModule();
  });

  it('should create an instance', () => {
    expect(activeUsersModule).toBeTruthy();
  });
});
