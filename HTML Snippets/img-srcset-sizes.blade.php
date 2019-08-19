// where $person['portraitbild'] == ACF image field, returning array with img url and img id
// available wordpress image sizes constants: medium (300px), large (1024) and full
<img
  class="generic-margin-bottom"
  src="{!! wp_get_attachment_image_src($person['portraitbild']['ID'], 'large')[0] !!}"
  data-srcset="{!! wp_get_attachment_image_srcset($person['portraitbild']['ID'], 'large') !!}"
  sizes="(max-width: 768px) 100vw,50vw"
/>