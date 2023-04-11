import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAndCarouselComponent } from './banner-and-carousel.component';

describe('BannerAndCarouselComponent', () => {
  let component: BannerAndCarouselComponent;
  let fixture: ComponentFixture<BannerAndCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAndCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAndCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
