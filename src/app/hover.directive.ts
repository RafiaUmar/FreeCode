import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = 'green';

  constructor(private ele: ElementRef, private rend: Renderer2) {
    console.log(this.ele.nativeElement);
  }

  ngOnInit() {
    // this.ele.nativeElement.style.backgroundColor = this.color;
    this.rend.setStyle(this.ele.nativeElement, 'backgroundColor', this.appHover);
  }

  @HostListener('mousehover') onMouseEnter() {
    this.rend.setStyle(this.ele.nativeElement, 'backgroundColor', 'red');
  };


  @HostListener('mouseleave') onMouseLeave() {
    this.rend.setStyle(this.ele.nativeElement, 'backgroundColor', 'white');
  }
}
