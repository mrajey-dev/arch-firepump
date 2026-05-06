<template>
  <div class="privacy-policy-container">
    <div class="policy-card">
      <h1 class="policy-title">Privacy Policy</h1>
      <p class="last-updated">Last Updated: {{ lastUpdatedDate }}</p>
      <p class="effective-date">Effective Date: {{ effectiveDate }}</p>

      <div class="policy-section">
        <h2>1. Introduction & Scope</h2>
        <p>Welcome to <strong>{{ storeName }}</strong> (<strong>"Company"</strong>, <strong>"we"</strong>, <strong>"our"</strong>, or <strong>"us"</strong>). Your privacy is of paramount importance to us. This Privacy Policy explains how we collect, use, disclose, transfer, and safeguard your information when you visit our website, make a purchase, or interact with our services.</p>
        <p>This Privacy Policy applies to all users, customers, visitors, and others who access our services ("you" or "your"). We are committed to protecting your personal information in compliance with:</p>
        <ul>
          <li>Information Technology Act, 2000 (India)</li>
          <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
          <li>Consumer Protection (E-Commerce) Rules, 2020</li>
          <li>Digital Personal Data Protection Act, 2023 (once fully notified)</li>
          <li>Reserve Bank of India (RBI) guidelines for payment data protection</li>
          <li>General Data Protection Regulation (GDPR) for EU residents</li>
        </ul>
        <p>By using our website and services, you consent to the data practices described in this Privacy Policy. If you do not agree with any terms, please do not use our services.</p>
      </div>

      <div class="policy-section">
        <h2>2. Information We Collect</h2>
        <p>We collect several types of information to provide, improve, and protect our services:</p>
        
        <h3>2.1 Personal Information You Provide</h3>
        <p>When you interact with our website, we may collect the following personal information:</p>
        <ul>
          <li><strong>Identity Data:</strong> Full name, date of birth, gender, and username</li>
          <li><strong>Contact Data:</strong> Billing address, shipping address, email address, phone number, and WhatsApp number</li>
          <li><strong>Payment Data:</strong> Credit/debit card details (processed securely by payment gateway, NOT stored by us), UPI ID, net banking details, wallet information</li>
          <li><strong>Transaction Data:</strong> Order history, purchase amounts, refund details, payment status</li>
          <li><strong>Account Data:</strong> Login credentials, password (encrypted), account preferences, wishlist items</li>
          <li><strong>Communication Data:</strong> Customer support inquiries, chat transcripts, email correspondence, feedback, and reviews</li>
          <li><strong>KYC Data:</strong> For high-value transactions or specific products, we may collect PAN card, GSTIN, or business registration details as required by law</li>
        </ul>
        
        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we automatically collect certain technical information:</p>
        <ul>
          <li><strong>Device Information:</strong> IP address, device type, operating system, browser type and version, screen resolution</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clickstream data, search queries, referral URLs, navigation paths</li>
          <li><strong>Location Data:</strong> Approximate geolocation (based on IP address) and precise location (with your consent)</li>
          <li><strong>Cookies & Tracking Technologies:</strong> Session cookies, persistent cookies, pixels, web beacons, and local storage data</li>
        </ul>
        
        <h3>2.3 Information from Third Parties</h3>
        <p>We may receive information about you from:</p>
        <ul>
          <li><strong>Payment Gateways:</strong> Razorpay, PayPal, Stripe, etc. (transaction confirmation, payment status)</li>
          <li><strong>Social Media Platforms:</strong> Facebook, Google, Instagram (when you log in via social media or interact with our content)</li>
          <li><strong>Logistics Partners:</strong> Delivery status updates, address verification</li>
          <li><strong>Marketing Partners:</strong> Ad networks, analytics providers (Google Analytics, Facebook Pixel)</li>
          <li><strong>Public Sources:</strong> Government registries for business verification (where required)</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>3. How We Use Your Information</h2>
        <p>We use your information for the following legitimate business purposes:</p>
        
        <table class="usage-table">
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Legal Basis</th>
              <th>Information Used</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usage in usagePurposes" :key="usage.purpose">
              <td>{{ usage.purpose }}</td>
              <td>{{ usage.basis }}</td>
              <td>{{ usage.data }}</td>
            </tr>
          </tbody>
        </table>
        
        <div class="note">
          <strong>Important:</strong> We do NOT sell your personal information to third parties. We do NOT rent or trade your data for marketing purposes without your explicit consent.
        </div>
      </div>

      <div class="policy-section">
        <h2>4. Cookies & Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to enhance your browsing experience. A cookie is a small text file stored on your device when you visit our website.</p>
        
        <h3>4.1 Types of Cookies We Use</h3>
        <table class="cookie-table">
          <thead>
            <tr>
              <th>Cookie Type</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Required?</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cookie in cookieTypes" :key="cookie.type">
              <td>{{ cookie.type }}</td>
              <td>{{ cookie.purpose }}</td>
              <td>{{ cookie.duration }}</td>
              <td>{{ cookie.required }}</td>
            </tr>
          </tbody>
        </table>
        
        <h3>4.2 Your Cookie Choices</h3>
        <p>You can manage cookie preferences through:</p>
        <ul>
          <li><strong>Browser Settings:</strong> Most browsers automatically accept cookies, but you can modify settings to decline cookies or alert you when cookies are being sent.</li>
          <li><strong>Cookie Banner:</strong> When you first visit our website, you can accept or decline non-essential cookies.</li>
          <li><strong>Opt-Out Tools:</strong> You can opt-out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
        </ul>
        <p class="note">Note: Disabling essential cookies may affect website functionality, including the ability to complete purchases.</p>
      </div>

      <div class="policy-section">
        <h2>5. How We Share Your Information</h2>
        <p>We share your information only as necessary to provide our services and comply with legal obligations:</p>
        
        <h3>5.1 Service Providers & Partners</h3>
        <div class="partners-grid">
          <div v-for="partner in servicePartners" :key="partner.name" class="partner-card">
            <strong>{{ partner.name }}</strong>
            <span>{{ partner.purpose }}</span>
            <span class="data-shared">Data shared: {{ partner.data }}</span>
          </div>
        </div>
        
        <h3>5.2 Legal & Regulatory Disclosures</h3>
        <p>We may disclose your information without your consent where required by law, including:</p>
        <ul>
          <li>Compliance with court orders, subpoenas, or legal processes</li>
          <li>Responding to government requests, law enforcement agencies, or regulatory authorities (RBI, Ministry of Electronics & IT, Income Tax Department)</li>
          <li>Enforcing our Terms of Service or other agreements</li>
          <li>Protecting our rights, property, safety, or that of our customers or the public</li>
          <li>Fraud detection, prevention, and investigation</li>
          <li>Tax reporting and audit compliance</li>
        </ul>
        
        <h3>5.3 Business Transfers</h3>
        <p>In the event of a merger, acquisition, reorganization, asset sale, or bankruptcy, your information may be transferred as part of the business assets. We will notify you via email and prominent notice on our website of any change in ownership or use of your personal information.</p>
      </div>

      <div class="policy-section">
        <h2>6. Data Security & Retention</h2>
        
        <h3>6.1 Security Measures</h3>
        <p>We implement industry-standard security measures to protect your information:</p>
        <ul>
          <li><strong>Encryption:</strong> SSL/TLS encryption for all data transmission (HTTPS). Passwords are hashed using bcrypt.</li>
          <li><strong>PCI DSS Compliance:</strong> Our payment processing follows PCI DSS Level 1 standards.</li>
          <li><strong>Access Controls:</strong> Strict role-based access to customer data. Only authorized employees with a legitimate business need can access personal information.</li>
          <li><strong>Regular Audits:</strong> Quarterly security assessments, vulnerability scans, and penetration testing.</li>
          <li><strong>Data Minimization:</strong> We collect only the data necessary for specified purposes.</li>
          <li><strong>Firewall & Intrusion Detection:</strong> Advanced firewalls and IDS/IPS systems to prevent unauthorized access.</li>
          <li><strong>Secure Data Centers:</strong> Our servers are hosted in ISO 27001 certified data centers with 24/7 surveillance.</li>
        </ul>
        
        <h3>6.2 Data Retention Periods</h3>
        <p>We retain your personal information only as long as necessary:</p>
        <table class="retention-table">
          <thead>
            <tr>
              <th>Data Category</th>
              <th>Retention Period</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="retention in retentionPeriods" :key="retention.category">
              <td>{{ retention.category }}</td>
              <td>{{ retention.period }}</td>
              <td>{{ retention.reason }}</td>
            </tr>
          </tbody>
        </table>
        
        <p>After the retention period expires, data is permanently deleted or anonymized for analytical purposes.</p>
      </div>

      <div class="policy-section">
        <h2>7. Your Rights & Choices</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        
        <div class="rights-container">
          <div class="right-card" v-for="right in dataRights" :key="right.name">
            <div class="right-icon">{{ right.icon }}</div>
            <div class="right-content">
              <h4>{{ right.name }}</h4>
              <p>{{ right.description }}</p>
              <button v-if="right.actionable" class="rights-button" @click="initiateRightAction(right.name)">{{ right.buttonText }}</button>
            </div>
          </div>
        </div>
        
        <div class="alert-box">
          <strong>For Indian Residents (under Digital Personal Data Protection Act):</strong>
          <ul>
            <li>Right to obtain confirmation on whether we are processing your personal data</li>
            <li>Right to correction and erasure of inaccurate or outdated data</li>
            <li>Right to grievance redressal with our Data Protection Officer</li>
            <li>Right to nominate another person to exercise rights on your behalf</li>
          </ul>
        </div>
        
        <div class="alert-box gdpr-box">
          <strong>For EU Residents (under GDPR):</strong>
          <ul>
            <li>Right to access (Article 15)</li>
            <li>Right to rectification (Article 16)</li>
            <li>Right to erasure ("Right to be forgotten" - Article 17)</li>
            <li>Right to restrict processing (Article 18)</li>
            <li>Right to data portability (Article 20)</li>
            <li>Right to object (Article 21)</li>
            <li>Right to withdraw consent at any time</li>
          </ul>
        </div>
        
        <p>To exercise any of these rights, please contact us at <strong>{{ privacyEmail }}</strong> with the subject line "Privacy Request - {{ storeName }}". We will respond within 30 days.</p>
      </div>

      <div class="policy-section">
        <h2>8. Payment Information & Razorpay Compliance</h2>
        <p>For Razorpay payment gateway integration, we adhere to specific privacy and security requirements:</p>
        
        <ul>
          <li><strong>No Storage of Card Data:</strong> We do NOT store full credit/debit card numbers, CVV, or PIN codes. Payment information is transmitted directly to Razorpay via secure API.</li>
          <li><strong>Razorpay's Privacy Policy:</strong> Razorpay's collection and processing of payment data is governed by their <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</li>
          <li><strong>PCI DSS Compliance:</strong> Our integration uses Razorpay's PCI DSS Level 1 certified iframe or SDK to ensure card data never touches our servers.</li>
          <li><strong>Tokenization:</strong> For saved cards, we store only Razorpay-provided tokens, NOT actual card details.</li>
          <li><strong>Transaction Logs:</strong> We retain transaction IDs, payment status, and partial card information (last 4 digits, card type) for reconciliation and customer support.</li>
          <li><strong>Refund Processing:</strong> Refund-related data is shared with Razorpay only as necessary to process refunds to your original payment method.</li>
        </ul>
        
        <div class="declaration-box">
          <h4>Payment Data Declaration for Razorpay</h4>
          <p>We hereby declare that:</p>
          <ol>
            <li>No sensitive payment data (card numbers, CVV, PIN) is stored on our servers</li>
            <li>All payment pages use HTTPS with valid SSL certificates</li>
            <li>We comply with Razorpay's data protection requirements as per the Merchant Agreement</li>
            <li>We immediately notify Razorpay of any security breach affecting payment data</li>
          </ol>
        </div>
      </div>

      <div class="policy-section">
        <h2>9. Children's Privacy</h2>
        <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover that a child under 18 has provided personal information, we will delete it promptly.</p>
        <p>For Indian residents: As per the Digital Personal Data Protection Act, 2023, we require verifiable parental consent for processing data of children under 18. We do not engage in targeted advertising or profiling of children.</p>
      </div>

      <div class="policy-section">
        <h2>10. Third-Party Links & Services</h2>
        <p>Our website may contain links to third-party websites, products, and services. This Privacy Policy does not apply to those third parties. We are not responsible for the privacy practices of other sites. We encourage you to read the privacy policies of any third-party sites you visit.</p>
        
        <h3>Third-Party Services We Use:</h3>
        <ul>
          <li><strong>Analytics:</strong> Google Analytics, Facebook Pixel, Hotjar (for website analytics and heatmaps)</li>
          <li><strong>Marketing:</strong> Mailchimp, Klaviyo, Google Ads (for email marketing and advertising)</li>
          <li><strong>Social Media:</strong> Facebook, Instagram, Twitter (for social login and sharing features)</li>
          <li><strong>Customer Support:</strong> Freshdesk, Zendesk, or similar helpdesk software</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>11. International Data Transfers</h2>
        <p>Your information may be transferred to, stored, and processed in countries other than your own. We primarily store data on servers located in India. However, some of our service providers (e.g., cloud hosting, analytics) may operate globally.</p>
        <ul>
          <li><strong>For EU Residents:</strong> We ensure adequate safeguards (Standard Contractual Clauses) for data transfers outside the EEA.</li>
          <li><strong>For Indian Residents:</strong> Data is stored within India where required by law. International transfers comply with cross-border data transfer rules under applicable laws.</li>
          <li>By using our services, you consent to the transfer of your information to countries with different data protection laws.</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>12. Data Breach Notification</h2>
        <p>In the event of a data breach that is likely to result in a risk to your rights and freedoms, we will:</p>
        <ul>
          <li>Notify affected users within 72 hours of discovering the breach (or as required by applicable law)</li>
          <li>Notify the relevant supervisory authority (e.g., Indian Computer Emergency Response Team - CERT-In) within the mandated timeline</li>
          <li>Provide details of the breach, potential impact, and mitigation measures taken</li>
          <li>Investigate the breach and implement security improvements</li>
        </ul>
        <p>For breach reporting, contact our Data Protection Officer immediately at <strong>{{ dpoEmail }}</strong>.</p>
      </div>

      <div class="policy-section">
        <h2>13. Grievance Redressal & Data Protection Officer</h2>
        <p>If you have any concerns about your privacy or how your data is handled, please contact our Grievance Officer / Data Protection Officer:</p>
        
        <div class="contact-card">
         
          <p><strong>Phone:</strong> {{ supportPhone }}</p>
          <p><strong>Address:</strong> {{ registeredAddress }}</p>
          <p><strong>Response Time:</strong> 48 hours (business days)</p>
        </div>
        
        <p>If your grievance is not resolved within 30 days, you may escalate to:</p>
        <ul>
          <li><strong>For Indian users:</strong> Office of the Data Protection Board of India (once fully operational under DPDP Act)</li>
          <li><strong>For EU users:</strong> Your local Data Protection Authority (DPA)</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>14. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting on this page with an updated "Last Updated" date.</p>
        <p><strong>Material changes</strong> (e.g., new data collection purposes, changed data sharing practices) will be notified via:</p>
        <ul>
          <li>Prominent notice on our website homepage</li>
          <li>Email notification to registered users</li>
          <li>In-app notification (if applicable)</li>
        </ul>
        <p>We encourage you to review this Privacy Policy periodically. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
      </div>

      <div class="policy-section">
        <h2>15. Consent & Withdrawal of Consent</h2>
        <p>By providing your personal information and using our services, you consent to the collection, use, and disclosure practices described in this Privacy Policy.</p>
        <p><strong>Withdrawing Consent:</strong> You may withdraw your consent at any time by:</p>
        <ul>
          <li>Adjusting your communication preferences in your account settings</li>
          <li>Clicking "unsubscribe" in marketing emails</li>
          <li>Contacting us at {{ privacyEmail }} with your withdrawal request</li>
          <li>Deleting your account (request via customer support)</li>
        </ul>
        <p class="note">Note: Withdrawal of consent may limit your ability to use certain services (e.g., we cannot process orders without necessary data). Withdrawal does not affect the lawfulness of processing based on consent before withdrawal.</p>
      </div>

      <div class="policy-section">
        <h2>16. Legal Disclosures & Compliance Statement</h2>
        <div class="compliance-box">
          <h4>Website & Business Information (as required under Information Technology Rules, 2011):</h4>
          <p><strong>Website Name:</strong> {{ websiteName }}</p>
         
          <p><strong>Registered Address:</strong> {{ registeredAddress }}</p>
          <p><strong>Contact Email:</strong> {{ supportEmail }}</p>
          <p><strong>Contact Phone:</strong> {{ supportPhone }}</p>
          <p><strong>GSTIN:</strong> {{ gstin }}</p>
      
          <p><strong>PAN:</strong> {{ pan }}</p>
        </div>
        
        <div class="declaration-box">
          <h4>Declaration for Payment Gateway (Razorpay) Verification</h4>
          <p>We hereby declare and confirm that:</p>
          <ol>
            <li>This Privacy Policy is prominently displayed on our website and accessible to all users before account creation and checkout</li>
            <li>We do not collect or store sensitive payment data (card numbers, CVV, PIN)</li>
            <li>We have implemented reasonable security practices as required under the IT Act, 2000 and SPDI Rules, 2011</li>
            <li>We have a documented privacy compliance program and conduct regular audits</li>
            <li>We have appointed a Grievance Officer as required under Rule 3(11) of the IT Rules, 2011</li>
            <li>We are compliant with Razorpay's privacy requirements as per the Merchant Service Agreement</li>
          </ol>
          <p><strong>Authorized Signatory:</strong> {{ authorizedSignatory }}</p>
          <p><strong>Date:</strong> {{ currentDate }}</p>
        </div>
      </div>

      <div class="footer-note">
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at <strong>{{ privacyEmail }}</strong>.</p>
        <p class="signature">— {{ storeName }} Privacy Team</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  data() {
    return {
      // ============================================
      // BUSINESS CONFIGURATION - UPDATE THESE VALUES
      // ============================================
      storeName: 'Arch Enterprises',
      websiteName: 'www.archenterprises.co.in',
      legalEntityName: 'Your Legal Entity Private Limited',
      authorizedSignatory: 'Prasad Sahadeo Kothawade',
     
     
      
      supportEmail: 'contact@archenterprises.co.in',
      supportPhone: '+91 8390704453',
      registeredAddress: 'Plot No. 49, Prathamesh, Khutwadnagar, Kamathwade, Nashik, Maharashtra, India - 422 008.',
      gstin: '27ASHPK7144E1ZQ',
      pan: 'ASHPK7144E',
      
      // Usage Purposes Table
      usagePurposes: [
        { purpose: 'Order Processing & Fulfillment', basis: 'Contract performance', data: 'Name, address, payment info, order details' },
        { purpose: 'Payment Processing (Razorpay)', basis: 'Contract performance', data: 'Transaction amount, order ID, customer contact' },
        { purpose: 'Customer Support', basis: 'Legitimate interest', data: 'Contact info, order history, communication records' },
        { purpose: 'Fraud Detection & Prevention', basis: 'Legal obligation', data: 'IP address, device info, transaction patterns' },
        { purpose: 'Marketing Communications (with consent)', basis: 'Consent', data: 'Email, name, purchase history, preferences' },
        { purpose: 'Website Improvement & Analytics', basis: 'Legitimate interest', data: 'Usage data, device info, cookies' },
        { purpose: 'Legal Compliance', basis: 'Legal obligation', data: 'Transaction logs, identity verification, tax records' },
        { purpose: 'Shipping & Logistics', basis: 'Contract performance', data: 'Name, address, phone number, order details' }
      ],
      
      // Cookie Types
      cookieTypes: [
        { type: 'Essential Cookies', purpose: 'Enable core functionality - shopping cart, checkout, login', duration: 'Session', required: 'Yes' },
        { type: 'Preference Cookies', purpose: 'Remember language, currency, and display preferences', duration: '1 year', required: 'Optional' },
        { type: 'Analytics Cookies', purpose: 'Google Analytics - understand how users interact with our site', duration: '2 years', required: 'Optional' },
        { type: 'Marketing Cookies', purpose: 'Track browsing habits for personalized ads', duration: '1 year', required: 'Optional' },
        { type: 'Security Cookies', purpose: 'Fraud detection and CSRF protection', duration: 'Session', required: 'Yes' }
      ],
      
      // Service Partners
      servicePartners: [
        { name: 'Razorpay', purpose: 'Payment gateway', data: 'Order amount, transaction ID, customer name, email' },
        { name: 'Shiprocket / Delhivery', purpose: 'Shipping & logistics', data: 'Customer name, address, phone number, order items' },
        { name: 'Google Analytics', purpose: 'Website analytics', data: 'IP address (anonymized), device info, browsing behavior' },
        { name: 'Mailchimp / Klaviyo', purpose: 'Email marketing (with consent)', data: 'Email address, name, purchase history' },
        { name: 'AWS / Cloud Hosting', purpose: 'Cloud infrastructure', data: 'All data stored on encrypted servers' },
        { name: 'Freshdesk / Zendesk', purpose: 'Customer support ticketing', data: 'Name, email, support conversations, order history' }
      ],
      
      // Retention Periods
      retentionPeriods: [
        { category: 'Account Information', period: 'Until account deletion + 90 days', reason: 'Contract fulfillment, legal retention' },
        { category: 'Transaction Records', period: '7 years', reason: 'Tax compliance, RBI guidelines' },
        { category: 'Payment Logs', period: '10 years', reason: 'Financial audit, dispute resolution' },
        { category: 'Customer Support Chats', period: '2 years', reason: 'Service improvement, quality assurance' },
        { category: 'Marketing Data (with consent)', period: 'Until consent withdrawal', reason: 'Marketing communications' },
        { category: 'Analytics Data', period: '26 months (Google Analytics)', reason: 'Website improvement' },
        { category: 'IP Address Logs', period: '1 year', reason: 'Security, fraud investigation' }
      ],
      
      // Data Rights Cards
      dataRights: [
        { name: 'Right to Access', icon: '📋', description: 'Request a copy of all personal data we hold about you.', actionable: true, buttonText: 'Request Data Copy' },
        { name: 'Right to Rectification', icon: '✏️', description: 'Correct inaccurate or incomplete personal information.', actionable: true, buttonText: 'Correct My Data' },
        { name: 'Right to Erasure', icon: '🗑️', description: 'Request deletion of your personal data (subject to legal obligations).', actionable: true, buttonText: 'Request Deletion' },
        { name: 'Right to Restrict Processing', icon: '⏸️', description: 'Limit how we use your personal information.', actionable: true, buttonText: 'Restrict Processing' },
        { name: 'Right to Data Portability', icon: '📤', description: 'Receive your data in a structured, machine-readable format.', actionable: true, buttonText: 'Export My Data' },
        { name: 'Right to Object', icon: '🚫', description: 'Object to processing for direct marketing or legitimate interests.', actionable: true, buttonText: 'Object to Processing' }
      ]
    }
  },
  computed: {
    lastUpdatedDate() {
      const date = new Date()
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    effectiveDate() {
      const date = new Date()
      date.setDate(date.getDate() - 30)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    currentDate() {
      return new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  methods: {
    initiateRightAction(rightName) {
      // This can be connected to a modal or email composer
      window.location.href = `mailto:${this.privacyEmail}?subject=Privacy Request - ${rightName} - ${this.storeName}&body=Please process my request for: ${rightName}%0A%0AMy Order Number (if applicable): %0AMy Registered Email: %0A%0AAdditional details:`
    }
  }
}
</script>

<style scoped>
.privacy-policy-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: #f8fafc;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.policy-card {
  background: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
}

.policy-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e293b 0%, #2d3748 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.last-updated, .effective-date {
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.policy-section {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.policy-section:last-of-type {
  border-bottom: none;
}

.policy-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3b82f6;
  display: inline-block;
}

.policy-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 1.25rem 0 0.75rem 0;
}

.policy-section p {
  font-size: 1rem;
  line-height: 1.65;
  color: #334155;
  margin-bottom: 1rem;
}

.policy-section ul, .policy-section ol {
  margin: 0.75rem 0 1rem 1.75rem;
  color: #334155;
  line-height: 1.65;
}

.policy-section li {
  margin-bottom: 0.5rem;
}

.note, .alert-box {
  background-color: #fffbeb;
  padding: 1rem 1.25rem;
  border-left: 4px solid #f59e0b;
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 0.95rem;
}

.alert-box {
  background-color: #fef2f2;
  border-left-color: #dc2626;
}

.gdpr-box {
  background-color: #eff6ff;
  border-left-color: #3b82f6;
  margin-top: 1rem;
}

.usage-table, .cookie-table, .retention-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.25rem 0;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.usage-table th, .cookie-table th, .retention-table th {
  background: linear-gradient(135deg, #1e293b 0%, #2d3748 100%);
  color: white;
  padding: 0.875rem;
  text-align: left;
  font-weight: 600;
}

.usage-table td, .cookie-table td, .retention-table td {
  border: 1px solid #e2e8f0;
  padding: 0.875rem;
  vertical-align: top;
}

.usage-table tr:nth-child(even), .cookie-table tr:nth-child(even), .retention-table tr:nth-child(even) {
  background-color: #f8fafc;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.partner-card {
  background-color: #f8fafc;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.partner-card strong {
  color: #0f172a;
  font-size: 1rem;
}

.partner-card .data-shared {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 0.5rem;
}

.rights-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.right-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background-color: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.right-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.right-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.right-content {
  flex: 1;
}

.right-content h4 {
  margin: 0 0 0.5rem 0;
  color: #0f172a;
}

.right-content p {
  margin: 0 0 0.75rem 0;
  font-size: 0.9rem;
  color: #475569;
}

.rights-button {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.rights-button:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  transform: scale(1.02);
}

.contact-card, .declaration-box, .compliance-box {
  background-color: #f1f5f9;
  padding: 1.25rem;
  border-radius: 0.75rem;
  margin: 1rem 0;
  border: 1px solid #e2e8f0;
}

.contact-card p, .declaration-box p, .compliance-box p {
  margin-bottom: 0.5rem;
}

.declaration-box {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  border-left: 4px solid #10b981;
}

.declaration-box h4, .compliance-box h4 {
  margin-top: 0;
  color: #065f46;
}

.compliance-box {
  background-color: #fefce8;
  border-left: 4px solid #eab308;
}

.compliance-box h4 {
  color: #854d0e;
}

.footer-note {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e2e8f0;
  font-size: 0.9rem;
}

.signature {
  text-align: right;
  font-style: italic;
  margin-top: 1rem;
  color: #475569;
}

@media (max-width: 768px) {
  .privacy-policy-container {
    padding: 1rem;
  }
  
  .policy-card {
    padding: 1.25rem;
  }
  
  .policy-title {
    font-size: 1.75rem;
  }
  
  .policy-section h2 {
    font-size: 1.35rem;
  }
  
  .usage-table, .cookie-table, .retention-table {
    display: block;
    overflow-x: auto;
    font-size: 0.8rem;
  }
  
  .partners-grid {
    grid-template-columns: 1fr;
  }
  
  .rights-container {
    grid-template-columns: 1fr;
  }
  
  .right-card {
    flex-direction: column;
    text-align: center;
  }
  
  .right-icon {
    font-size: 2.5rem;
  }
}
</style>