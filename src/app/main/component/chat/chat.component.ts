import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatsService} from '../../service/chats/chats.service';
import {CHAT_ICONS} from '../../chat-icons';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
    public chatIcons = CHAT_ICONS;
    public initialScrolled = false;
    @ViewChild('chat') chat: ElementRef;

    constructor(
        public chatsService: ChatsService
    ) { }

    ngOnInit(): void {

    }

    ngAfterViewChecked(): void {
        if (this.initialScrolled) {
            return;
        }
        this.initialScrolled = true;
        const element: HTMLElement = this.chat.nativeElement;
        element.scrollTop = element.scrollHeight;
    }

}
