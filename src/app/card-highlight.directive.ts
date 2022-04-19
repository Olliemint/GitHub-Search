import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {

  constructor(private elem: ElementRef) { }
  
  @HostListener('mouseover') onMouseEnter() {
    this.highlight('#408754'); 
  }

  @HostListener('mouseout') onMouseLeave() {
    this.highlight(null!); 
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
