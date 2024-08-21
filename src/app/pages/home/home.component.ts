import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { BtnWhiteComponent } from "../../core/components/buttons/btn-white/btn-white.component";
import { SlideSwiper } from '../../shared/interfaces/slideSwiper';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { gamesList } from '../../shared/interfaces/games';
import { CommonModule } from '@angular/common';
import { BtnBlueComponent } from "../../core/components/buttons/btn-blue/btn-blue.component";
import { slidesUpdate } from '../../shared/interfaces/slidesUpdate';
import { BtnOrangeComponent } from "../../core/components/buttons/btn-orange/btn-orange.component";
import { store } from '../../shared/interfaces/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BtnWhiteComponent, AccessoriesComponent, BtnBlueComponent, BtnOrangeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,],
})

export class HomeComponent implements OnInit{

  swiperElementHeader = signal<SwiperContainer | null>(null);
  swiperElementAccessories = signal<SwiperContainer | null>(null);
  swiperElementPlus = signal<SwiperContainer | null>(null);
  swiperElementUpdate = signal<SwiperContainer | null>(null);
  swiperElementStore = signal<SwiperContainer | null>(null);

  // CONTAINER SWIPER HEADER
  configSwiperHeader() {
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
    this.swiperElementHeader.set(swiperElementConstructor as SwiperContainer);
    this.swiperElementHeader()?.initialize();

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

  // CONTAINER SWIPER ACCESSORIES
  configSwiperAccessories() {
    const swiperElementConstructor2 = document.querySelector('.swiper2');
    const swiperOptions2: SwiperOptions = {
     slidesPerView: 5,
    };

    Object.assign(swiperElementConstructor2!, swiperOptions2);
    this.swiperElementAccessories.set(swiperElementConstructor2 as SwiperContainer);
    this.swiperElementAccessories()?.initialize();
  }

  // CONTAINER SWIPER PLUS
  configSwiperPlus() {
    const swiperElementConstructor = document.querySelector('.swiperPlus');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 2,
      navigation: true,
      pagination: {
        enabled: true,
        clickable: true,
      },
      speed: 500,
      loop: true,
      initialSlide: 1,
      centeredSlides:true,
      spaceBetween: 20,
      injectStyles: [
        `
          .swiper-button-next {
            margin-right: 50px;
            background: var(--btn-blue);
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: var(--btn-blue-hover);
          }

          .swiper-button-next svg, .swiper-button-prev svg {
            color: white;
            width: 10px;
          }

          .swiper-button-prev {
            margin-left: 50px;
            background: var(--btn-blue);
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .swiper-pagination {
            position: relative;
            margin-top: 20px;
          }

          .swiper-pagination-bullet {
            border-radius: 5px;
            width: 15px;
            height: 2px;
          }

          .swiper-pagination-bullet-active {
            background-color: var(--btn-blue-hover);
          }

        `,
      ],
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElementPlus.set(swiperElementConstructor as SwiperContainer);
    this.swiperElementPlus()?.initialize();
  }

  // CONTAINER SWIPER UPDATE
  configSwiperUpdate(){
    const swiperElementConstructor = document.querySelector('.swiper-update');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 3,
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElementUpdate.set(swiperElementConstructor as SwiperContainer);
    this.swiperElementUpdate()?.initialize();
  }

  // CONTAINER SWIPER STORE
  configSwiperStore(){
    const swiperElementConstructor = document.querySelector('.swiper-store');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 3.5,
      navigation: true,
      pagination: {
        enabled: true,
        clickable: true,
      },
      spaceBetween: 20,
      centeredSlides: true,
      centeredSlidesBounds: true,
      initialSlide: 2,
      speed: 500,
      grabCursor: true,
      injectStyles: [
        `
          .swiper-button-next {
            top: 150px;
            margin-right: 50px;
            background: var(--btn-blue);
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: var(--btn-blue-hover);
          }

          .swiper-button-next svg, .swiper-button-prev svg {
            color: white;
            width: 10px;
          }

          .swiper-button-prev {
          top: 150px;
            margin-left: 50px;
            background: var(--btn-blue);
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .swiper-pagination {
            position: relative;
            margin-top: 20px;
          }

          .swiper-pagination-bullet {
            border-radius: 5px;
            width: 15px;
            height: 2px;
          }

          .swiper-pagination-bullet-active {
            background-color: var(--btn-blue-hover);
          }

        `,
      ],

    }

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElementStore.set(swiperElementConstructor as SwiperContainer);
    this.swiperElementStore()?.initialize();
  }

  public listStore: store[] = [
    {
      img: 'assets/store/store1.webp',
      title: 'Jogada da Semana: Dia dos Pais',
      description: 'Na semana dos pais, não podíamos deixar de homenagear os maiores heróis de nossas vidas. Confira abaixo as imagens para o Dia dos Pais de nossa comunidade:',
      miniaturaImg: 'assets/store/miniatura/mini1.webp',
      name: 'Thaíla Correia',
      location: 'Digital Media Manager, PlaySation Brazil',
      date: 'Aug 16, 2024',
    },
    {
      img: 'assets/store/store2.webp',
      title: 'Detalhes completos sobre a atualização Marvel x Fortnite, que chega com o Capítulo 5 Temporada 4: Destino Apocalíptico, disponível hoje',
      description: 'Depois de obter o devastador poder da Caixa de Pandora, o tirano e agora diabólico Doutor Destino se instalou de vez na Ilha do Battle Royale.',
      miniaturaImg: 'assets/store/miniatura/mini2.webp',
      name: 'Molly Dyer',
      location: 'Marketing Manager, Epic Games',
      date: 'Aug 16, 2024',
    },
    {
      img: 'assets/store/store3.webp',
      title: 'Concord: detalhes sobre as configurações de acessibilidade',
      description: 'Está quase na hora de chamar sua tripulação e entrar na fila para jogar Concord*. Além do lançamento, também estamos muito felizes de compartilhar com vocês todas as opções de acessibilidade que estarão disponíveis. ',
      miniaturaImg: 'assets/store/miniatura/mini3.webp',
      name: 'Prof Brown',
      location: 'Principal Gameplay Designer - Firewalk',
      date: 'Aug 16, 2024',
    },
    {
      img: 'assets/store/store4.webp',
      title: 'Genshin Impact apresenta a sexta grande nação de Teyvat com a versão 5.0, disponível em 28 de agosto',
      description: 'Saudações, Viajantes! Como Genshin Impact logo entrará em seu quinto ano, chegaremos finalmente a Natlan, a sexta maior nação em Teyvat, conforme a Versão 5.0 “Jornada das Flores de Glória e Dias Flamejantes” chega no dia 28 de agosto.',
      miniaturaImg: 'assets/store/miniatura/mini4.webp',
      name: 'Zhenzhong Yi',
      location: 'Studio Technical Director, miHoYo',
      date: 'Aug 16, 2024',
    },
    {
      img: 'assets/store/store5.webp',
      title: 'Detalhes sobre novos jogos indie que chegarão para PlayStation',
      description: 'Espero que todos estejam jogando horas a fio por dia neste verão! Hoje, apresentamos quatros títulos indie que chegarão ao PlayStation e esperamos incentivar os jogadores a tentar algo novo.',
      miniaturaImg: 'assets/store/miniatura/mini5.webp',
      name: 'Shuhei Yoshida',
      location: 'Head of PlayStation Indies',
      date: 'Aug 15, 2024',
    },
    {
      img: 'assets/store/store6.webp',
      title: 'Persona 3 Reload Episódio Aigis: A Resposta chega em 10 de setembro – prévia do gameplay',
      description: 'Você passou dezenas de horas no Tártaro, alcançou o máximo de vínculos sociais e finalmente conquistou todos os desafios que Persona 3 Reload tem a oferecer… ou pelo menos era o que você pensava.',
      miniaturaImg: 'assets/store/miniatura/mini6.webp',
      name: 'Heidi Kemps (ela/dela)',
      location: 'PlayStation Blog Correspondent',
      date: 'Aug 15, 2024',
    },
    {
      img: 'assets/store/store7.webp',
      title: 'Novidades do Catálogo de Jogos PlayStation Plus de agosto: The Witcher 3: Wild Hunt, Wild Hearts, Cult of the Lamb e muito mais',
      description: 'Embarque em uma lendária aventura de fantasia sombria, misture tecnologia e monstros em caçadas emocionantes, crie uma comunidade de adoradores da floresta, participe de corridas em duas rodas e muito mais com o Catálogo de Jogos PlayStation Plus de agosto!',
      miniaturaImg: 'assets/store/miniatura/mini5.webp',
      name: 'Adam Michel',
      location: 'Director, Content Acquisition & Operations, SIE',
      date: 'Aug 14, 2024',
    },
    {
      img: 'assets/store/store8.webp',
      title: 'Until Dawn, refeito e melhorado para PS5 e PC, chega em 4 de outubro de 2024',
      description: 'Bem-vindos de volta, fãs e amigos! Em 2015, Until Dawn se consolidou como um título definidor de gêneros, roubando muitos dos nossos corações, por conta da rede de decisões interconectadas, ramificações diversas, personagens memoráveis e uma história instigante e muitas vezes aterrorizante.',
      miniaturaImg: 'assets/store/miniatura/mini8.webp',
      name: 'Dan Lodge',
      location: 'Game Director, Ballistic Moon',
      date: 'Aug 14, 2024',
    },
    {
      img: 'assets/store/store9.webp',
      title: 'Concord: lançamento e a aventura pela frente',
      description: 'Com o lançamento de Concord em 23 de agosto, gostaríamos de falar um pouco sobre a aventura que está por vir. Para nós, o lançamento é apenas o começo. ',
      miniaturaImg: 'assets/store/miniatura/mini9.webp',
      name: 'Ryan Ellis',
      location: 'Game Director, Firewalk Studios',
      date: 'Aug 13, 2024',
    },
  ]

  // BUTTON GAMES LIST
  public button: number = 1;
  isOpen(id: number): void{
    const btn = document.querySelector('#btn');
    const btn2 = document.querySelector('#btn2');

    if(id == 1){
      this.button = 1;
      this.buttonOpen = null;
      btn?.classList.add('active');
      btn?.classList.remove('disable');
      btn2?.classList.add('disable');
    }

    if(id == 2) {
      this.button = 2;
      this.buttonOpen = null;
      btn2?.classList.add('active');
      btn2?.classList.remove('disable');
      btn?.classList.add('disable');
    }
  }

  // ARRAY GAMES LIST
  public buttonOpen: boolean | null = null;
  public gamesList: gamesList[] = [
    {
    img: 'assets/games-list/callof.jpg',
    name: 'Call of Duty: Modern Warfare III',
    imgEmbreve: 'assets/games-list/fortinite.jpg',
    nameEmbreve: 'Fortinite',
    },
    {
    img: 'assets/games-list/fifa.png',
    name: 'EA SPORTS FC™ 25',
    imgEmbreve: 'assets/games-list/game-horizon.webp',
    nameEmbreve: 'Horizon Adventures',
    },
    {
    img: 'assets/games-list/game-battle.jpg',
    name: 'Battlefield V',
    imgEmbreve: 'assets/games-list/fifa.png',
    nameEmbreve: 'EA SPORTS FC™ 25',
    },
    {
    img: 'assets/games-list/game-creed.jpg',
    name: "Assassin's Creed",
    imgEmbreve: 'assets/games-list/callof.jpg',
    nameEmbreve: 'Call of Duty: Modern Warfare III',
    },
    {
    img: 'assets/games-list/game-horizon.webp',
    name: 'Horizon Adventures',
    imgEmbreve: 'assets/games-list/spider.webp',
    nameEmbreve: "Marvel's Spider-Man 2",
    },
    {
    img: 'assets/games-list/game-ragnarok.webp',
    name: 'God of War Ragnarök',
    imgEmbreve: 'assets/games-list/fifa.png',
    nameEmbreve: 'EA SPORTS FC™ 25',
    },
    {
    img: 'assets/games-list/game-thelast.webp',
    name: 'The Last of Us Part: I',
    imgEmbreve: 'assets/games-list/fifa.png',
    nameEmbreve: 'EA SPORTS FC™ 25',
    },
    {
    img: 'assets/games-list/spider.webp',
    name: "Marvel's Spider-Man 2",
    imgEmbreve: 'assets/games-list/fifa.png',
    nameEmbreve: 'EA SPORTS FC™ 25',
    },
    {
    img: 'assets/games-list/fortinite.jpg',
    name: 'Fortinite',
    imgEmbreve: 'assets/games-list/fifa.png',
    nameEmbreve: 'EA SPORTS FC™ 25',
    },
    {
    img: 'assets/games-list/sonic.webp',
    name: 'Sonic Frontiers',
    imgEmbreve: 'assets/games-list/fifa.png',
    nameEmbreve: 'EA SPORTS FC™ 25',
    },
    {
    img: 'assets/games-list/sonic.webp',
    name: 'Sonic Frontiers',
    imgEmbreve: 'assets/games-list/fifa.png',
    nameEmbreve: 'EA SPORTS FC™ 25',
    },
    {
    img: 'assets/games-list/sonic.webp',
    name: 'Sonic Frontiers',
    imgEmbreve: 'assets/games-list/fifa.png',
    nameEmbreve: 'EA SPORTS FC™ 25',
    },
  ]

  // ARRAY SWIPER SLIDES
  public slidesUpdate: slidesUpdate[] = [
    {
      img: 'assets/update/update.webp',
      title: 'Novos lançamentos',
      description: 'Confira os maiores novos títulos do mês, incluindo Concord.',
    },
    {
      img: 'assets/update/update1.webp',
      title: 'Jogos Indie para PlayStation',
      description: 'Descubra os lançamentos indie mais inovadores e exclusivos deste mês, inluindo Cat Quest III.',
    },
    {
      img: 'assets/update/update2.webp',
      title: 'Últimas atualizações',
      description: 'Fique em dia com os maiores novos eventos do mês, incluindo a primeira atualização de the first Descendant.',
    },
  ]

  ngOnInit(): void {
    this.configSwiperHeader();
    this.configSwiperAccessories();
    this.configSwiperPlus();
    this.configSwiperUpdate();
    this.configSwiperStore();
}
}
