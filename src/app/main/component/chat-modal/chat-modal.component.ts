import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ChatsService} from '../../service/chats/chats.service';
import {CHAT_ICONS} from '../../chat-icons';

@Component({
    selector: 'app-chat-modal',
    templateUrl: './chat-modal.component.html',
    styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent implements OnInit {
    public chatIcons = CHAT_ICONS;

    constructor(
        private dialogRef: MatDialogRef<ChatModalComponent>,
        private chatsService: ChatsService
    ) { }

    ngOnInit(): void {
    }

    close() {
        this.chatsService.setCurrentChat(null);
        this.dialogRef.close();
    }

}
