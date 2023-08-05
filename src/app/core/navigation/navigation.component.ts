import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LocalstorageService } from 'src/app/services/localstorage.service';

enum Mode { LIGHT = 'light', DARK = 'dark' };

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('darkModeToggle', { read: ElementRef }) element: ElementRef | undefined;

  currentMode = Mode.LIGHT;

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient, private localstorageService: LocalstorageService<Mode>) {
    this.currentMode = localstorageService.get('theme') || Mode.LIGHT;
    this.document.body.classList.add(this.currentMode);
  }

  ngAfterViewInit() {
    this.setIcon();
  }

  // Toggles the bodys class based on the current theme.
  toggleTheme() {
    this.document.body.classList.remove(this.currentMode);

    if (this.currentMode === Mode.LIGHT) {
      this.currentMode = Mode.DARK;
    } else {
      this.currentMode = Mode.LIGHT;
    }

    this.localstorageService.save('theme', this.currentMode);
    this.document.body.classList.add(this.currentMode);
  }

  async setIcon() {
    const headers = new HttpHeaders();
    headers.set('Accept', 'image/svg+xml');

    const $darkMode = this.http.get('assets/icons/dark-mode.svg', { headers, responseType: 'text' });
    const $lightMode = this.http.get('assets/icons/light-mode.svg', { headers, responseType: 'text' });

    const darkModeRes: string = await lastValueFrom($darkMode);
    const lightModeRes: string = await lastValueFrom($lightMode);

    if (this.element) {
      this.element.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.getPathD(darkModeRes));
      this.element.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.getPathD(lightModeRes));
    }
  }

  getPathD(value: string): string {
    const path: string = value.split('" d="')[1];
    const pathD: string = path.split('"')[0];

    return pathD;
  }

  isDarkMode() {
    return this.currentMode === Mode.DARK;
  }
}
