import { Pipe, PipeTransform } from '@angular/core';
import {Chat} from '../../model/Chat.model';

@Pipe({
  name: 'chatsSearch'
})
export class ChatsSearchPipe implements PipeTransform {

  transform(chats: Chat[] | null, searchInput: string): Chat[] | null{
    if (!chats) {
      return null;
    }
    return chats.filter(chat => {
      return chat.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

}
