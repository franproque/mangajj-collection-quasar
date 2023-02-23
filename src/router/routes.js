
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'listcollection',
        component: () => import('pages/ListagemCollection.vue'),
        meta: {
          middleware: 'auth'
        }
      },
      {
        path: 'manga-detalhes/:id',
        name: 'manga-detalhes',
        component: () => import('pages/MangaDetalhes.vue'),
        meta: {
          middleware: 'auth'
        }
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/CleanLayout.vue'),
    children: [
      {
        path: '',
        name: 'login-usuario',
        component: () => import('pages/LoginUsuario.vue'),
        meta: {
          middleware: 'guest'
        }
      },
      {
        path: 'cadastro',
        component: () => import('pages/CadastroUsuario.vue'),
        meta: {
          middleware: 'guest'
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
