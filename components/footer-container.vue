<template lang="html">
  <v-footer
    class="pa-3"
    color="#303030"
    height="auto"
    dark
  >
    <v-layout
      justify-center
      align-center
      row
      wrap
    >
      <v-flex
        xs3
        offset-xs1>
        <div class="caption">
          <h2 class="header-text">Копирование материалов</h2>
          <div class="paragraph">
            Свободное копирование и распространение материалов с сайта Norberg разрешено только с
            указанием активной ссылки на Norberg как на источник. Указание ссылки также является
            обязательным при копировании материалов в социальные сети или печатные издания.
          </div>
        </div>
      </v-flex>
      <v-spacer/>
      <v-flex xs3>
        <div class="caption">
          <h2 class="header-text">О проекте</h2>
          <div class="paragraph">
            СМИ Norberg - информационный ресурс о криптовалютах, блокчейне и децентрализованных технологиях.
            Мы работаем для вас с 2018 года.
            &copy; {{ new Date().getFullYear() }}
          </div>
        </div>
      </v-flex>
      <v-spacer/>
      <v-flex xs2>
        <div>
          <a href="#">
            <h3 class="header-text">
              Контакты
            </h3>
          </a>
          <a href="#">
            <h3 class="header-text">
              Информация
            </h3>
          </a>
          <a href="#">
            <h3 class="header-text">
              Саптаныч
            </h3>
          </a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.header-text
  margin-bottom: 0.2rem

.paragraph
  color: rgb(162, 162, 162)
</style>
