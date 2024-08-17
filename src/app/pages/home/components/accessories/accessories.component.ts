import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { Accessories } from '../../../../shared/interfaces/accessories';
import { BtnBlueComponent } from '../../../../core/components/buttons/btn-blue/btn-blue.component';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [BtnBlueComponent],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,],
})
export class AccessoriesComponent implements OnInit{

  swiperElement = signal<SwiperContainer | null>(null);
  swiperElement2 = signal<SwiperContainer | null>(null);

  // CONTAINER SWIPER 1
  configSwiper() {
    const swiperElementConstructor = document.querySelector('.accessories');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      speed: 500,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }

  // CONTAINER SWIPER 2
  configSwiper2() {
    const swiperElementConstructor2 = document.querySelector('.accessories2');
    const swiperOptions2: SwiperOptions = {
      slidesPerView: 'auto',
      navigation: true,
      pagination: {
        enabled: true,
        clickable: true,
      },
      injectStyles: [
        `
          .swiper-button-next {
            top: 80px;
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
            top: 80px;
            margin-left: 50px;
            background: var(--btn-blue);
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .swiper-pagination {
            position: relative;
            margin-top: 30px;
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

    Object.assign(swiperElementConstructor2!, swiperOptions2);
    this.swiperElement2.set(swiperElementConstructor2 as SwiperContainer);
    this.swiperElement2()?.initialize();
  }

  public Accessories: Accessories[] = [
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Console PlayStation 5',
      span: 'Descubra a mais nova geração de jogos incríveis para PlayStation.',
      img: 'assets/accessories/ps5.webp',
      imgMini: 'assets/accessories/mini/ps5.png',
      titleMini: 'Console PS5',
    },
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Controle sem fio DualSense',
      span: 'Mergulhe na experiência de jogo com um controle que suporta resposta tátil e efeitos de gatilho dinâmicos.',
      img: 'assets/accessories/dualsense.webp',
      imgMini: 'assets/accessories/dualsense.png',
      titleMini: 'Controle sem fio DualSense',
    },
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Headset sem fio PULSE Elite',
      span: 'Ouça áudio de jogos mais realista neste modelo de headset confortável e equipado com microfone retrátil e bateria embutida de longa duração.',
      img: 'assets/accessories/pulseelite.webp',
      imgMini: 'assets/accessories/pulseelite.png',
      titleMini: 'Headset sem fio PULSE Elite',
    },
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Fones de ouvido sem fio PULSE Explore',
      span: 'Curta sons realistas aonde quer que os jogos levem você com um design portátil equipado com microfones ocultos e um estojo de carregamento para acompanhar.',
      img: 'assets/accessories/pulseexplore.webp',
      imgMini: 'assets/accessories/pulseexplore.png',
      titleMini: 'Fones sem fio PULSE Explore',
    },
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Controle sem fio DualSense Edge',
      span: 'Entre com tudo nos jogos com botões remapeáveis, gatilhos e controles ajustáveis, diferentes capas para controle analógico, botões traseiros e mais.',
      img: 'assets/accessories/controledge.webp',
      imgMini: 'assets/accessories/controledge.png',
      titleMini: 'DualSense Edge',
    },
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Controle Access',
      span: 'Um controle personalizável para PlayStation®5 criado para tornar os jogos mais acessíveis.',
      img: 'assets/accessories/controlaccess.webp',
      imgMini: 'assets/accessories/controlaccess.png',
      titleMini: 'Controle Access',
    },
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Tampas do console PS5',
      span: 'Personalize seu console PlayStation 5 ou PlayStation 5 Edição Digital com uma variedade vibrante de novas opções de cores.',
      img: 'assets/accessories/tampas.webp',
      imgMini: 'assets/accessories/tampas.png',
      titleMini: 'Tampas do console PS5',
    },
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Controle de mídia',
      span: 'Conveniência e um layout intuitivo para você controlar filmes, serviços de streaming e muito mais no seu console PS5.',
      img: 'assets/accessories/midia.webp',
      imgMini: 'assets/accessories/midia.png',
      titleMini: 'Controle de mídia',
    },
    {
      title: 'Apresentamos o console PS5 e seus acessórios',
      subTitle: 'Câmera HD',
      span: 'Adicione sua própria imagem aos vídeos de jogabilidade e transmissões com uma captura suave, nítida e Full HD.',
      img: 'assets/accessories/camera.webp',
      imgMini: 'assets/accessories/camera.png',
      titleMini: 'Câmera HD',
    },
  ]

  ngOnInit(): void {
      this.configSwiper();
      this.configSwiper2();
  }

}
