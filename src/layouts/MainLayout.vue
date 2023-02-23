<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="showHeader">
      <q-toolbar class="fundo-padrao" >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="title">
          MangaJJ Collection
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-header v-if="!showHeader">
      <q-toolbar class="fundo-padrao" >
        <q-btn
          flat
          dense
          round
          icon="arrow_back"
          aria-label="Voltar"
          @click="voltarPagina"
        />

        <q-toolbar-title class="title">
          {{ titleManga }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>
              <q-btn
                flat
                dense
                round
                icon="close"
                aria-label="Close"
                @click="toggleLeftDrawer"
              />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="sair">
          <q-item-section>
              <q-btn @click="sair" >Sair</q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="layout-container">
      <router-view />
    </q-page-container>
  </q-layout>

</template>
<script setup>
import { ref } from 'vue'
import { showHeader, titleManga } from '../js/controllers-ref/show-header.js'
import { CacheService } from '../js/services/cache.service.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const cacheService = new CacheService()
const leftDrawerOpen = ref(false)
function sair () {
  cacheService.clear()
  router.push('/')
}
function voltarPagina () {
  router.go(-1)
}
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.layout-container {
  padding-top: 0!important;
}
.title {
    font-size: 2.5rem;
    font-weight: 400;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
    margin:0 auto;
  }
</style>
