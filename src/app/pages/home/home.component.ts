import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { BtnWhiteComponent } from "../../core/components/buttons/btn-white/btn-white.component";
import { SlideSwiper } from '../../shared/interfaces/slideSwiper';
import { AccessoriesComponent } from '../../core/components/accessories/accessories.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BtnWhiteComponent, AccessoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,],
})

export class HomeComponent implements OnInit{

  swiperElement = signal<SwiperContainer | null>(null);
  swiperElement2 = signal<SwiperContainer | null>(null);

  // CONTAINER SWIPER 1
  configSwiper() {
    const swiperElementConstructor = document.querySelector('.swiper');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      parallax: true,
      speed: 1500,
      autoplay: {
        delay: 4500,
      },
      effect: 'fade',
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();

  }

  // CONTAINER SWIPER 2
  configSwiper2() {
    const swiperElementConstructor2 = document.querySelector('.swiper2');
    const swiperOptions2: SwiperOptions = {
     slidesPerView: 5,
    };

    Object.assign(swiperElementConstructor2!, swiperOptions2);
    this.swiperElement2.set(swiperElementConstructor2 as SwiperContainer);
    this.swiperElement2()?.initialize();
  }

  public slideSwiper: SlideSwiper[] = [
    {
      imgFundo: 'assets/slides/nba.jpg',
      imgMiniatura: 'assets/slides/miniaturas/nba.jpg',
      imgTitle: 'assets/slides/logo/nba.png',
      title: 'Jogue onde estiver, ganhe em todo lugar',
      subTitle: 'Acumule vitórias, desbloqueie banners e faça história no NBA 2k25. Em breve no PS4 e PS5.',
      button: 'Saiba mais',
    },
    {
      imgFundo: 'assets/slides/fifa.webp',
      imgMiniatura: 'assets/slides/miniaturas/fifa.png',
      imgTitle: 'assets/slides/logo/fifa25.png',
      title: 'Pelo clube',
      subTitle: 'Tenha mais controle tático do que nunca com o FC IQ e junte-se a seus amigos em novos modos de jogo, disponível em breve no PS5 e PS4',
      button: 'Já em pré-venda'
    },
    {
      imgFundo: 'assets/slides/spider.webp',
      imgMiniatura: 'assets/slides/miniaturas/spider.webp',
      imgTitle: 'assets/slides/logo/spider.png',
      title: 'Sejam melhores juntos',
      subTitle: 'Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel Spider-Man para PS5.',
      button: 'Saiba mais',
    },
    {
      imgFundo: 'assets/slides/astrof.webp',
      imgMiniatura: 'assets/slides/miniaturas/astro.png',
      imgTitle: 'assets/slides/logo/astrobot.png',
      subTitle: 'Entre em uma nova aventura tamanho gigante espalhada por 50 mundos variados e empolgantes com ASTRO.',
      button: 'Jogar a versão beta',
    },
    {
      imgFundo: 'assets/slides/summer.webp',
      imgMiniatura: 'assets/slides/miniaturas/summer.webp',
      imgTitle: 'assets/slides/logo/summer.png',
      title: 'Fique por dentro das novidades',
      subTitle: 'Aproveite essas ofertas de promoção de inverno agora mesmo na PlayStore',
      button: 'Navegar pelos jogos',
    },
  ];

  ngOnInit(): void {
      this.configSwiper();
      this.configSwiper2();
  }
}
