import {Injectable} from '@angular/core';
import * as SockJS from 'sockjs-client';
import {environment} from '../../../../environments/environment';
import {CompatClient, IMessage, Stomp} from '@stomp/stompjs';
import {Message} from '../../model/Message.model';
import {ChatsService} from '../chats/chats.service';


@Injectable({
    providedIn: 'root'
})
export class SocketService {
    private socket: WebSocket;
    private stompClient: CompatClient;
    private backendSocketLink = `${ environment.backendLink }/socket`;

    constructor(
        private chatsService: ChatsService
    ) {}

    public connect() {
        this.socket = new SockJS(this.backendSocketLink);
        this.stompClient = Stomp.over(() => this.socket);
        this.stompClient.connect(
            {},
            () => this.onConnected(),
            (error) => this.onError(error)
        );
    }

    private onConnected() {
        this.stompClient.subscribe('/message/chat-messages', (data: IMessage) => {
            console.log(JSON.parse(data.body));
        });
    }

    private onError(error) {
        console.log(error);
    }

    sendMessage(message: Message) {
        this.stompClient.send('/app/addMessage', {}, JSON.stringify(message));
        const currentChat = this.chatsService.currentChat;
        currentChat.lastMessage = message.messageText;
        currentChat.lastMessageDate = message.messageDate;
        this.chatsService.updateChat(currentChat);
    }
}
