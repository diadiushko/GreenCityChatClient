import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../service/chats/chats.service';
import { SocketService } from '../../service/socket/socket.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-participant',
    templateUrl: './add-participant.component.html',
    styleUrls: ['./add-participant.component.scss']
})
export class AddParticipantComponent implements OnInit {
    userId: number = 0;

    constructor(
        private socketService: SocketService,
        private dialogRef: MatDialogRef<AddParticipantComponent>
    ) { }

    ngOnInit(): void {
    }

    addParticipant() {
        this.socketService.addParticipant(this.userId);
        this.dialogRef.close();
    }

}
