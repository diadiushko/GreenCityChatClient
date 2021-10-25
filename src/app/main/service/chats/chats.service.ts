import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chat} from '../../model/Chat.model';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatsService {
    public userChatsStream$: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>([]);
    public currentChatsStream$: BehaviorSubject<Chat> = new BehaviorSubject<Chat>(null);

    constructor(private httpClient: HttpClient) { }

    public get userChats() {
        return this.userChatsStream$.value;
    }

    public get currentChat() {
        return this.currentChatsStream$.value;
    }

    public getAllUserChats(userId: number): void {
        this.httpClient
            .get<Chat[]>(`${ environment.backendLink }/chats/userId/${ userId }`)
            .subscribe((chats: Chat[]) => {
                console.log(chats);
                this.userChatsStream$.next(chats);
            });
    }

    public setCurrentChat(chat: Chat | null) {
        console.log(chat);
        this.currentChatsStream$.next(chat);
    }
}
