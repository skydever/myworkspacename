import { async, TestBed } from '@angular/core/testing';
import { MyLibTwoWithWorkspaceSchematicModule } from './my-lib-two-with-workspace-schematic.module';

describe('MyLibTwoWithWorkspaceSchematicModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLibTwoWithWorkspaceSchematicModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLibTwoWithWorkspaceSchematicModule).toBeDefined();
  });
});
