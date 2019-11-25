<template>
  <div>
    <nuxt />

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Send me a mail at <a href="mailto:contact@airthee.com">contact@airthee.com</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  @charset "utf-8";

  // Rewrite variables here
  // Set your brand colors
  $purple: #8A4D76;
  $pink: #FA7C91;
  $brown: #757763;
  $beige-light: #D0D1CD;
  $beige-lighter: #EFF0EB;

  // Update Bulma's global variables
  $family-sans-serif: "Nunito", sans-serif;
  $grey-dark: $brown;
  $grey-light: $beige-light;
  $primary: $purple;
  $link: $pink;
  $widescreen-enabled: false;
  $fullhd-enabled: false;
  $dimensions: 16 24 32 48 64 96 128 256 512;

  // Update some of Bulma's component variables
  $body-background-color: $beige-lighter;
  $control-border-width: 2px;
  $input-border-color: transparent;
  $input-shadow: none;

  @import "@/node_modules/bulma/bulma.sass";
</style>
