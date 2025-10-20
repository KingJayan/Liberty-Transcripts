<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="transcript-form">
      <div v-if="submitStatus === 'success'" class="success-message">
        <p><strong>Thank you!</strong> Your transcript request has been submitted successfully. We will contact you soon.</p>
      </div>
      
      <div v-if="submitStatus === 'error'" class="error-message">
        <p><strong>Error:</strong> There was a problem submitting your request. Please try again or contact us directly at dbpatel1180@gmail.com.</p>
      </div>

      <div class="form-group">
        <label for="name">Name <span class="required">*</span></label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" v-model="formData.phone" />
      </div>

      <div class="form-group">
        <label for="caseNumber">Case Number <span class="required">*</span></label>
        <input type="text" id="caseNumber" v-model="formData.caseNumber" required />
      </div>

      <div class="form-group">
        <label for="court">Court/Jurisdiction <span class="required">*</span></label>
        <input type="text" id="court" v-model="formData.court" required />
      </div>

      <div class="form-group">
        <label for="hearingDate">Hearing/Proceeding Date</label>
        <input type="date" id="hearingDate" v-model="formData.hearingDate" />
      </div>

      <div class="form-group">
        <label for="details">Additional Details</label>
        <textarea id="details" v-model="formData.details" rows="5" placeholder="Please provide any additional information about your transcript request"></textarea>
      </div>

      <button type="submit" :disabled="isSubmitting" class="submit-button">
        {{ isSubmitting ? 'Submitting...' : 'Submit Request' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
</script>

<style scoped>
.form-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
}

.transcript-form {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 525;
  color: #333;
}

.required {
  color: red;
  margin-left: 3px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Overpass", sans-serif;
  background-color: #E3F2FD;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3F9CD1;
}

.submit-button {
  width: 100%;
  padding: 15px;
  background-color: #b7def6;
  color: #000;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 525;
  cursor: pointer;
  transition: 0.2s;
}

.submit-button:hover:not(:disabled) {
  background-color: #3F9CD1;
  color: white;
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message,
.error-message {
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  text-align: center;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
