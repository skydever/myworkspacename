import { async, TestBed } from '@angular/core/testing';
import { MyLibOneModule } from './my-lib-one.module';

describe('MyLibOneModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLibOneModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLibOneModule).toBeDefined();
  });
});
