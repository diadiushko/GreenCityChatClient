import {Component, OnInit} from '@angular/core';
import {ChatsService} from '../../service/chats/chats.service';
import {CHAT_ICONS} from '../../chat-icons';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-chats-list',
    templateUrl: './chats-list.component.html',
    styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit {
    public CHAT_ICONS = CHAT_ICONS;
    public searchField = '';
    public searchFieldControl = new FormControl();

    constructor(
        public chatService: ChatsService
    ) { }

    ngOnInit(): void {
        this.searchFieldControl.valueChanges
            .pipe(
                debounceTime(500)
            )
            .subscribe((newValue) => {
                this.searchField = newValue;
            })
    }

    public messageDateTreat(date: Date): string {
        const messageDate = new Date(date);
        const today = new Date();
        if (messageDate.getFullYear() !== today.getFullYear()) {
            return 'dd/MM/yyyy';
        }
        const isToday = messageDate.getDate() === today.getDate() &&
            messageDate.getMonth() === today.getMonth();
        return isToday ? 'HH:MM' : 'dd/MM';
    }
}
