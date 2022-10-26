import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit {

  @HostBinding("style.backgroundColor") myBackgroundColor:string = "";

  constructor() { }

  ngOnInit(): void {
      
  }
  
  @HostListener("mouseenter") mouseEnterEvent(eventData:Event){
    this.myBackgroundColor = "yellow";
  }

  @HostListener("mouseleave") mouseLeaveEvent(eventData:Event){
    this.myBackgroundColor = "transparent";
  }
}
