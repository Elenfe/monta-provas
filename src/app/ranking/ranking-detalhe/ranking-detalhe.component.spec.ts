import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDetalheComponent } from './ranking-detalhe.component';

describe('RankingDetalheComponent', () => {
  let component: RankingDetalheComponent;
  let fixture: ComponentFixture<RankingDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
