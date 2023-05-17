import { Router } from "./routes.js";

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/theuniverse", "/pages/the-universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

// console.log(router.routes);