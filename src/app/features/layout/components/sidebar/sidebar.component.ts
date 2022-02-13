import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

interface Menu {
  id: number;
  title: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  @Input() hiddenSidebar: boolean;
  public menu: Menu[] = [];

  constructor(){

  }

  ngOnInit(): void {
    this.menu = this.menuList();
  }

  private menuList(): Menu[] {
    return [
      {
        id: 1,
        title: 'moduleDelivery.delivery',
        path: 'procedure/procedure-list',
        icon: 'truck'
      },
      {
        id: 2,
        title: 'requestSend',
        path: 'procedure/procedure-list',
        icon: 'smile'
      },
      {
        id: 3,
        title: 'services',
        path: 'procedure/procedure-list',
        icon: 'history'
      },
      {
        id: 4,
        title: 'myAccount',
        path: 'procedure/procedure-list',
        icon: 'user'
      }
    ];
  }
}
