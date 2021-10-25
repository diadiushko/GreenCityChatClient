import {Component, ComponentFactoryResolver, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CHAT_ICONS} from '../../chat-icons';
import {ChatsService} from '../../service/chats/chats.service';
import {NewMessageWindowComponent} from '../new-message-window/new-message-window.component';
import {ReferenceDirective} from '../../directive/reference/reference.directive';
import {CommonService} from '../../service/common/common.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {SocketService} from '../../service/socket/socket.service';

@Component({
    selector: 'app-chat-popup',
    templateUrl: './chat-popup.component.html',
    styleUrls: ['./chat-popup.component.scss']
})
export class ChatPopupComponent implements OnInit, OnDestroy {
    public chatIcons = CHAT_ICONS;
    private onDestroy$ = new Subject();
    public isOpen: boolean = true;
    @ViewChild(ReferenceDirective) elementRef: ReferenceDirective;

    constructor(
        private chatsService: ChatsService,
        private commonService: CommonService,
        private factory: ComponentFactoryResolver,
        private socketService: SocketService
    ) { }

    ngOnInit(): void {
        this.socketService.connect();
        this.chatsService.getAllUserChats(3);
        this.commonService.newMessageWindowRequireCloseStream$
            .pipe(
                takeUntil(this.onDestroy$)
            )
            .subscribe(() => this.closeNewMessageWindow())
    }

    public openNewMessageWindow(isEmpty: boolean) {
        if (isEmpty) {
            this.chatsService.setCurrentChat(null);
        }
        const newMsgComponent = this.factory.resolveComponentFactory(NewMessageWindowComponent)
        this.elementRef.containerRef.clear();
        this.elementRef.containerRef.createComponent(newMsgComponent);
    }

    private closeNewMessageWindow() {
        this.elementRef.containerRef.clear();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
