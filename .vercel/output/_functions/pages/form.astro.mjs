import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bf5EEhKV.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Drlp1_B2.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Upload Audio | Liberty Transcripts", "data-astro-cid-xb3inwvi": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="w3-container" style="background-color:#FFFFFF;" data-astro-cid-xb3inwvi> <h1 class="w3-raleway w3-xxxlarge" data-astro-cid-xb3inwvi>Upload Audio</h1> </div> <div style="text-align:center;" data-astro-cid-xb3inwvi> <p class="w3-raleway" data-astro-cid-xb3inwvi><b data-astro-cid-xb3inwvi>To securely upload your audio files, please follow the steps below:</b></p> <ol data-astro-cid-xb3inwvi> <li style="text-align:center;" data-astro-cid-xb3inwvi>1. Enter your e-mail address in the "Sender's e-mail" box.</li> <li style="text-align:center;" data-astro-cid-xb3inwvi>2. In the "Message" box, enter relevant information about the recording, i.e. recording date, case name, participants (including judge's name), location, contact information, etc.</li> <li style="text-align:center;" data-astro-cid-xb3inwvi>3. Use the "Upload file" button to select the file(s) from your computer that you wish to upload.</li> <li style="text-align:center;" data-astro-cid-xb3inwvi>4. Repeat Step 3 to add up to 5 files per upload. For a large number of files, consider zipping them into one file.</li> <li style="text-align:center;" data-astro-cid-xb3inwvi>5. When you're ready to send the file(s), <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dbpatel1180@gmail.com&su=Password Request&body=Password Request" target="_blank" data-astro-cid-xb3inwvi>contact us for the password</a></li> <li style="text-align:center;" data-astro-cid-xb3inwvi>6. Once you've entered in the password, click the SendThisFile button. When the file is successfully uploaded, SendThisFile will notify us via email of your completed upload.</li> </ol> </div> <br data-astro-cid-xb3inwvi> <br data-astro-cid-xb3inwvi> <div class="iframe-container" data-astro-cid-xb3inwvi> <iframe scrolling="yes" src="https://www.sendthisfile.com/f.jsp?id=WWSB1cGU6niIBUy9hHAHcMkd" data-astro-cid-xb3inwvi></iframe> </div> <br data-astro-cid-xb3inwvi> ` })}`;
}, "/home/runner/workspace/src/pages/form.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/form.astro";
const $$url = "/form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Form,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
