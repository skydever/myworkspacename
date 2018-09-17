import { async, TestBed } from '@angular/core/testing';
import { MyLibOneWithWorkspaceSchematicModule } from './my-lib-one-with-workspace-schematic.module';

describe('MyLibOneWithWorkspaceSchematicModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLibOneWithWorkspaceSchematicModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLibOneWithWorkspaceSchematicModule).toBeDefined();
  });
});
