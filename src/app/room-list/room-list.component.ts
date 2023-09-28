import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { room } from '../rooms/rooms.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit, OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log('On destroy is called');
  }
  @Input() roomsInput: room[] = [];

  @Output() roomSelected = new EventEmitter<room>();

  select(list: room) {
    this.roomSelected.emit(list);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
