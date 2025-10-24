import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bf5EEhKV.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Drlp1_B2.mjs';
export { renderers } from '../renderers.mjs';

const $$Bios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Management Bios | Liberty Transcripts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w3-container" style="background-color:white;"> <h1 class="w3-raleway w3-xxxlarge">Management Bios</h1> </div> <h3>Dipti Patel, Founder</h3> <p>Liberty Transcripts was founded by Dipti Patel. Her educational background consists of a Bachelor of Science from Middle Tennessee State University with a major in Political Science and a double minor in Paralegal Studies and Business Administration. After her college career, Dipti worked for various law firms in the Middle Tennessee area. All of this training and experience has laid a firm foundation for her success in the legal transcription industry.</p> <br> <p>Dipti has been a member in good standing with the American Association of Electronic Reporters and Transcribers (AAERT) since 2015. She obtained her certification as a Certified Electronic Transcriber (CET) in 2017. Since 2015, Dipti has gained experience in various state and federal jurisdictions; however, her passion is in the area of federal bankruptcy.</p> <br> <p>Finally, Dipti supports the AAERT certification process by serving on the CET Practical Examination Grading Committee. She also volunteers her time providing meals to a halfway home in Austin, Texas.</p> <br> <br> ` })}`;
}, "/home/runner/workspace/src/pages/bios.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/bios.astro";
const $$url = "/bios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
