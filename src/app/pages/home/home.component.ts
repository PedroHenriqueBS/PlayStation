import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { BtnWhiteComponent } from "../../core/components/buttons/btn-white/btn-white.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BtnWhiteComponent],
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
        delay: 4000,
      }
    };

    Object.assign(swiperElementConstructor!, swiperOptions)
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize()
  }

  // CONTAINER SWIPER 2

  configSwiper2() {
    const swiperElementConstructor2 = document.querySelector('.swiper2');
    const swiperOptions2: SwiperOptions = {
     slidesPerView: 5,
    };

    Object.assign(swiperElementConstructor2!, swiperOptions2)
    this.swiperElement2.set(swiperElementConstructor2 as SwiperContainer);
    this.swiperElement2()?.initialize()
  }

  ngOnInit(): void {
      this.configSwiper();
      this.configSwiper2();
  }
}
