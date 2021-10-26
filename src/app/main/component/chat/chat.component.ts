import {Component, OnInit} from '@angular/core';
import {ChatsService} from '../../service/chats/chats.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    constructor(
        private chatsService: ChatsService
    ) { }

    ngOnInit(): void {

    }

}
