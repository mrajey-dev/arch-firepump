<template>
  <div class="refund-policy-container">
    <div class="policy-card">
      <h1 class="policy-title">Refund Policy</h1>
      <p class="last-updated">Last Updated: {{ lastUpdatedDate }}</p>
      <p class="effective-date">Effective Date: {{ effectiveDate }}</p>

      <div class="policy-section">
        <h2>1. Introduction</h2>
        <p>At <strong>{{ storeName }}</strong> (<strong>"Company"</strong>, <strong>"we"</strong>, <strong>"our"</strong>, or <strong>"us"</strong>), we are committed to ensuring your complete satisfaction with every purchase. This Refund Policy ("Policy") explains the circumstances under which you may be eligible for a refund, the process for requesting a refund, and the timelines for processing refunds.</p>
        <p>This Policy is part of and incorporated into our Terms of Service and Return Policy. By making a purchase on our website, you agree to the terms outlined below. This Policy is designed to comply with the Consumer Protection Act, 2019, Consumer Protection (E-Commerce) Rules, 2020, and RBI guidelines for payment aggregation and refund processing.</p>
      </div>

      <div class="policy-section">
        <h2>2. When Are Refunds Issued?</h2>
        <p>Refunds are issued in the following scenarios:</p>
        
        <h3>2.1 Product Quality Issues</h3>
        <ul>
          <li>Product received is defective, damaged, or has manufacturing defects</li>
          <li>Product is significantly different from the description or images on the website</li>
          <li>Product is expired or near expiry (less than 30% shelf life remaining, unless disclosed)</li>
          <li>Product is missing components, accessories, or parts as described</li>
          <li>Product fails to perform as advertised despite proper usage</li>
        </ul>
        
        <h3>2.2 Shipping & Delivery Issues</h3>
        <ul>
          <li>Product never delivered despite showing "delivered" status (subject to investigation)</li>
          <li>Product delivered to wrong address</li>
          <li>Product delivered in damaged packaging affecting the product inside</li>
          <li>Partial delivery where some items are missing from the order</li>
          <li>Delivery delay beyond {{ maxDeliveryDays }} days from the promised delivery date</li>
        </ul>
        
        <h3>2.3 Change of Mind / Buyer's Remorse</h3>
        <ul>
          <li>Customer no longer wants the product (subject to product eligibility)</li>
          <li>Customer found a better price elsewhere</li>
          <li>Customer ordered the wrong size, color, or variant</li>
          <li>Product does not fit (for clothing, shoes, accessories)</li>
          <li>Note: Refunds for change of mind are subject to a {{ restockingFeePercentage }}% restocking fee</li>
        </ul>
        
        <h3>2.4 Cancellation Refunds</h3>
        <ul>
          <li>Order cancelled before shipment: Full refund including all charges</li>
          <li>Order cancelled after shipment but before delivery: Refund minus shipping charges</li>
          <li>Order cancelled by us due to unavailability: Full refund including all charges</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>3. Refund Eligibility Period</h2>
        <p>To be eligible for a refund, you must initiate the refund request within the following timeframes from the date of delivery:</p>
        
        <table class="eligibility-table">
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Refund Window</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in eligibilityPeriods" :key="item.category">
              <td>{{ item.category }}</td>
              <td>{{ item.period }}</td>
              <td>{{ item.condition }}</td>
            </tr>
          </tbody>
        </table>
        
        <p class="note">Note: No refunds will be processed for requests made after the applicable refund window, except where required by applicable consumer protection laws.</p>
      </div>

      <div class="policy-section">
        <h2>4. Non-Refundable Items & Situations</h2>
        <p>The following items and situations are NOT eligible for any refund:</p>
        
        <div class="grid-two">
          <div class="list-card">
            <h4>Product Categories</h4>
            <ul>
              <li>Perishable goods (food, flowers, plants)</li>
              <li>Personal care items (cosmetics, skincare, hygiene products)</li>
              <li>Intimate apparel, lingerie, swimwear (if hygiene seal broken)</li>
              <li>Gift cards, vouchers, store credits</li>
              <li>Digital products, software licenses, e-books</li>
              <li>Subscription services (already consumed)</li>
              <li>Customized or personalized products</li>
              <li>Clearance, flash sale, or "final sale" items</li>
              <li>Products marked as "non-returnable" on product page</li>
            </ul>
          </div>
          <div class="list-card">
            <h4>Situations</h4>
            <ul>
              <li>Product damaged due to misuse, abuse, or improper handling</li>
              <li>Product altered, repaired, or modified by third parties</li>
              <li>Product used beyond reasonable inspection (stains, odors, wear)</li>
              <li>Original tags, labels, or packaging missing or tampered</li>
              <li>Product purchased more than {{ returnDays }} days ago</li>
              <li>Return requested without original invoice or proof of purchase</li>
              <li>Product specific to medical or health devices after use</li>
              <li>Software, games, or media with broken seal</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="policy-section">
        <h2>5. Refund Request Process</h2>
        <p>To request a refund, please follow these steps:</p>
        
        <div class="steps-container">
          <div class="step" v-for="(step, index) in refundSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
        
        <p>Once your refund request is submitted, you will receive a confirmation email with a refund request ID (format: RFND-YYYYMMDD-XXXXX). Please retain this ID for future reference.</p>
      </div>

      <div class="policy-section">
        <h2>6. Refund Processing Timeline</h2>
        <p>Our refund processing follows strict timelines as outlined below. All timelines are measured in <strong>business days</strong> (Monday to Friday, excluding public holidays).</p>
        
        <div class="timeline-visual">
          <div class="timeline-item" v-for="(stage, index) in refundTimeline" :key="index">
            <div class="timeline-marker">{{ index + 1 }}</div>
            <div class="timeline-content">
              <strong>{{ stage.stage }}</strong>
              <span>{{ stage.duration }}</span>
              <span class="timeline-desc">{{ stage.description }}</span>
            </div>
          </div>
        </div>
        
        <div class="total-timeline">
          <strong>Total Refund Processing Time:</strong> {{ totalRefundDays }} business days from request approval
        </div>
      </div>

      <div class="policy-section">
        <h2>7. Refund Amount Calculation</h2>
        <p>The refund amount depends on the reason for return and the condition of the product:</p>
        
        <table class="calculation-table">
          <thead>
            <tr>
              <th>Situation</th>
              <th>Product Price</th>
              <th>Taxes & Duties</th>
              <th>Original Shipping</th>
              <th>Return Shipping</th>
              <th>Restocking Fee</th>
              <th>Final Refund</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="scenario in refundScenarios" :key="scenario.situation">
              <td>{{ scenario.situation }}</td>
              <td>{{ scenario.productPrice }}</td>
              <td>{{ scenario.taxes }}</td>
              <td>{{ scenario.originalShipping }}</td>
              <td>{{ scenario.returnShipping }}</td>
              <td>{{ scenario.restockingFee }}</td>
              <td><strong>{{ scenario.finalRefund }}</strong></td>
            </tr>
          </tbody>
        </table>
        
        <p class="note">Note: "Full Refund" means 100% of the amount paid by the customer. Any deductions are clearly specified above.</p>
      </div>

      <div class="policy-section">
        <h2>8. Refund Methods & Credit Timeline</h2>
        <p>Refunds will be issued using the original payment method used at the time of purchase. The timeline for the refund to reflect in your account varies by payment method:</p>
        
        <table class="refund-methods-table">
          <thead>
            <tr>
              <th>Payment Method</th>
              <th>Refund Method</th>
              <th>Processing by Us</th>
              <th>Additional Time by Provider</th>
              <th>Total Estimated Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="method in refundMethods" :key="method.method">
              <td>{{ method.method }}</td>
              <td>{{ method.refundTo }}</td>
              <td>{{ method.ourProcessing }}</td>
              <td>{{ method.providerTime }}</td>
              <td>{{ method.totalTime }}</td>
            </tr>
          </tbody>
        </table>
        
        <div class="alert-box">
          <strong>Important Note on Cash on Delivery (COD) Refunds:</strong> For COD orders, refunds cannot be processed in cash. Refunds will be issued via NEFT/IMPS bank transfer to your bank account. You will be required to provide bank account details (Bank Name, Account Number, IFSC Code, Account Holder Name). Please allow an additional 3-5 business days for bank processing.
        </div>
      </div>

      <div class="policy-section">
        <h2>9. Partial Refunds</h2>
        <p>The following situations may result in partial refunds (typically 30% to 70% of the product price):</p>
        <ul>
          <li>Product returned with missing parts, accessories, or original packaging (30-50% deduction)</li>
          <li>Product shows signs of use, minor damage, or wear beyond inspection (40-60% deduction)</li>
          <li>Product returned after the refund window but within grace period (at our discretion, 20-50% deduction)</li>
          <li>Product used but has a genuine manufacturing defect (70-90% refund, prorated based on usage)</li>
          <li>Subscription service partially consumed (refund prorated for unused portion)</li>
          <li>Bulk orders where only some items are returned (refund only for returned items)</li>
        </ul>
        <p>Partial refund decisions are made on a case-by-case basis and will be communicated to you before processing.</p>
      </div>

      <div class="policy-section">
        <h2>10. Late or Missing Refunds</h2>
        <p>If you haven't received your refund within the stated timeline, please follow these steps:</p>
        
        <ol>
          <li><strong>Check your bank account</strong> - Refunds may take additional time to appear depending on your bank's processing</li>
          <li><strong>Contact your credit card company</strong> - It may take 3-7 business days after we process the refund for it to post</li>
          <li><strong>Contact your bank</strong> - There is often processing time before a refund is posted to your account</li>
          <li><strong>Check payment method</strong> - Ensure you're checking the same account/card used for the original purchase</li>
          <li><strong>Verify refund status</strong> - Log into your account on our website and check order history for refund status</li>
        </ol>
        
        <p>If you've done all of the above and still haven't received your refund after {{ maxRefundWaitDays }} business days, please contact us at <strong>{{ supportEmail }}</strong> with your order number and refund request ID. We will initiate a trace investigation which may take 5-7 business days.</p>
      </div>

      <div class="policy-section">
        <h2>11. Refund for International Orders</h2>
        <p>For orders shipped outside India, additional considerations apply:</p>
        <ul>
          <li>Customs duties, import taxes, and brokerage fees paid at the time of delivery are non-refundable</li>
          <li>International return shipping costs are the customer's responsibility unless the return is due to our error</li>
          <li>Currency conversion fluctuations may affect the refund amount. Refunds will be processed in INR at the exchange rate on the date of refund processing</li>
          <li>Refunds may take 15-25 business days due to international banking processing times</li>
          <li>We are not responsible for any fees charged by your bank for international refund processing</li>
          <li>For international transactions, refunds will be credited to the original card/account after 15-20 business days</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>12. Grievance Redressal for Refund Issues</h2>
        <p>If you are dissatisfied with the refund decision or believe your refund has been unjustly denied, you may escalate the matter to our Grievance Officer:</p>
        
        <div class="contact-card">
        
          <p><strong>Address:</strong> {{ registeredAddress }}</p>
          <p><strong>Response Time:</strong> 48 hours (business days)</p>
        </div>
        
        <p>In your grievance communication, please include:</p>
        <ul>
          <li>Order number and refund request ID</li>
          <li>Date of purchase and date of refund request</li>
          <li>Product name and reason for refund denial (if any)</li>
          <li>Screenshot of communication with customer support (if applicable)</li>
          <li>Your contact information for follow-up</li>
        </ul>
        
        <p>If your grievance is not resolved within 30 days, you may approach the appropriate consumer forum under the Consumer Protection Act, 2019.</p>
      </div>

      <div class="policy-section">
        <h2>13. Cancellation & Associated Refunds</h2>
        <p>Refunds arising from order cancellations are processed as follows:</p>
        
        <h3>13.1 Cancellation Before Shipment</h3>
        <ul>
          <li>Full refund of the entire order amount including all taxes and shipping charges</li>
          <li>Refund initiated within 24 hours of cancellation request</li>
          <li>Amount reflects in your account within 5-7 business days</li>
        </ul>
        
        <h3>13.2 Cancellation After Shipment (Before Delivery)</h3>
        <ul>
          <li>Full refund of product price and taxes</li>
          <li>Shipping charges are non-refundable as the shipment has already been dispatched</li>
          <li>Customer must refuse delivery or return the package unopened</li>
          <li>Refund initiated after we receive the returned package at our warehouse</li>
        </ul>
        
        <h3>13.3 Cancellation by Company</h3>
        <ul>
          <li>If we cancel your order due to product unavailability, pricing error, or suspected fraud</li>
          <li>100% full refund including all charges will be issued</li>
          <li>Refund initiated within 48 hours of cancellation notice</li>
          <li>We may offer store credit as an alternative, which you may accept or decline</li>
        </ul>
      </div>

      <div class="policy-section">
        <h2>14. Special Circumstances & Force Majeure</h2>
        <p>In cases of force majeure events (natural disasters, pandemics, government restrictions, strikes, supply chain disruptions, etc.), refund processing timelines may be extended. We will communicate any delays through our website and via email. Refund eligibility remains as per this policy, but processing may take up to 45 business days in extreme circumstances.</p>
        <p>For prepaid orders during festive sales or special promotions, refunds will be processed according to the promotion's specific terms, which will be clearly communicated on the product page and promotional materials.</p>
      </div>

      <div class="policy-section">
        <h2>15. Legal Compliance & Payment Gateway Requirements</h2>
        <p>This Refund Policy complies with the following regulations as required for payment gateway integration (including Razorpay):</p>
        <ul>
          <li>Reserve Bank of India (RBI) Guidelines on Credit and Debit Card Issuance and Transaction</li>
          <li>RBI Circular on Harmonization of Turnaround Time (TAT) for Refunds</li>
          <li>Payment and Settlement Systems Act, 2007</li>
          <li>Consumer Protection (E-Commerce) Rules, 2020 - Rule 5(6) requiring clear refund policies</li>
          <li>Income Tax Act, 1961 (TDS on certain refunds where applicable)</li>
        </ul>
        
        <div class="declaration-box">
          <h4>Declaration for Payment Gateway (Razorpay Verification)</h4>
          <p>I/we hereby declare and confirm that:</p>
          <ol>
            <li>This Refund Policy is prominently displayed on our website and is accessible before, during, and after the purchase process</li>
            <li>We have the technical capability and financial capacity to process refunds within the timelines stated above</li>
            <li>We maintain a dedicated refund reserve fund as required by our payment gateway agreement</li>
            <li>We do not engage in any unfair or deceptive trade practices regarding refunds</li>
            <li>All refunds are processed in compliance with RBI's mandate on maximum refund turnaround time</li>
            <li>We have a documented internal refund approval process and trained customer support staff</li>
            <li>We maintain logs of all refund requests, approvals, denials, and processing for audit purposes (minimum 5 years retention)</li>
          </ol>
          <p><strong>Authorized Signatory:</strong> {{ authorizedSignatory }}</p>
          <p><strong>Legal Entity:</strong> {{ legalEntityName }}</p>
          <p><strong>PAN:</strong> {{ pan }}</p>
          <p><strong>GSTIN:</strong> {{ gstin }}</p>
        </div>
      </div>

      <div class="policy-section">
        <h2>16. Contact Information for Refund Queries</h2>
        <p>For any questions, concerns, or assistance regarding refunds, please contact our Refund Support Team:</p>
        
        <div class="contact-grid">
          <div class="contact-item">
            <strong>📧 Email (Primary):</strong> {{ supportEmail }}
          </div>
          <div class="contact-item">
            <strong>📞 Phone (Refund Helpline):</strong> {{ supportPhone }}
          </div>
          <div class="contact-item">
            <strong>💬 WhatsApp:</strong> {{ whatsappNumber }}
          </div>
          <div class="contact-item">
            <strong>🏢 Registered Office:</strong> {{ registeredAddress }}
          </div>
          <div class="contact-item">
            <strong>🕐 Support Hours:</strong> Monday to Saturday, 09:30 AM - 5:30 PM IST
          </div>
         
        </div>
      </div>

      <div class="footer-note">
        <p><strong>Note to Customers:</strong> This Refund Policy is legally binding. By making a purchase on our website, you agree to these terms. We reserve the right to update this policy at any time. Changes will be effective immediately upon posting. Please review this policy periodically. For any disputes, the laws of India shall apply and courts in {{ legalJurisdiction }} shall have exclusive jurisdiction.</p>
        <p class="signature">— {{ storeName }} Management</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RefundPolicy',
  data() {
    return {
      // ============================================
      // BUSINESS CONFIGURATION - UPDATE THESE VALUES
      // ============================================
      storeName: 'Arch Enterprises',
      legalEntityName: 'Arch Enterprises',
      authorizedSignatory: 'Prasad Sahadeo Kothawade',
     
      supportEmail: 'contact@archenterprises.co.in',
      supportPhone: '+91 83456 78901',
      whatsappNumber: '+91 83456 78901',
      registeredAddress: 'Plot No. 49, Prathamesh, Khutwadnagar, Kamathwade, Nashik, Maharashtra, India - 422 008.',
      legalJurisdiction: 'Nashik, Maharashtra',
      pan: 'ASHPK7144E',
      gstin: '27ASHPK7144E1ZQ',
      
      // Policy Parameters
      returnDays: 7,
      maxDeliveryDays: 10,
      restockingFeePercentage: 10,
      totalRefundDays: '15-25',
      maxRefundWaitDays: 15,
      
      // Eligibility Periods Table Data
      eligibilityPeriods: [
        { category: 'Electronics & Gadgets', period: '7 days', condition: 'Unused, original packaging' },
        { category: 'Clothing & Apparel', period: '7 days', condition: 'Unworn, tags attached' },
        { category: 'Footwear', period: '7 days', condition: 'Unworn, original box' },
        { category: 'Home & Living', period: '7 days', condition: 'Unused, original packaging' },
        { category: 'Beauty & Personal Care', period: '3 days', condition: 'Sealed, unused' },
        { category: 'Jewelry & Accessories', period: '5 days', condition: 'Unworn, original packaging' },
        { category: 'Toys & Games', period: '7 days', condition: 'Unopened, seal intact' },
        { category: 'Books & Stationery', period: '7 days', condition: 'No markings, no damage' },
        { category: 'Health & Fitness', period: '5 days', condition: 'Unused, hygiene seal intact' },
        { category: 'Groceries', period: '48 hours', condition: 'Perishables not eligible' }
      ],
      
      // Refund Steps
      refundSteps: [
        { title: 'Initiate Request', description: 'Log into your account, go to Orders, find the product, and click "Request Refund". Or email us at ' + this.supportEmail + ' with your order number and reason.' },
        { title: 'Provide Documentation', description: 'Upload clear photos/videos showing the issue (for quality claims). For change of mind, no documentation is required.' },
        { title: 'Receive Authorization', description: 'Our team reviews your request within 2-3 business days and sends a return authorization with RMA number and shipping instructions.' },
        { title: 'Ship Product Back', description: 'Pack the product securely, attach the RMA label, and ship to our returns address. Keep the shipping receipt with tracking number.' },
        { title: 'Quality Inspection', description: 'Once received, our team inspects the product within 5-7 business days to verify return eligibility.' },
        { title: 'Refund Processing', description: 'After inspection approval, refund is processed within 7-10 business days via original payment method.' }
      ],
      
      // Refund Timeline Stages
      refundTimeline: [
        { stage: 'Request Submission', duration: '0-1 day', description: 'Customer submits refund request' },
        { stage: 'Initial Review', duration: '2-3 days', description: 'Team reviews and approves/denies request' },
        { stage: 'Return Shipping', duration: '3-7 days', description: 'Customer ships product back' },
        { stage: 'Warehouse Receipt', duration: '3-5 days', description: 'Product received at our facility' },
        { stage: 'Quality Inspection', duration: '5-7 days', description: 'Product inspected for eligibility' },
        { stage: 'Refund Approval', duration: '1-2 days', description: 'Final approval and finance processing' },
        { stage: 'Gateway Processing', duration: '3-5 days', description: 'Payment gateway processes refund' },
        { stage: 'Bank/Card Credit', duration: '3-7 days', description: 'Amount appears in customer account' }
      ],
      
      // Refund Scenarios Table
      refundScenarios: [
        { situation: 'Defective/Damaged Product', productPrice: '100%', taxes: '100%', originalShipping: '100%', returnShipping: '0%', restockingFee: '0%', finalRefund: 'Full Refund' },
        { situation: 'Wrong Product Received', productPrice: '100%', taxes: '100%', originalShipping: '100%', returnShipping: '0%', restockingFee: '0%', finalRefund: 'Full Refund' },
        { situation: 'Change of Mind (Unopened)', productPrice: '100%', taxes: '100%', originalShipping: '0%', returnShipping: '0%', restockingFee: '0%', finalRefund: 'Product price + taxes' },
        { situation: 'Change of Mind (Opened/Used)', productPrice: '90%', taxes: '100%', originalShipping: '0%', returnShipping: 'Customer pays', restockingFee: '10%', finalRefund: '90% of product price' },
        { situation: 'Size/Fit Issue', productPrice: '100%', taxes: '100%', originalShipping: '0%', returnShipping: 'Customer pays', restockingFee: '0%', finalRefund: 'Product price + taxes' },
        { situation: 'Package Lost in Transit', productPrice: '100%', taxes: '100%', originalShipping: '100%', returnShipping: '0%', restockingFee: '0%', finalRefund: 'Full Refund' },
        { situation: 'Delay Beyond Promise', productPrice: '100%', taxes: '100%', originalShipping: '100%', returnShipping: '0%', restockingFee: '0%', finalRefund: 'Full Refund' }
      ],
      
      // Refund Methods Table
      refundMethods: [
        { method: 'Credit Card', refundTo: 'Original Credit Card', ourProcessing: '7-10 days', providerTime: '3-5 days', totalTime: '10-15 business days' },
        { method: 'Debit Card', refundTo: 'Original Debit Card', ourProcessing: '7-10 days', providerTime: '3-7 days', totalTime: '10-17 business days' },
        { method: 'Net Banking', refundTo: 'Original Bank Account', ourProcessing: '7-10 days', providerTime: '2-4 days', totalTime: '9-14 business days' },
        { method: 'UPI', refundTo: 'Original UPI ID', ourProcessing: '5-7 days', providerTime: '1-3 days', totalTime: '6-10 business days' },
        { method: 'Digital Wallet', refundTo: 'Original Wallet', ourProcessing: '5-7 days', providerTime: '1-2 days', totalTime: '6-9 business days' },
        { method: 'Cash on Delivery', refundTo: 'Bank Transfer', ourProcessing: '10-12 days', providerTime: '3-5 days', totalTime: '13-17 business days' },
        { method: 'EMI (Credit Card)', refundTo: 'Original Credit Card', ourProcessing: '10-12 days', providerTime: '5-7 days', totalTime: '15-19 business days' }
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
    },
    effectiveDate() {
      const date = new Date()
      date.setDate(date.getDate() - 30)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.refund-policy-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: #f8fafc;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.policy-card {
  background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
  border-radius: 1.5rem;
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.1);
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
  letter-spacing: -0.02em;
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
  margin: 1rem 0 0.75rem 0;
}

.policy-section h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
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

.eligibility-table, .calculation-table, .refund-methods-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.25rem 0;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.eligibility-table th, .calculation-table th, .refund-methods-table th {
  background: linear-gradient(135deg, #1e293b 0%, #2d3748 100%);
  color: white;
  padding: 0.875rem;
  text-align: left;
  font-weight: 600;
}

.eligibility-table td, .calculation-table td, .refund-methods-table td {
  border: 1px solid #e2e8f0;
  padding: 0.875rem;
  vertical-align: top;
}

.eligibility-table tr:nth-child(even), .calculation-table tr:nth-child(even), .refund-methods-table tr:nth-child(even) {
  background-color: #f8fafc;
}

.grid-two {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
}

.list-card {
  background-color: #f8fafc;
  padding: 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.list-card h4 {
  margin-top: 0;
  color: #0f172a;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h4 {
  margin: 0 0 0.25rem 0;
  color: #0f172a;
}

.step-content p {
  margin: 0;
  color: #475569;
}

.timeline-visual {
  margin: 1.5rem 0;
}

.timeline-item {
  display: flex;
  gap: 1rem;
  padding: 0.75rem 0;
  border-left: 3px solid #3b82f6;
  margin-left: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-marker {
  position: absolute;
  left: -0.65rem;
  top: 0.75rem;
  width: 1rem;
  height: 1rem;
  background-color: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
}

.timeline-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.timeline-content strong {
  color: #0f172a;
}

.timeline-desc {
  font-size: 0.85rem;
  color: #64748b;
}

.total-timeline {
  background: linear-gradient(135deg, #dbeafe, #eff6ff);
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  color: #1e40af;
  margin-top: 1rem;
  text-align: center;
}

.contact-card, .declaration-box {
  background-color: #f1f5f9;
  padding: 1.25rem;
  border-radius: 0.75rem;
  margin: 1rem 0;
  border: 1px solid #e2e8f0;
}

.contact-card p, .declaration-box p {
  margin-bottom: 0.5rem;
}

.declaration-box {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  border-left: 4px solid #10b981;
}

.declaration-box h4 {
  margin-top: 0;
  color: #065f46;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.contact-item {
  background-color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
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
  .refund-policy-container {
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
  
  .eligibility-table, .calculation-table, .refund-methods-table {
    display: block;
    overflow-x: auto;
    font-size: 0.8rem;
  }
  
  .grid-two {
    grid-template-columns: 1fr;
  }
  
  .step {
    flex-direction: column;
  }
  
  .step-number {
    margin-bottom: 0.5rem;
  }
  
  .timeline-item {
    margin-left: 0.5rem;
  }
}
</style>