import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Categorias } from '../../../shared/interfaces/categorias';

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

  control = false;
  public menuDrowDown: Categorias[] = [
    {
      id: 1,
      enable: false,
      nome: 'Jogos',
      description: ['Explorar por Gênero', 'PlayStation Indies', 'Grátis para Jogar', 'Ofertas e promoções'],
      isOpen: false,
    },
    {
      id: 2,
      enable: false,
      nome: 'PS5',
      description: [''],
      isOpen: false,
    },
    {
      id: 3,
      enable: false,
      nome: 'PS4',
      description: [''],
      isOpen: false,
    },
    {
      id: 4,
      enable: false,
      nome: 'Serviços',
      description: ['Entretenimento no PS5', 'Entretenimento no PS4'],
      isOpen: false,
    },
    {
      id: 5,
      enable: false,
      nome: 'Acessórios',
      description: ['Controle DualSense', 'Controle DualSense Edge', 'PULSE Elite', 'PULSE Explore'],
      isOpen: false,
    },
    {
      id: 5,
      enable: false,
      nome: 'Notícias',
      description: ['Central de competições', 'Acessibilidade', 'Privacidade e segurança'],
      isOpen: false,
    },
    {
      id: 7,
      enable: false,
      nome: 'Loja',
      description: ['Novos Lançamentos', 'Descontos mais recentes', 'Coleções', 'Comprar um vale-presente', 'Assinar o PS Plus'],
      isOpen: false,
    },
    {
      id: 8,
      enable: false,
      nome: 'Suporte',
      description: ['Conta', 'Loja', 'Serviços em camadas', 'Jogos', 'Hardware', 'Segurança online'],
      isOpen: false,
    },
  ];

  activeMenu(item: Categorias) {
    item.isOpen = !item.isOpen;
    item.enable = !item.enable;
  }
}

