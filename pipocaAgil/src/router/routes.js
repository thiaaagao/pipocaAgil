
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'register', name: 'PageRegister', component: () => import('../pages/Register.vue') },
      { path: 'consult', name: 'PageConsult', component: () => import('../pages/Consult.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
