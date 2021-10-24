import {Component, OnInit} from '@angular/core';
import {CHAT_ICONS} from '../../chat-icons';
import {ChatsService} from '../../service/chats/chats.service';

@Component({
    selector: 'app-chat-popup',
    templateUrl: './chat-popup.component.html',
    styleUrls: ['./chat-popup.component.scss']
})
export class ChatPopupComponent implements OnInit {
    public CHAT_ICONS = CHAT_ICONS;
    public isOpen: boolean = true;

    constructor(private chatsService: ChatsService) { }

    ngOnInit(): void {
        this.chatsService.getAllUserChats(3);
    }
}
