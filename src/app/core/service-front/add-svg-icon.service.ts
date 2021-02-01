import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AddSvgIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) { }

  /*新增自訂義svg-icon到mat-icon*/
  addSvgIcon(svgName: string) {
    this.matIconRegistry.addSvgIcon(
      svgName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/images/${svgName}.svg`)
    );
  }

}
