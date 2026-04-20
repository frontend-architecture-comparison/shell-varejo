import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() title = '';
  @Input() showBack = false;
  @Input() cartQuantidade = 0;

  @Output() homeClicked = new EventEmitter<void>();
  @Output() cartClicked = new EventEmitter<void>();

  onHomeClick(): void {
    this.homeClicked.emit();
  }

  onCartClick(): void {
    this.cartClicked.emit();
  }
}
