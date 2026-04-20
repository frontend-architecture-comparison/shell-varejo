import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

const CARRINHO_STORAGE_KEY = 'carrinho:itens';
const CARRINHO_ATUALIZADO_EVENT = 'carrinho:atualizado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private currentUrl = this.router.url;
  private routeSubscription?: Subscription;
  private onCarrinhoAtualizado?: EventListener;
  private onStorage?: (event: StorageEvent) => void;
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
    this.atualizarQuantidadeCarrinho();

    this.routeSubscription = this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => this.router.url),
      )
      .subscribe((url) => {
        this.currentUrl = url;
      });

    if (typeof window !== 'undefined') {
      this.onCarrinhoAtualizado = () => this.atualizarQuantidadeCarrinho();
      this.onStorage = (event: StorageEvent) => {
        if (event.key === CARRINHO_STORAGE_KEY) {
          this.atualizarQuantidadeCarrinho();
        }
      };

      window.addEventListener(CARRINHO_ATUALIZADO_EVENT, this.onCarrinhoAtualizado);
      window.addEventListener('storage', this.onStorage);
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();

    if (typeof window !== 'undefined') {
      if (this.onCarrinhoAtualizado) {
        window.removeEventListener(CARRINHO_ATUALIZADO_EVENT, this.onCarrinhoAtualizado);
      }

      if (this.onStorage) {
        window.removeEventListener('storage', this.onStorage);
      }
    }
  }

  goToCart(): void {
    this.router.navigate(['/carrinho']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  private atualizarQuantidadeCarrinho(): void {
    if (typeof window === 'undefined') {
      this.cartQuantidade = 0;
      return;
    }

    const conteudo = window.localStorage.getItem(CARRINHO_STORAGE_KEY);

    if (!conteudo) {
      this.cartQuantidade = 0;
      return;
    }

    try {
      const itens = JSON.parse(conteudo) as Record<string, number>;

      this.cartQuantidade = Object.values(itens).reduce(
        (total: number, quantidadeItem: number) =>
          total + (Number.isFinite(quantidadeItem) && quantidadeItem > 0 ? quantidadeItem : 0),
        0,
      );
    } catch {
      this.cartQuantidade = 0;
    }
  }
}
