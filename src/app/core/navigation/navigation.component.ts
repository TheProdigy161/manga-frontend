import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, ViewChild, computed, effect, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

enum Mode { LIGHT = 'light', DARK = 'dark' };

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('darkModeToggle', { read: ElementRef }) element: ElementRef | undefined;

  currentMode = signal(localStorage.getItem('theme') || Mode.LIGHT);
  isDarkMode = computed(() => this.currentMode() === Mode.DARK);

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient) {
    effect(() => {
      const mode = this.currentMode();
      localStorage.setItem('theme', mode);
      this.document.body.classList.add(mode);
    });
  }

  ngAfterViewInit() {
    this.setIcon();
  }

  // Toggles the bodys class based on the current theme.
  toggleTheme() {
    const mode = this.currentMode();
    this.document.body.classList.remove(mode);

    if (mode === Mode.LIGHT) {
      this.currentMode.set(Mode.DARK);
    } else {
      this.currentMode.set(Mode.LIGHT);
    }
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
}
