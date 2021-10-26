import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChatPopupComponent} from './main/component/chat-popup/chat-popup.component';
import {ChatsListComponent} from './main/component/chats-list/chats-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CHAT_ICONS} from './main/chat-icons';
import { ChatsSearchPipe } from './main/pipe/chats-search/chats-search.pipe';
import { NewMessageWindowComponent } from './main/component/new-message-window/new-message-window.component';
import { ReferenceDirective } from './main/directive/reference/reference.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ChatModalComponent } from './main/component/chat-modal/chat-modal.component';
import { CurrentChatComponent } from './main/component/current-chat/current-chat.component';
import { ChatComponent } from './main/component/chat/chat.component';
import { MessageFromDayPipe } from './main/pipe/message-from-day/message-from-day.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ChatPopupComponent,
        ChatsListComponent,
        ChatsSearchPipe,
        NewMessageWindowComponent,
        ReferenceDirective,
        ChatModalComponent,
        CurrentChatComponent,
        ChatComponent,
        MessageFromDayPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
