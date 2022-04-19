import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {

  constructor(private hover: ElementRef) { }

  private hovercolor(color: string) {
    this.hover.nativeElement.style.backgroundColor = color;
  }
  
  @HostListener('mouseover') onMouseEnter() {
    this.hovercolor('#408754'); 
  }

  @HostListener('mouseout') onMouseLeave() {
    this.hovercolor(null!); 
  }

 

}
