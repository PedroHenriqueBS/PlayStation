import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Categorias } from '../../../../shared/interfaces/categorias';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public logoSony: string = 'assets/logos/logoSony.webp';
  public logoAltSony: string = 'Logo da marca sony';

  public menuDrowDown: Categorias[] = [
    {
      id: 1,
      img: ['assets/icons-header/play5.webp', 'assets/icons-header/play4.webp', 'assets/icons-header/vr.webp', 'assets/icons-header/pc.webp', 'assets/icons-header/Plus.webp'],
      nameImg: ['PS5', 'PS4', 'PS VR2', 'PC', 'PS Plus'],
      name: 'Jogos',
      description: ['Explorar por Gênero', 'PlayStation Indies', 'Grátis para Jogar', 'Ofertas e promoções'],
    },
    {
      id: 2,
      img: ['assets/icons-header/play5.webp', 'assets/icons-header/jogos.webp', 'assets/icons-header/controle.webp', 'assets/icons-header/vr.webp', 'assets/icons-header/audio.webp'],
      nameImg: ['Console', 'Jogos', 'Controles', 'PS VR2', 'Áudio'],
      name: 'PS5',
      description: [''],
    },
    {
      id: 3,
      img: ['assets/icons-header/play4.webp', 'assets/icons-header/jogos.webp', 'assets/icons-header/controle.webp', 'assets/icons-header/audio.webp'],
      nameImg: ['Console', 'Jogos', 'Controles', 'Headsets'],
      name: 'PS4',
      description: [''],
    },
    {
      id: 4,
      img: ['assets/icons-header/Plus.webp', 'assets/icons-header/star.webp'],
      nameImg: ['PS Plus', 'PS Stars'],
      name: 'Serviços',
      description: ['Entretenimento no PS5', 'Entretenimento no PS4'],
    },
    {
      id: 5,
      img: ['assets/icons-header/controle.webp', 'assets/icons-header/remoto.webp', 'assets/icons-header/vr.webp', 'assets/icons-header/audio.webp', 'assets/icons-header/all.webp'],
      nameImg: ['Controles de PS5', 'Reprodutor remoto', 'PS VR2', 'Áudio', 'Todos os acessórios'],
      name: 'Acessórios',
      description: ['Controle DualSense', 'Controle DualSense Edge', 'PULSE Elite', 'PULSE Explore'],
    },
    {
      id: 6,
      img: ['assets/icons-header/blog.webp', 'assets/icons-header/date.webp'],
      nameImg: ['PS Blog', 'Mês Playstation'],
      name: 'Notícias',
      description: ['Central de competições', 'Acessibilidade', 'Privacidade e segurança'],
    },
    {
      id: 7,
      img: ['assets/icons-header/store.webp', 'assets/icons-header/Plus.webp'],
      nameImg: ['Comprar jogos', 'Assinar o PS Plus'],
      name: 'Loja',
      description: ['Novos Lançamentos', 'Descontos mais recentes', 'Coleções', 'Comprar um vale-presente', 'Assinar o PS Plus'],
    },
    {
      id: 8,
      img: ['assets/icons-header/support.webp', 'assets/icons-header/status.webp'],
      nameImg: ['Suporte', 'Status da PSN'],
      name: 'Suporte',
      description: ['Conta', 'Loja', 'Serviços em camadas', 'Jogos', 'Hardware', 'Segurança online'],
    },
  ];

  public openObjectId: number | null = null;
  public activeButton: number | null = null;

  activeMenu(item: number) {
    if(this.openObjectId === item) {
      this.openObjectId = null
    } else {
      this.openObjectId = item;
    }
  }

  toggleRotate(item: number): void {
    this.activeButton = this.activeButton === item ? null : item;
  }

  isActive(item: number): boolean {
    return this.activeButton === item;
  }
}
