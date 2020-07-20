import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  clickCounter = 0;
  changeDetectionCounter = 0;
  @Input() message = 'my first message';
  @Input() config: {color: string, isUpperCase: boolean};
  @Output() buttonClick = new EventEmitter<number>();
  @ViewChild('btn') button: ElementRef <HTMLButtonElement>;

  constructor() {
    console.log('ctr');
  }

  ngOnInit(): void {
    console.log('on init');
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log('on changes', changes);
  }
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  increaseCounter(): any {
    this.clickCounter++;
    this.buttonClick.emit(this.clickCounter);
    this.button.nativeElement.textContent = 'dont click me';
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
  get log(): any {
    this.changeDetectionCounter++
    console.log(this.changeDetectionCounter);
    return 'test';
  }
}
