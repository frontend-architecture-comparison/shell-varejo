import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private currentUrl = this.router.url;
  private routeSubscription?: Subscription;
  protected cartQuantidade = 0;

  protected carrinhoState = {
    quantidade: () => this.cartQuantidade,
  };

  protected get title(): string {
    const url = this.currentUrl;

    switch (true) {
      case url === '/':
      case url.startsWith('/home'):
        return 'Home';
      case url.startsWith('/carrinho'):
        return 'Carrinho';
      default:
        return '';
    }
  }

  protected get isCarrinhoRoute(): boolean {
    return this.currentUrl.startsWith('/carrinho');
  }

  ngOnInit(): void {
    this.routeSubscription = this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => this.router.url),
      )
      .subscribe((url) => {
        this.currentUrl = url;
      });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  goToCart(): void {
    this.router.navigate(['/carrinho']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
