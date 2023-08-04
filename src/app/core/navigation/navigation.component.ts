import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';


enum Mode { LIGHT = 'light', DARK = 'dark' };

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  currentMode = Mode.LIGHT;

  constructor(@Inject(DOCUMENT) private document: Document, private localstorageService: LocalstorageService<Mode>) {
    this.currentMode = localstorageService.get('theme') || Mode.LIGHT;
    this.document.body.classList.add(this.currentMode);
  }

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

  isDarkMode() {
    return this.currentMode === Mode.DARK;
  }
}
