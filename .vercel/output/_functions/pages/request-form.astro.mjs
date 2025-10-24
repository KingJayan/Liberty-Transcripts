import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bf5EEhKV.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Drlp1_B2.mjs';
import { mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'TranscriptRequestForm',
  setup(__props, { expose: __expose }) {
  __expose();

const formData = ref({
  name: '',
  email: '',
  phone: '',
  caseNumber: '',
  court: '',
  hearingDate: '',
  details: ''
});

const isSubmitting = ref(false);
const submitStatus = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = '';

  try {
    const response = await fetch('/api/submit-transcript-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      submitStatus.value = 'success';
      formData.value = {
        name: '',
        email: '',
        phone: '',
        caseNumber: '',
        court: '',
        hearingDate: '',
        details: ''
      };
    } else {
      submitStatus.value = 'error';
    }
  } catch (error) {
    console.error('Submission error:', error);
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
};

const __returned__ = { formData, isSubmitting, submitStatus, handleSubmit, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-container" }, _attrs))} data-v-ff991b89><form class="transcript-form" data-v-ff991b89>`);
  if ($setup.submitStatus === 'success') {
    _push(`<div class="success-message" data-v-ff991b89><p data-v-ff991b89><strong data-v-ff991b89>Thank you!</strong> Your transcript request has been submitted successfully. We will contact you soon.</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.submitStatus === 'error') {
    _push(`<div class="error-message" data-v-ff991b89><p data-v-ff991b89><strong data-v-ff991b89>Error:</strong> There was a problem submitting your request. Please try again or contact us directly at dbpatel1180@gmail.com.</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="form-group" data-v-ff991b89><label for="name" data-v-ff991b89>Name <span class="required" data-v-ff991b89>*</span></label><input type="text" id="name"${
    ssrRenderAttr("value", $setup.formData.name)
  } required data-v-ff991b89></div><div class="form-group" data-v-ff991b89><label for="email" data-v-ff991b89>Email <span class="required" data-v-ff991b89>*</span></label><input type="email" id="email"${
    ssrRenderAttr("value", $setup.formData.email)
  } required data-v-ff991b89></div><div class="form-group" data-v-ff991b89><label for="phone" data-v-ff991b89>Phone Number</label><input type="tel" id="phone"${
    ssrRenderAttr("value", $setup.formData.phone)
  } data-v-ff991b89></div><div class="form-group" data-v-ff991b89><label for="caseNumber" data-v-ff991b89>Case Number <span class="required" data-v-ff991b89>*</span></label><input type="text" id="caseNumber"${
    ssrRenderAttr("value", $setup.formData.caseNumber)
  } required data-v-ff991b89></div><div class="form-group" data-v-ff991b89><label for="court" data-v-ff991b89>Court/Jurisdiction <span class="required" data-v-ff991b89>*</span></label><input type="text" id="court"${
    ssrRenderAttr("value", $setup.formData.court)
  } required data-v-ff991b89></div><div class="form-group" data-v-ff991b89><label for="hearingDate" data-v-ff991b89>Hearing/Proceeding Date</label><input type="date" id="hearingDate"${
    ssrRenderAttr("value", $setup.formData.hearingDate)
  } data-v-ff991b89></div><div class="form-group" data-v-ff991b89><label for="details" data-v-ff991b89>Additional Details</label><textarea id="details" rows="5" placeholder="Please provide any additional information about your transcript request" data-v-ff991b89>${
    ssrInterpolate($setup.formData.details)
  }</textarea></div><button type="submit"${
    (ssrIncludeBooleanAttr($setup.isSubmitting)) ? " disabled" : ""
  } class="submit-button" data-v-ff991b89>${
    ssrInterpolate($setup.isSubmitting ? 'Submitting...' : 'Submit Request')
  }</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/TranscriptRequestForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const TranscriptRequestForm = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-ff991b89"]]);

const $$RequestForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Bankruptcy Transcript Request | Liberty Transcripts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w3-container" style="background-color:white;"> <h1 class="w3-raleway w3-xxxlarge">Transcript Request Form</h1> </div> <br> <p style="text-align: center;">Please fill out the form below to request a bankruptcy transcript. All fields marked with <span style="color: red;">*</span> are required.</p> <br> ${renderComponent($$result2, "TranscriptRequestForm", TranscriptRequestForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/workspace/src/components/TranscriptRequestForm.vue", "client:component-export": "default" })} <br> ` })}`;
}, "/home/runner/workspace/src/pages/request-form.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/request-form.astro";
const $$url = "/request-form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RequestForm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
