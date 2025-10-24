import { e as createComponent, f as createAstro, r as renderTemplate, l as renderSlot, n as renderHead, h as addAttribute } from './astro/server_Bf5EEhKV.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "Liberty Transcripts is a federal court-approved transcription vendor specializing in providing reliable and accurate AAERT-certified court transcripts for federal courts across the nation. When you choose Liberty Transcripts as your court transcription vendor, your transcript request is our priority." } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><title>', '</title><link rel="icon" type="image/x-icon" href="/assets/images/white-favicon.png"><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="index,follow"><link rel="stylesheet" href="/assets/stylesheets/form.css"><link rel="stylesheet" href="/assets/stylesheets/w3.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@525&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.5.1/css/all.css"><script src="/assets/scripts/scripts.js"><\/script>', '</head> <body> <div class="w3-bar" style="background: white;"> <a href="/"><img src="/assets/images/fullLogo.png" style="width:20% height:20%" alt="Full Logo"></a> <div style="margin-left: 45px; margin-top: .5%; margin-bottom: 1%;"> <a href="/" class="curved-corner w3-bar-item w3-button w3-mobile" style="width:20%;">Home</a> <a href="/form" class="curved-corner w3-bar-item w3-button w3-mobile" style="width:20%; margin-left:5px;">Upload Audio</a> <a href="/bios" class="curved-corner w3-bar-item w3-button w3-mobile" style="width:20%; margin-left:5px;">Management Bios</a> <a href="/request-form" class="curved-corner w3-bar-item w3-button w3-mobile" style="width:20%; margin-left:5px;">Bankruptcy Transcript Request</a> </div> </div> <section style="margin-top:115px;"> ', ' </section> <footer> <div class="w3-container"> <h3><b>Liberty Transcripts</b></h3> <p> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dbpatel1180@gmail.com&su=Contact&body=Hello" target="_blank">dbpatel1180@gmail.com</a> <br>\n(847) 848-4907\n</p> <br> <p>\xA92024 by Liberty Transcripts, Fontawesome icons by Fontawesome, MIT License</p> <br> </div> </footer> </body></html>'])), title, addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/runner/workspace/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
