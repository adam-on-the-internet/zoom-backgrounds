import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileComponent } from "./profile.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent, HeaderComponent, BodyComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});