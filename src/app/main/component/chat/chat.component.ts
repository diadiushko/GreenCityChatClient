import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatsService} from '../../service/chats/chats.service';
import {CHAT_ICONS} from '../../chat-icons';
import {Message} from '../../model/Message.model';
import {FormControl} from '@angular/forms';
import {SocketService} from '../../service/socket/socket.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
    public chatIcons = CHAT_ICONS;
    public shouldNotBeScrolled = false;
    @ViewChild('chat') chat: ElementRef;
    public messageControl: FormControl = new FormControl();

    constructor(
        public chatsService: ChatsService,
        private socketService: SocketService
    ) { }

    ngOnInit(): void {
        this.chatsService.currentChatMessagesStream$.subscribe(() => {
            this.shouldNotBeScrolled = false;
        })
    }

    ngAfterViewChecked(): void {
        if (this.shouldNotBeScrolled) {
            return;
        }
        this.shouldNotBeScrolled = true;
        const element: HTMLElement = this.chat.nativeElement;
        element.scrollTop = element.scrollHeight;
    }

    sendMessage() {
        const message: Message = {
            chatId: this.chatsService.currentChat.id,
            // TODO: hardcode
            senderId: 3,
            messageText: this.messageControl.value,
            messageDate: new Date()
        }

        this.socketService.sendMessage(message);
    }
}
