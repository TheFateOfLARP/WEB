import { MatDesignModule } from './mat-design.module';

describe('MatDesignModule', () => {
  let matDesignModule: MatDesignModule;

  beforeEach(() => {
    matDesignModule = new MatDesignModule();
  });

  it('should create an instance', () => {
    expect(matDesignModule).toBeTruthy();
  });
});
