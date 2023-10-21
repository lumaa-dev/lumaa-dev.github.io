import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from "vue"
import HomeView from '../views/HomeView.vue'
import UnknownSmpView from '@/views/UnknownSmpView.vue';
import BrandView from '@/views/BrandView.vue';
import ModsView from '@/views/ModsView.vue';
import TicTacView from '@/views/TicTacView.vue';
import RedirectView from '@/views/RedirectView.vue';
import NotFoundView from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: "Lumaa"
    },
    component: HomeView
  },
  {
    path: '/unknownsmp',
    name: 'unknownsmp',
    meta: {
      title: "Unknown SMP"
    },
    component: UnknownSmpView
  },
  {
    path: '/tictac',
    name: 'TicTac',
    meta: {
      title: "TicTac"
    },
    component: TicTacView
  },
  {
    path: '/mods',
    name: 'mods',
    meta: {
      title: "Lumaa - Mods"
    },
    component: ModsView
  },
  {
    path: '/branding',
    name: 'brand',
    component: BrandView
  },
  {
    path: '/redirect',
    name: "redirect",
    meta: {
      title: "Redirecting..."
    },
    component: RedirectView
  },
  {
    path: '/:pathMatch(.*)',
    name: "404",
    meta: {
      title: "Lumaa - 404"
    },
    component: NotFoundView
  }
]

const redirect = (url) => {
  return "/redirect?url=" + url
}

const customRedirections = [
  {
    path: "/support",
    redirect: redirect("https://discord.gg/Rqpn3C7yR5")
  },
  {
    path: "/community",
    redirect: redirect("https://discord.gg/jQ2XcVbpbQ")
  },
  {
    path: "/twitch",
    redirect: redirect("https://twitch.tv/lumaa_dev")
  },
  {
    path: "/youtube",
    redirect: redirect("https://youtube.com/@lumaa_dev")
  },
  {
    path: "/tiktok",
    redirect: redirect("https://tiktok.com/@lumaa_dev")
  },
  {
    path: "/instagram",
    redirect: redirect("https://instagram.com/lumaa_dev")
  },
  {
    path: "/github",
    redirect: redirect("https://github.com/lumaa-dev")
  },
  {
    path: "/v-fast",
    alias: "/vfast",
    redirect: redirect("https://github.com/v-fast")
  },
  {
    path: "/modrinth",
    redirect: redirect("https://modrinth.com/user/Lumaa")
  },
  {
    path: "/email",
    redirect: redirect("mailto:lumaa@lumaa.fr")
  }
]

routes.push(...customRedirections)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const DEFAULT_TITLE = 'Lumaa';
router.afterEach((to) => {
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
