import { initWild } from "./core/engine.js";

// OCARINA WILD 2.0 — entrada única del motor.
// La complejidad vive en módulos; la interfaz permanece simple.
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initWild);else initWild();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
