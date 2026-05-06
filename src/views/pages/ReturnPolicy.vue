<template>
  <div class="return-policy-container">
    <div class="policy-card">
      <h1 class="policy-title">Return & Refund Policy</h1>
      <p class="last-updated">Last Updated: {{ lastUpdatedDate }}</p>

      <div class="policy-section">
        <h2>1. Overview</h2>
        <p>At {{ storeName }}, we value your trust and strive to ensure your complete satisfaction with every purchase. This Return & Refund Policy outlines the terms and conditions under which you may return products purchased from our website.</p>
        <p>By making a purchase on our website, you agree to the terms of this policy. Please read it carefully before completing your transaction.</p>
      </div>

      <div class="policy-section">
        <h2>2. Return Eligibility Period</h2>
        <p>You have <strong>{{ returnDays }} days</strong> from the date of delivery to initiate a return request. Any request received after this period will not be entertained unless required by applicable consumer laws.</p>
        <p>The following criteria must be met for a product to be eligible for return:</p>
        <ul>
          <li>The product must be unused, unworn, and in the same condition as received</li>
          <li>All original tags, labels, and packaging must be intact</li>
          <li>The product must not show any signs of damage, alteration, or misuse</li>
          <li>Original invoice or proof of purchase must be presented</li>
          <li>Products sold as "non-returnable" or "final sale" are not eligible</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>3. Non-Returnable Items</h2>
        <p>The following items are NOT eligible for return or refund:</p>
        <ul>
          <li>Perishable goods such as food, flowers, or plants</li>
          <li>Personal care items, cosmetics, and hygiene products that have been opened</li>
          <li>Intimate or sanitary goods</li>
          <li>Gift cards and digital products</li>
          <li>Downloadable software or online subscriptions</li>
          <li>Customized, personalized, or made-to-order products</li>
          <li>Products damaged due to misuse, improper handling, or accidents</li>
          <li>Products purchased during clearance or flash sales marked "final sale"</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>4. Return Process</h2>
        <p>To initiate a return, please follow these steps:</p>
        <ol>
          <li>Contact our customer support team at <strong>{{ supportEmail }}</strong> or call <strong>{{ supportPhone }}</strong> within the eligibility period</li>
          <li>Provide your order number, product details, and reason for return</li>
          <li>Share clear photographs or videos of the product showing any defects (if applicable)</li>
          <li>Wait for return authorization approval from our team (typically within 2-3 business days)</li>
          <li>Once approved, pack the product securely in its original packaging</li>
          <li>Affix the provided return shipping label (if applicable) and ship the product to our returns address</li>
          <li>Share the tracking ID with our customer support team</li>
        </ol>
        <p class="note">Note: Return shipping costs may be borne by the customer unless the return is due to a defective or incorrect product received.</p>
      </div>

      <div class="policy-section">
        <h2>5. Refund Process & Timeline</h2>
        <p>Once we receive and inspect your returned product, we will process your refund according to the following timeline:</p>
        <ul>
          <li><strong>Inspection Period:</strong> 5-7 business days from receipt of returned product</li>
          <li><strong>Refund Processing:</strong> 7-10 business days after approval</li>
          <li><strong>Credit Reflection:</strong> Additional 3-7 business days depending on your payment provider</li>
        </ul>
        <p>Total refund timeline from the date of return initiation: <strong>15-25 business days</strong></p>
        <p>Refunds will be issued using the original payment method used at the time of purchase. This includes:</p>
        <ul>
          <li>Credit/Debit Cards (Visa, Mastercard, RuPay, American Express)</li>
          <li>Net Banking</li>
          <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
          <li>Digital Wallets</li>
          <li>Cash on Delivery refunds will be processed via bank transfer or store credit</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>6. Exchange Policy</h2>
        <p>We offer exchanges for size, color, or variant changes subject to product availability. Exchange requests must be initiated within <strong>{{ exchangeDays }} days</strong> of delivery. The following conditions apply:</p>
        <ul>
          <li>Exchanges are processed as a new order; original payment is refunded</li>
          <li>Price differences for higher-value items must be paid by the customer</li>
          <li>Price differences for lower-value items will be refunded</li>
          <li>Additional shipping charges may apply for exchange shipments</li>
          <li>Products purchased during discount periods are subject to current pricing for exchanges</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>7. Cancellation Policy</h2>
        <p><strong>Before Shipment (Processing Period):</strong> Customers may cancel orders within 24 hours of placing the order for a full refund. After 24 hours or once the order has been processed for shipping, cancellations may not be possible.</p>
        <p><strong>After Shipment:</strong> Once an order has been shipped, it cannot be cancelled. You will need to follow the return process after receiving the product.</p>
        <p><strong>On-Request Cancellations:</strong> For subscription-based products or pre-orders, cancellation terms may vary. Please refer to the specific product page or contact support.</p>
        <p><strong>Partial Cancellations:</strong> You may cancel specific items from a multi-item order, and the refund will be processed for only those items.</p>
      </div>

      <div class="policy-section">
        <h2>8. Damaged, Defective, or Incorrect Products</h2>
        <p>If you receive a product that is damaged, defective, or different from what you ordered, please contact us immediately. We take such matters seriously:</p>
        <ul>
          <li>Report within <strong>48 hours</strong> of delivery for fastest resolution</li>
          <li>Provide unboxing video or clear photographs showing the issue</li>
          <li>Do not use or attempt to repair the product</li>
          <li>Keep all original packaging materials</li>
        </ul>
        <p>For verified cases of damaged, defective, or incorrect products:</p>
        <ul>
          <li>Full refund including original shipping charges</li>
          <li>No return shipping costs will be charged to the customer</li>
          <li>Replacement will be shipped at no additional cost (subject to availability)</li>
          <li>Refund will be processed within 5-7 business days</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>9. Return Shipping Address</h2>
        <p>Please send all returns to the following address after obtaining return authorization:</p>
        <div class="address-box">
          <p><strong>{{ storeName }} Returns Department</strong></p>
        
          <p>{{ returnAddressLine2 }}</p>
          <p>{{ returnCity }} - {{ returnPinCode }}, {{ returnState }}</p>
          <p>Country: {{ returnCountry }}</p>
          <p>Phone: {{ supportPhone }}</p>
          <p>Email: {{ supportEmail }}</p>
        </div>
        <p class="note">Important: Unauthorized returns sent to any other address will not be processed and may be rejected or discarded.</p>
      </div>

      <div class="policy-section">
        <h2>10. Shipping Charges & Return Costs</h2>
        <ul>
          <li><strong>Original Shipping Charges:</strong> Non-refundable unless return is due to our error (damaged/defective/incorrect product)</li>
          <li><strong>Return Shipping:</strong> Customer bears return shipping costs for change-of-mind returns</li>
          <li><strong>Restocking Fee:</strong> A 10% restocking fee (minimum ₹50) may apply for opened or used products</li>
          <li><strong>Cash on Delivery Orders:</strong> Refund amount excludes payment gateway/cash handling fees where applicable</li>
          <li><strong>International Returns:</strong> Customs duties, taxes, and international return shipping costs are the customer's responsibility</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>11. Refund Methods & Timeline Summary</h2>
        <table class="refund-table">
          <thead>
            <tr>
              <th>Payment Method</th>
              <th>Refund Method</th>
              <th>Processing Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="method in refundMethods" :key="method.method">
              <td>{{ method.method }}</td>
              <td>{{ method.refundTo }}</td>
              <td>{{ method.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="policy-section">
        <h2>12. Customer Support & Dispute Resolution</h2>
        <p>If you have any questions, concerns, or wish to initiate a return, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> {{ supportEmail }}</li>
          <li><strong>Phone:</strong> {{ supportPhone }}</li>
          <li><strong>Support Hours:</strong> Monday to Saturday, 10:00 AM - 7:00 PM (IST)</li>
          <li><strong>Registered Office Address:</strong> {{ registeredAddress }}</li>
        </ul>
        <p>For any disputes regarding returns or refunds, please contact our grievance officer:</p>
        <ul>
          <li><strong>Response Time:</strong> 48 hours (business days)</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>13. Legal Compliance & Disclosures</h2>
        <p>This Return & Refund Policy complies with:</p>
        <ul>
          <li>Consumer Protection Act, 2019 (India)</li>
          <li>Consumer Protection (E-Commerce) Rules, 2020</li>
          <li>Legal Metrology Act, 2009 (for packaged commodities)</li>
          <li>RBI guidelines for payment aggregation and refund processing</li>
        </ul>
        <p><strong>Business Information:</strong></p>
        <ul>
          <li>Legal Entity Name: {{ legalEntityName }}</li>
          <li>GSTIN: {{ gstin }}</li>
          <li>CIN (if company): {{ cin }}</li>
          <li>PAN: {{ pan }}</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>14. Policy Modifications</h2>
        <p>We reserve the right to modify or update this Return & Refund Policy at any time without prior notice. Changes will be effective immediately upon posting on this page. We encourage you to review this policy periodically. The "Last Updated" date at the top of this page indicates when changes were last made.</p>
        <p>Any transaction made before a policy change will be governed by the policy in effect at the time of purchase.</p>
      </div>

      <div class="policy-section">
        <h2>15. Acceptance of Terms</h2>
        <p>By making a purchase on our website, you acknowledge that you have read, understood, and agreed to all the terms and conditions outlined in this Return & Refund Policy. If you do not agree with any part of this policy, please do not proceed with your purchase.</p>
      </div>

      <div class="declaration">
        <p><strong>Declaration for Payment Gateway (Razorpay):</strong></p>
        <p>I/we hereby declare that the above information is true and correct to the best of my/our knowledge and belief. This Return & Refund Policy is prominently displayed on our website and is accessible to all customers before, during, and after the purchase process. We commit to processing all refunds within the timelines specified above and in accordance with the guidelines of the Reserve Bank of India and applicable laws.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReturnPolicy',
  data() {
    return {
      // Store Configuration - UPDATE THESE WITH YOUR ACTUAL BUSINESS DETAILS
      storeName: 'Arch Enterprises',
      returnDays: 7,
      exchangeDays: 7,
      supportEmail: 'contact@archenterprises.co.in',
      supportPhone: '+91 8390704453',
      
      returnAddressLine2: 'Plot No. 49, Prathamesh, Khutwadnagar, Kamathwade, Nashik, Maharashtra, India - 422 008.',
      returnCity: 'Nashik',
      returnState: 'Maharashtra',
      returnPinCode: '422008',
      returnCountry: 'India',
      registeredAddress: 'Plot No. 49, Prathamesh, Khutwadnagar, Kamathwade, Nashik, Maharashtra, India - 422 008.',
      gstin: '27ASHPK7144E1ZQ',
      pan: 'ASHPK7144E',
      refundMethods: [
        { method: 'Credit/Debit Card', refundTo: 'Original Card', time: '7-10 business days' },
        { method: 'Net Banking', refundTo: 'Original Bank Account', time: '7-10 business days' },
        { method: 'UPI', refundTo: 'Original UPI ID', time: '5-7 business days' },
        { method: 'Digital Wallet', refundTo: 'Original Wallet', time: '3-5 business days' },
        { method: 'Cash on Delivery', refundTo: 'Bank Transfer / Store Credit', time: '10-15 business days' }
      ]
    }
  },
  computed: {
    lastUpdatedDate() {
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
.return-policy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: #f9fafb;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.policy-card {
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.policy-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  border-bottom: 3px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.last-updated {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
}

.policy-section {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.policy-section:last-of-type {
  border-bottom: none;
}

.policy-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.policy-section p {
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  margin-bottom: 0.75rem;
}

.policy-section ul, .policy-section ol {
  margin: 0.75rem 0 0.75rem 1.5rem;
  color: #374151;
  line-height: 1.6;
}

.policy-section li {
  margin-bottom: 0.5rem;
}

.note {
  background-color: #fef3c7;
  padding: 0.75rem;
  border-left: 4px solid #f59e0b;
  margin-top: 1rem;
  border-radius: 0.25rem;
}

.address-box {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-family: monospace;
  line-height: 1.8;
}

.refund-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.refund-table th, .refund-table td {
  border: 1px solid #d1d5db;
  padding: 0.75rem;
  text-align: left;
}

.refund-table th {
  background-color: #f3f4f6;
  font-weight: 600;
  color: #111827;
}

.refund-table td {
  color: #374151;
}

.declaration {
  background-color: #ecfdf5;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  border: 1px solid #a7f3d0;
}

.declaration p {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.declaration p:first-child {
  font-weight: 700;
  color: #065f46;
}

@media (max-width: 768px) {
  .return-policy-container {
    padding: 1rem;
  }
  
  .policy-card {
    padding: 1.25rem;
  }
  
  .policy-title {
    font-size: 1.5rem;
  }
  
  .policy-section h2 {
    font-size: 1.25rem;
  }
  
  .refund-table {
    display: block;
    overflow-x: auto;
  }
}
</style>