import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GalleryComponent } from "./gallery.component";
import { BackgroundCardComponent } from "../background-card/background-card.component";
import { CardComponent } from "../card/card.component";

describe("GalleryComponent", () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, BackgroundCardComponent, CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
