import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../service/chats/chats.service';
import { CHAT_ICONS } from '../../chat-icons';
import { MatDialog } from '@angular/material/dialog';
import { AddParticipantComponent } from '../add-participant/add-participant.component';

@Component({
    selector: 'app-current-chat',
    templateUrl: './current-chat.component.html',
    styleUrls: ['./current-chat.component.scss']
})
export class CurrentChatComponent implements OnInit {
    public chatIcons = CHAT_ICONS;
    private dialogConfig = {
        hasBackdrop: true,
        closeOnNavigation: true,
        disableClose: true,
        panelClass: 'custom-dialog-container',
        height: '10vh'
    };

    constructor(
        public chatsService: ChatsService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
    }

    openAddParticipantWindow() {
        this.dialog.open(AddParticipantComponent, this.dialogConfig);
    }
}
