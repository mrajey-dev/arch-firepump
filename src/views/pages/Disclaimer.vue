<template>
  <div class="disclaimer-container">
    <div class="policy-card">
      <h1 class="policy-title">Disclaimer</h1>
      <p class="last-updated">Last Updated: {{ lastUpdatedDate }}</p>
      <p class="effective-date">Effective Date: {{ effectiveDate }}</p>
      <p class="version">Version: {{ versionNumber }}</p>

      <div class="disclaimer-banner">
        <p><strong>⚠️ Important Legal Notice:</strong> Please read this Disclaimer carefully before using our website or purchasing our products. By accessing or using our services, you acknowledge and agree to the terms of this Disclaimer. If you do not agree, please do not use our website.</p>
      </div>

      <div class="policy-section">
        <h2>1. General Information Disclaimer</h2>
        <p>The information provided on the website <strong>{{ websiteUrl }}</strong> (hereinafter referred to as <strong>"Website"</strong>, <strong>"we"</strong>, <strong>"our"</strong>, or <strong>"us"</strong>) is for general informational purposes only. While we strive to keep the information accurate, current, and complete, we make no representations or warranties of any kind, express or implied, about the accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Website for any purpose.</p>
        
        <p>Any reliance you place on such information is strictly at your own risk. We shall not be held liable for any loss or damage arising from the use of this Website or reliance on any information provided herein.</p>
        
        <div class="warning-box">
          <strong>⚠️ No Professional Advice:</strong> The content on this Website does not constitute professional advice (legal, financial, medical, or otherwise). You should consult with qualified professionals for advice tailored to your specific situation.
        </div>
      </div>

      <div class="policy-section">
        <h2>2. Product & Service Disclaimer</h2>
        
        <h3>2.1 Product Representation</h3>
        <p>We make every effort to display product colors, images, descriptions, and specifications as accurately as possible. However, we cannot guarantee that your device's display will accurately represent the actual product. The following factors may affect product representation:</p>
        <ul>
          <li>Differences in monitor/screen calibration and settings</li>
          <li>Lighting conditions during photography</li>
          <li>Manufacturing variations in color, texture, or finish</li>
          <li>Changes in product design or packaging by manufacturers</li>
        </ul>
        
        <h3>2.2 Product Availability & Pricing</h3>
        <ul>
          <li><strong>Pricing Errors:</strong> While we strive for accuracy, pricing errors may occur. We reserve the right to cancel any orders placed with incorrect pricing, even after order confirmation, with full refund issued.</li>
          <li><strong>Availability:</strong> Product availability is subject to change without notice. "In stock" status is approximate and not guaranteed. We reserve the right to limit quantities or discontinue products.</li>
          <li><strong>Promotional Offers:</strong> Discounts, coupons, and promotional offers are subject to specific terms and conditions which supersede this Disclaimer where applicable.</li>
        </ul>
        
        <h3>2.3 Third-Party Products</h3>
        <p>Some products sold on our Website may be manufactured by third parties. We are an authorized reseller or distributor for such products. However, we do not manufacture these products and therefore cannot be held responsible for manufacturing defects beyond the warranty provided by the original manufacturer.</p>
      </div>

      <div class="policy-section">
        <h2>3. Accuracy & Completeness Disclaimer</h2>
        
        <h3>3.1 Information Accuracy</h3>
        <p>The information on our Website may contain typographical errors, inaccuracies, or omissions relating to:</p>
        <ul>
          <li>Product descriptions, pricing, and availability</li>
          <li>Shipping and delivery timelines</li>
          <li>Promotional offers and discount codes</li>
          <li>Technical specifications and compatibility information</li>
        </ul>
        <p>We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice (including after you have placed an order).</p>
        
        <h3>3.2 External Information Sources</h3>
        <p>Our Website may include information sourced from third parties. We do not independently verify all third-party information and therefore do not guarantee its accuracy, completeness, or timeliness.</p>
      </div>

      <div class="policy-section">
        <h2>4. Limitation of Liability</h2>
        
        <p>To the fullest extent permitted by applicable law, including the Consumer Protection Act, 2019 (India), <strong>{{ legalEntityName }}</strong> and its officers, directors, employees, agents, affiliates, and partners shall not be liable for:</p>
        
        <div class="liability-grid">
          <div class="liability-card">
            <h4>📌 Direct Damages</h4>
            <p>Limited to the total amount paid by you for the specific product giving rise to the claim. No liability for consequential, incidental, or special damages.</p>
          </div>
          <div class="liability-card">
            <h4>📌 Indirect Damages</h4>
            <p>Loss of profits, revenue, data, goodwill, or business interruption, even if advised of the possibility of such damages.</p>
          </div>
          <div class="liability-card">
            <h4>📌 Third-Party Claims</h4>
            <p>Claims arising from third-party products, services, or websites linked from our Website.</p>
          </div>
          <div class="liability-card">
            <h4>📌 Unforeseeable Losses</h4>
            <p>Losses that were not reasonably foreseeable at the time of purchase.</p>
          </div>
        </div>
        
        <div class="important-note">
          <strong>Consumer Rights:</strong> Nothing in this Disclaimer limits or excludes your statutory rights as a consumer under applicable laws, including the Consumer Protection Act, 2019. If you are a consumer, the above limitations apply only to the extent permitted by law.
        </div>
      </div>

      <div class="policy-section">
        <h2>5. External Links Disclaimer</h2>
        <p>Our Website may contain links to third-party websites, plugins, applications, or services (<strong>"External Links"</strong>) that are not owned or controlled by us.</p>
        
        <ul>
          <li><strong>No Endorsement:</strong> The inclusion of any external link does not imply our endorsement, approval, or recommendation of the linked website's content, products, or services.</li>
          <li><strong>No Responsibility:</strong> We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.</li>
          <li><strong>Risk Assumed:</strong> You acknowledge and agree that we shall not be held responsible or liable for any damage or loss caused or alleged to be caused by or in connection with your use of or reliance on any such external content, goods, or services.</li>
        </ul>
        
        <p><strong>Examples of third-party links on our Website:</strong></p>
        <ul>
          <li>Payment gateways (Razorpay, PayPal, etc.)</li>
          <li>Social media platforms (Facebook, Instagram, Twitter)</li>
          <li>Logistics partners for shipment tracking</li>
          <li>Blog references or resource links</li>
        </ul>
        
        <p class="note">We strongly advise you to review the terms of service and privacy policies of any third-party websites you visit.</p>
      </div>

      <div class="policy-section">
        <h2>6. Payment & Transaction Disclaimer</h2>
        
        <h3>6.1 Payment Gateway Disclaimer</h3>
        <p>We use third-party payment gateways including <strong>Razorpay</strong> to process your payments. By making a payment on our Website, you acknowledge and agree that:</p>
        <ul>
          <li>We do not store your sensitive payment information (credit/debit card numbers, CVV, net banking passwords, UPI PINs).</li>
          <li>Payment transactions are processed by the payment gateway provider according to their terms and privacy policy.</li>
          <li>We are not responsible for any errors, delays, or failures caused by the payment gateway or your banking institution.</li>
          <li>We are not liable for unauthorized transactions if your payment credentials are compromised due to your own actions (e.g., phishing, weak passwords, shared devices).</li>
          <li>Currency conversion rates shown are indicative; actual rates charged by your bank or card issuer may differ.</li>
        </ul>
        
        <div class="dec laration-box">
          <h4>Razorpay Specific Disclaimer</h4>
          <p>Razorpay is a third-party payment aggregator. While we have integrated Razorpay's secure payment infrastructure, we do not control Razorpay's systems. Any issues arising from Razorpay's services (including transaction failures, delayed settlements, or technical glitches) should be reported directly to Razorpay as per their grievance redressal mechanism. We will, however, assist you in coordinating resolution to the best of our ability.</p>
        </div>
        
        <h3>6.2 Transaction Failures</h3>
        <p>In the event of a payment failure where amount is debited from your account but order is not confirmed:</p>
        <ul>
          <li>We will initiate a refund automatically within 5-7 business days</li>
          <li>However, we are not liable for any consequential losses (e.g., bank charges, missed opportunities, price changes)</li>
          <li>You should contact your bank directly for immediate reversal of failed transactions</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>7. Shipping & Delivery Disclaimer</h2>
        <p>While we partner with reputable logistics providers to deliver your orders, we cannot guarantee delivery timelines due to factors beyond our control:</p>
        
        <ul>
          <li><strong>Force Majeure:</strong> Natural disasters, pandemics, strikes, civil unrest, government restrictions, or acts of God may cause delays. We shall not be liable for delays caused by such events.</li>
          <li><strong>Logistics Partner Issues:</strong> Delays caused by the courier partner's operational issues, incorrect address provided by customer, or multiple delivery attempts.</li>
          <li><strong>Customs Clearance:</strong> For international orders, customs clearance delays are the responsibility of the customer.</li>
          <li><strong>Estimated Timelines:</strong> Delivery estimates provided at checkout are approximate and not guaranteed. No refunds or compensation will be provided for delivery delays unless otherwise specified in our Return Policy.</li>
        </ul>
        
        <div class="warning-box">
          <strong>⚠️ Risk of Loss:</strong> The risk of loss or damage to products passes to you upon delivery to your specified shipping address. For lost packages marked "delivered" by the courier, we will assist in filing a claim with the courier but cannot guarantee a refund or replacement.
        </div>
      </div>

      <div class="policy-section">
        <h2>8. Health & Fitness Product Disclaimer</h2>
        <p>If our Website sells health, wellness, fitness, or dietary supplement products, the following additional disclaimers apply:</p>
        
        <ul>
          <li><strong>Not Medical Advice:</strong> Information on health products is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</li>
          <li><strong>Individual Results May Vary:</strong> Results from using health, fitness, or supplement products vary from person to person based on genetics, lifestyle, diet, and other factors.</li>
          <li><strong>FDA / FSSAI Approval:</strong> Unless explicitly stated, our products are not evaluated or approved by the FDA or FSSAI for treating, curing, or preventing any disease.</li>
          <li><strong>Consult Your Doctor:</strong> Always consult with a qualified healthcare professional before starting any new supplement, fitness regimen, or making changes to your diet, especially if you are pregnant, nursing, have a medical condition, or are taking medication.</li>
          <li><strong>Allergy Disclaimer:</strong> Please read product ingredient labels carefully. We are not responsible for allergic reactions to products. Contact us for detailed ingredient information if needed.</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>9. Testimonials & Reviews Disclaimer</h2>
        <p>Our Website may display customer testimonials, product reviews, user-generated content, or endorsements:</p>
        
        <ul>
          <li><strong>Individual Experiences:</strong> Testimonials reflect the personal experiences of individual customers and do not necessarily represent typical results. Your experience may differ.</li>
          <li><strong>Not Endorsed:</strong> We do not endorse or verify the accuracy of testimonials unless explicitly stated.</li>
          <li><strong>Compensation Disclosure:</strong> Some testimonials may be from customers who received free products or compensation. This will be disclosed where required by law.</li>
          <li><strong>Editing Rights:</strong> We reserve the right to edit or remove testimonials for grammar, clarity, or appropriateness, without changing the substantive meaning.</li>
          <li><strong>No Guarantee:</strong> Testimonials do not constitute a guarantee, warranty, or prediction regarding your specific outcome.</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>10. Affiliate & Advertising Disclosure</h2>
        <p>From time to time, our Website may participate in affiliate marketing programs. This means we may earn commissions on purchases made through our affiliate links to third-party websites.</p>
        
        <div class="disclosure-box">
          <strong>Affiliate Disclosure:</strong> Some links on this Website are affiliate links. If you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you. We only promote products we genuinely believe will provide value to our customers. However, we are not responsible for the quality, accuracy, or delivery of products from affiliate partners.
        </div>
        
        <p>Additionally, we may display advertisements from third-party ad networks (e.g., Google AdSense). We do not control the content of these advertisements and are not responsible for any claims made in them.</p>
      </div>

      <div class="policy-section">
        <h2>11. Warranties Disclaimer</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
        
        <div class="warranty-box">
          <p><strong>WITHOUT LIMITING THE FOREGOING, OUR WEBSITE, PRODUCTS, AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</strong></p>
          <ul>
            <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
            <li>Warranties that the Website will be uninterrupted, error-free, secure, or free from viruses or harmful code</li>
            <li>Warranties regarding the accuracy, reliability, or completeness of any content or information</li>
            <li>Warranties that defects will be corrected or that our servers are free of viruses</li>
          </ul>
        </div>
        
        <p class="note"><strong>Note:</strong> Some jurisdictions do not allow the exclusion of certain warranties. For consumers in India, your statutory rights under the Consumer Protection Act, 2019 cannot be excluded. Any product warranty provided by the manufacturer remains applicable as per its terms.</p>
      </div>

      <div class="policy-section">
        <h2>12. Force Majeure</h2>
        <p>We shall not be held liable for any delay or failure to perform our obligations under this Disclaimer or any contract with you if the delay or failure results from events beyond our reasonable control, including but not limited to:</p>
        
        <div class="force-majeure-grid">
          <span>⚡ Power outages</span>
          <span>🌊 Natural disasters (earthquakes, floods, fires)</span>
          <span>🦠 Pandemics, epidemics, or health emergencies</span>
          <span>📡 Internet service provider failures</span>
          <span>⚖️ Government restrictions or regulations</span>
          <span>🔒 Cyberattacks, hacking, or security breaches</span>
          <span>🚚 Logistics/courier strikes or disruptions</span>
          <span>💰 Banking or payment system failures</span>
        </div>
        
        <p>In such events, our performance obligations are suspended for the duration of the force majeure event. We will notify you of any such delays and provide revised timelines when possible.</p>
      </div>

      <div class="policy-section">
        <h2>13. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless <strong>{{ legalEntityName }}</strong>, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:</p>
        <ul>
          <li>Your violation of this Disclaimer, Terms of Service, or applicable laws</li>
          <li>Your use or misuse of our Website, products, or services</li>
          <li>Your breach of any third-party rights (including intellectual property or privacy rights)</li>
          <li>Any content you submit, post, or transmit through our Website</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>14. No Waiver</h2>
        <p>Our failure to enforce any right or provision of this Disclaimer shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of {{ legalEntityName }}. No waiver of any breach shall constitute a waiver of any subsequent breach.</p>
      </div>

      <div class="policy-section">
        <h2>15. Severability</h2>
        <p>If any provision of this Disclaimer is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be severed from this Disclaimer, and the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely achieves the original intent.</p>
      </div>

      <div class="policy-section">
        <h2>16. Governing Law & Jurisdiction</h2>
        <p>This Disclaimer and any dispute arising from or relating to your use of our Website, products, or services shall be governed by and construed in accordance with the laws of <strong>India</strong>, without regard to its conflict of laws principles.</p>
        
        <p><strong>Jurisdiction:</strong> Any legal action or proceeding arising under this Disclaimer shall be brought exclusively in the courts located in <strong>{{ legalJurisdiction }}</strong>, India. You hereby consent to the personal jurisdiction and venue of such courts and waive any objection based on inconvenient forum.</p>
        
        <div class="jurisdiction-note">
          <strong>For International Users:</strong> If you are accessing our Website from outside India, you are responsible for complying with your local laws. We make no representation that our Website complies with laws outside India.
        </div>
      </div>

      <div class="policy-section">
        <h2>17. Modifications to Disclaimer</h2>
        <p>We reserve the right to modify, update, or change this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on this page, with the "Last Updated" date revised accordingly.</p>
        
        <p><strong>Material Changes:</strong> For significant changes that affect your legal rights, we will provide prominent notice on our Website or send email notification to registered users at least 15 days before the changes take effect.</p>
        
        <p>Your continued use of our Website after any changes constitutes your acceptance of the revised Disclaimer. We encourage you to review this page periodically.</p>
      </div>

      <div class="policy-section">
        <h2>18. Contact Information for Legal Matters</h2>
        <p>If you have any questions, concerns, or legal inquiries regarding this Disclaimer, please contact us:</p>
        
        <div class="contact-card">
          <p><strong>Legal Contact / Authorized Representative:</strong> {{ authorizedSignatory }}</p>
          
          <p><strong>Email (General Inquiries):</strong> <a :href="'mailto:' + supportEmail">{{ supportEmail }}</a></p>
          <p><strong>Phone:</strong> {{ supportPhone }}</p>
          <p><strong>Registered Office Address:</strong> {{ registeredAddress }}</p>
       
          <p><strong>GSTIN:</strong> {{ gstin }}</p>
        </div>
      </div>

      <div class="policy-section">
        <h2>19. Declaration for Payment Gateway (Razorpay) Verification</h2>
        
        <div class="declaration-box">
          <h4>Legal Declaration & Undertaking</h4>
          <p>We, <strong>{{ legalEntityName }}</strong>, hereby declare and confirm the following for the purpose of payment gateway verification (including Razorpay):</p>
          
          <ol>
            <li><strong>Truthful Information:</strong> All information provided in this Disclaimer, our Terms of Service, Privacy Policy, and Return/Refund Policy is true, accurate, and complete to the best of our knowledge.</li>
            
            <li><strong>Legal Compliance:</strong> Our business operations, products, and services comply with all applicable Indian laws including the Consumer Protection Act, 2019, Information Technology Act, 2000, Legal Metrology Act, 2009, and applicable RBI guidelines.</li>
            
            <li><strong>No Misrepresentation:</strong> We do not engage in false, misleading, or deceptive conduct, including fake testimonials, fake reviews, bait-and-switch tactics, or misrepresentation of product characteristics.</li>
            
            <li><strong>No Prohibited Activities:</strong> We do not engage in any activities prohibited by Razorpay, including but not limited to: money laundering, fraud, unauthorized multi-level marketing, sale of prohibited/regulated items without license, or any illegal activities.</li>
            
            <li><strong>Customer Dispute Resolution:</strong> We have a functional customer support and grievance redressal mechanism as required by law, with a designated Grievance Officer {{ grievanceOfficerName }}.</li>
            
            <li><strong>Refund Capability:</strong> We have the financial capability to process refunds within the timelines specified in our Refund Policy and maintain adequate reserves.</li>
            
            <li><strong>Data Protection:</strong> We comply with data protection laws and do not store sensitive payment data (CVV, PIN, full card numbers). Our website uses SSL encryption.</li>
            
            <li><strong>Age Restriction:</strong> We confirm that our products and services are not targeted at persons under 18 years of age, or if they are, we have obtained necessary parental consent mechanisms.</li>
            
            <li><strong>Intellectual Property:</strong> We own or have valid licenses for all intellectual property used on our Website, including logos, images, product descriptions, and software.</li>
            
            <li><strong>Tax Compliance:</strong> We are registered for GST (GSTIN: {{ gstin }}) and comply with all tax laws including TDS on payments where applicable.</li>
          </ol>
          
          <p><strong>Authorized Signatory:</strong> {{ authorizedSignatory }}</p>
          <p><strong>Designation:</strong> {{ authorizedDesignation }}</p>
          <p><strong>Date:</strong> {{ currentDate }}</p>
          <p><strong>Place:</strong> {{ registeredCity }}</p>
          
          <div class="signature-line">
            <p>_________________________</p>
            <p>(Signature / Digital Signature)</p>
          </div>
        </div>
      </div>

      <div class="footer-note">
        <p><strong>Important:</strong> This Disclaimer is a legally binding document. By accessing our Website, making a purchase, or using our services, you acknowledge that you have read, understood, and agreed to this Disclaimer in its entirety.</p>
        <p>For any legal notices or official correspondence, please send communication via registered post or email to {{ legalEmail }}. Legal notices shall be deemed received within 7 business days of sending.</p>
        <p class="signature">— {{ legalEntityName }} Legal Department</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disclaimer',
  data() {
    return {
      // ============================================
      // BUSINESS CONFIGURATION - UPDATE THESE VALUES
      // ============================================
      storeName: 'Arch Enterprises',
      websiteUrl: 'www.archenterprises.co.in',
      legalEntityName: 'Arch Enterprises Private Limited',
      authorizedSignatory: 'Prasad Sahadeo Kothawade',
      authorizedDesignation: 'Director / CEO / Authorized Signatory',
     
      supportEmail: 'contact@archenterprises.co.in',
      supportPhone: '+91 83456 78901',
      registeredAddress: 'Plot No. 49, Prathamesh, Khutwadnagar, Kamathwade, Nashik, Maharashtra, India - 422 008.',
      registeredCity: 'Nashik',
      legalJurisdiction: 'Nashik, Maharashtra',
      gstin: '27ASHPK7144E1ZQ',
      pan: 'ASHPK7144E',
      versionNumber: '2.0'
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
  }
}
</script>

<style scoped>
.disclaimer-container {
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
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.last-updated, .effective-date, .version {
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.disclaimer-banner {
  background-color: #fef2f2;
  border-left: 4px solid #dc2626;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  font-size: 0.95rem;
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
  border-bottom: 3px solid #dc2626;
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

.note, .warning-box {
  background-color: #fffbeb;
  padding: 1rem 1.25rem;
  border-left: 4px solid #f59e0b;
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 0.95rem;
}

.warning-box {
  background-color: #fef2f2;
  border-left-color: #dc2626;
}

.important-note {
  background-color: #eff6ff;
  padding: 1rem 1.25rem;
  border-left: 4px solid #3b82f6;
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 0.95rem;
}

.liability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.liability-card {
  background-color: #f8fafc;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.liability-card h4 {
  margin: 0 0 0.5rem 0;
  color: #dc2626;
}

.liability-card p {
  margin: 0;
  font-size: 0.9rem;
}

.declaration-box {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  padding: 1.25rem;
  border-radius: 0.75rem;
  margin: 1rem 0;
  border: 1px solid #10b981;
  border-left: 4px solid #10b981;
}

.declaration-box h4 {
  margin-top: 0;
  color: #065f46;
}

.declaration-box ol {
  margin: 0.75rem 0;
  padding-left: 1.25rem;
}

.declaration-box li {
  margin-bottom: 0.5rem;
}

.disclosure-box {
  background-color: #fefce8;
  border-left: 4px solid #eab308;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
}

.warranty-box {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.75rem;
  padding: 1rem;
  margin: 1rem 0;
}

.warranty-box ul {
  margin-top: 0.5rem;
}

.force-majeure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.75rem;
  background-color: #f8fafc;
  padding: 1rem;
  border-radius: 0.75rem;
  margin: 1rem 0;
}

.force-majeure-grid span {
  padding: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.contact-card {
  background-color: #f1f5f9;
  padding: 1.25rem;
  border-radius: 0.75rem;
  margin: 1rem 0;
  border: 1px solid #e2e8f0;
}

.contact-card p {
  margin-bottom: 0.5rem;
}

.jurisdiction-note {
  background-color: #f8fafc;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  font-size: 0.9rem;
}

.signature-line {
  margin-top: 1rem;
  text-align: center;
}

.signature-line p {
  margin: 0;
  font-size: 0.85rem;
  color: #64748b;
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
  .disclaimer-container {
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
  
  .liability-grid {
    grid-template-columns: 1fr;
  }
  
  .force-majeure-grid {
    grid-template-columns: 1fr;
  }
}
</style>