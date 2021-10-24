import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChatPopupComponent} from './main/component/chat-popup/chat-popup.component';
import {ChatsListComponent} from './main/component/chats-list/chats-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CHAT_ICONS} from './main/chat-icons';
import { ChatsSearchPipe } from './main/pipe/chats-search/chats-search.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ChatPopupComponent,
        ChatsListComponent,
        ChatsSearchPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
