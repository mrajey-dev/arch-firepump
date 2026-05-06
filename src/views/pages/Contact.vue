<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid pt-5 bg-primary hero-header">
      <div class="container pt-5">
        <div class="row g-5 pt-5">
          <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <h1 class="display-4 text-black mb-4 animated slideInRight headline word-hover">Contact Us</h1>
          </div>
          <div class="col-lg-6 align-self-end text-center text-lg-end">
            <img class="img-fluid" src="frontend/img/pages/about.png" alt="fire-pumps" style="max-height: 300px;" />
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="container py-5">
      <div class="row g-5">

        <!-- Contact Info -->
        <div class="col-lg-4">
          <h3 class="mb-4">Get in Touch</h3>
          <p class="text-muted">Feel free to contact us for any inquiries or support.</p>

          <ul class="list-unstyled contact-info">
            <li><i class="bi bi-geo-alt-fill text-primary me-2"></i>Plot No. 49, Prathamesh, Kamathwade, Nashik, Maharashtra, India - 422 008.</li>
            <li><i class="bi bi-telephone-fill text-primary me-2"></i>+91 8390704453</li>
            <li><i class="bi bi-envelope-fill text-primary me-2"></i>contact@archenterprises.co.in</li>
          </ul>
        </div>

        <!-- Form -->
        <div class="col-lg-8">
          <div class="card shadow-lg border-0 rounded-4">
            <div class="card-body p-4">
              <h4 class="mb-3 text-center">Send Us a Message</h4>

              <form @submit.prevent="handleSubmit">

                <!-- Name -->
                <div class="mb-3">
                  <label for="name" class="form-label">Your Name</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light"><i class="bi bi-person"></i></span>
                    <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Enter your name" required />
                  </div>
                </div>

                <!-- Country Code + Phone -->
                <div class="mb-3">
                  <label for="phone" class="form-label">Your Phone</label>
                  <div class="input-group">
                    <select v-model="form.country_code" class="form-select" style="max-width: 180px;">
                      <option value="+91">🇮🇳 India (+91)</option>
                      <option value="+1">🇺🇸 USA (+1)</option>
                      <option value="+44">🇬🇧 UK (+44)</option>
                      <option value="+971">🇦🇪 UAE (+971)</option>
                      <option value="+61">🇦🇺 Australia (+61)</option>
                      <option value="+81">🇯🇵 Japan (+81)</option>
                      <option value="+49">🇩🇪 Germany (+49)</option>
                      <option value="+33">🇫🇷 France (+33)</option>
                      <!-- Add your full list here (already provided) -->
                    </select>

                    <input
                      v-model="form.phone"
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Phone number"
                      maxlength="10"
                      required
                      pattern="\d{10}"
                      @input="form.phone = form.phone.replace(/\D/g, '').slice(0, 10)"
                    />
                  </div>
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Your Email</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light"><i class="bi bi-envelope"></i></span>
                    <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Enter your email" required />
                  </div>
                </div>

                <!-- Subject -->
                <div class="mb-3">
                  <label for="subject" class="form-label">Subject</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light"><i class="bi bi-chat-right-text"></i></span>
                    <input v-model="form.subject" type="text" class="form-control" id="subject" placeholder="Subject" required />
                  </div>
                </div>

                <!-- Message -->
                <div class="mb-4">
                  <label for="message" class="form-label">Message</label>
                  <textarea v-model="form.message" class="form-control" id="message" rows="5" placeholder="Type your message..." required></textarea>
                </div>

               <button type="submit" class="btn btn-primary w-100 py-2 rounded-pill" :disabled="loading">
  <span v-if="!loading">
    <i class="bi bi-send me-2"></i>Send Message
  </span>
  <span v-else class="d-flex align-items-center justify-content-center">
    <span class="spinner-border spinner-border-sm me-2" role="status"></span>
    Sending...
  </span>
</button>

              </form>

            </div>
          </div>
        </div>
      </div>

      <!-- Google Map -->
      <div class="row mt-5">
        <div class="col-12">
          <h4 class="text-center mb-4">Our Location</h4>
          <div class="map-container" style="border-radius: 12px; overflow: hidden;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.5359105366747!2d73.74453157384353!3d19.986010322777716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec9d50000001%3A0x6bfc86902ddfcc70!2sArch%20Enterprises!5e0!3m2!1sen!2sin!4v1767081119438!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2';

const loading = ref(false)   // <-- Loader state

const form = reactive({
  phone: '',
  name: "",
  email: '',
  country_code: "+91",
  subject: '',
  message: '',
})

const handleSubmit = async () => {
  loading.value = true;

  try {
    const response = await fetch("https://archenterprises.co.in/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok && data.status === "success") {

      // 🔥 GTM TRACKING (IMPORTANT)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submit_success"
      });

      // ✅ SUCCESS POPUP
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for contacting us.",
        icon: "success",
      });

      // ✅ RESET FORM
      form.name = '';
      form.email = '';
      form.phone = '';
      form.subject = '';
      form.message = '';
      form.country_code = '+91';

    } else {
      Swal.fire("Error", data.message || "Failed to submit!", "error");
    }

  } catch (error) {
    Swal.fire("Error", "Network error!", "error");
  }

  loading.value = false;
};
</script>



<style scoped>
.hero-header {
  background-color: #007bff;
  color: white;
}

.contact-info li {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
}

.map-container {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>
