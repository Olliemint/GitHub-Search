import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {

  constructor(private elem: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('maroon'); 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null!); 
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
