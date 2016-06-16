import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FlAppComponent } from '../app/fl.component';

beforeEachProviders(() => [FlAppComponent]);

describe('App: Fl', () => {
  it('should create the app',
      inject([FlAppComponent], (app: FlAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fl works!\'',
      inject([FlAppComponent], (app: FlAppComponent) => {
    expect(app.title).toEqual('fl works!');
  }));
});
