<div class="gallery-wrapper">
  <div class="swiper-container insight">
    <div class="swiper-wrapper">
      @php
        $photos = get_field('gallery')
      @endphp
      @foreach($photos as $photo)
        <div class="swiper-slide">
          <img
            class="swiper-lazy"
            data-src="{!! wp_get_attachment_image_src($photo['ID'], 'large')[0] !!}"
            data-srcset="{!! wp_get_attachment_image_srcset($photo['ID'], 'large') !!}"
            sizes="100vw"
          />
          <div class="swiper-lazy-preloader"></div>
        </div>
      @endforeach
    </div>
  </div>
</div>