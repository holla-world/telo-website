<template>
  <div class="main">
    <div class="header">
      <div class="title" @click="jump('/')">
        <img src="../../../assets/bg_title.webp" alt="" />
      </div>
      <div class="menu" @click="showDrawer()">
        <img src="../../../assets/bg_menu.webp" alt="" />
      </div>
    </div>
    <el-drawer v-model="drawer" :with-header="true">
      <div class="drawer">
        <p @click="jump('/policy')">Privacy Policy</p>
        <p @click="jump('/service')">Terms of Service</p>
      </div>
    </el-drawer>
    <div class="content">
      <div class="phrase">
        <p class="title">Telo Terms of Service</p>
        <p class="desc">
          Hello! This is Telo. We have formulated these Service Terms (“Terms”) so that you are cognizant of the
          regulations governing our relationship. We have endeavored to reduce the usage of legal terminology as much as
          possible, but there may still be some portions that resemble a traditional contract. Kindly peruse them
          attentively. By availing yourself of our services, you are signifying your assent to these Terms. If you do
          not concur, please refrain from utilizing the services. The following Service Terms encompass your obligations
          when using our mobile application (“App”) or service (as defined herein), or any content that is generated or
          furnished by or through the App or service. They also apply when you vend products on the App and create User
          Contributed Content (as defined herein). Additionally, please examine our Privacy Policy, which is an integral
          part of these Terms and elucidates how we handle your personal information. Thoroughly read these Service
          Terms before using the App or service. By accessing the App or employing any part of the service, you are
          agreeing to these terms. If you do not agree, do not access the App or utilize the service. Nothing in this
          agreement bestows rights or advantages upon third parties. NEGOTIATION NOTE: These Terms contain an
          arbitration clause later on. With the exception of certain disputes mentioned therein, you and Telo agree to
          resolve disputes through mandatory binding arbitration and waive the right to participate in class-action
          lawsuits or class-wide arbitration.
        </p>
      </div>
      <div class="phrase">
        <p class="title">1.Service Eligibility</p>
        <p class="desc">
          Individuals who are under the age of 18 are prohibited from creating an account or utilizing the services.
          Certain additional services might demand that you be of a greater age. Thoroughly peruse all the terms. You
          possess the ability to enter into a contractual agreement with Telo. You will adhere to these terms as well as
          all applicable laws. In case the services are being used for a business or an entity, you must have the
          necessary authorization. For government entities of the United States or China, follow the amendment. Those
          under 18 years of age are not permitted. You affirm and guarantee that you are at least 18 years old. In the
          event that this is false, Telo shall not be held responsible. Are you under 18? If so, you can only use the
          services with the approval of a parent or guardian and discuss the terms with them.
        </p>
      </div>
      <div class="phrase">
        <p class="title">2.Rights Granted to You</p>
        <p class="desc">
          Telo bestows upon you a personal, non-transferable, and revocable license to access and make use of the
          services in accordance with these Terms. Our software may automatically download enhancements. You can manage
          this setting in the device's settings. Do not copy, modify, or otherwise alter our services. Reverse
          engineering is not allowed without permission, except when permitted by law.
        </p>
      </div>
      <div class="phrase">
        <p class="title">3.Rights Granted to Us</p>
        <p class="desc">
          A significant number of our services enable you to create and store content. You retain ownership rights;
          however, you grant us a license to use it. For all of our services, Telo holds a license to utilize, display,
          and perform other actions with your content for the purpose of improving the services. For public services
          such as Local, the license is more extensive. We are able to use your content in a variety of manners. We may
          review and remove your content if it violates the terms and conditions. You are accountable for your own
          content. Our services may contain advertisements. By using our services, you give your consent to the presence
          of ads. We highly appreciate feedback, but we can use it without compensating you.
        </p>
      </div>
      <div class="phrase">
        <p class="title">4.Third-Party Content</p>
        <p class="desc">
          A large portion of the content in our service is provided by users and third parties. They are responsible for
          their respective content. Telo may conduct reviews, but not all content is examined. We cannot be held liable
          for the content provided by others. We do not endorse user-generated content. Relying on it is at your own
          risk.
        </p>
      </div>
      <div class="phrase">
        <p class="title">5.Privacy</p>
        <p class="desc">
          Your privacy holds significant importance and is something that we take very seriously. It is crucial for you
          to read our privacy policy thoroughly in order to gain a comprehensive understanding of exactly how we handle
          your personal information. When you utilize our services, it inherently implies that you are giving your
          explicit consent to our handling of your data. We are committed to ensuring the security and proper management
          of your information, and our privacy policy outlines the measures we take to protect your privacy while
          providing you with the best possible service experience.
        </p>
      </div>
      <div class="phrase">
        <p class="title">6.Respecting Rights</p>
        <p class="desc">
          Telo holds a deep respect for the rights of others; likewise, you are expected to do the same. Do not upload
          any content that infringes upon rights, engages in bullying behavior, or any other inappropriate actions.
          Additionally, respect Telo's rights as well. Do not use our branding or any other intellectual property
          without obtaining proper permission. We have the right to remove user content that violates our terms and
          conditions. We may access information as required for legal or security purposes. We cannot be held liable for
          offensive or inappropriate content. Use our services at your own risk.
        </p>
      </div>
      <div class="phrase">
        <p class="title">7.Copyright Respect</p>
        <p class="desc">
          You consent to only upload content for which you possess the appropriate permission to utilize and that does
          not encroach upon the rights of others. Telo holds copyrights in high regard and strictly complies with the
          Digital Millennium Copyright Act. In case you suspect any act of infringement, kindly report it and furnish
          the necessary details.
        </p>
      </div>
      <div class="phrase">
        <p class="title">8.Safety</p>
        <p class="desc">
          We make every effort to maintain a safe environment, but we cannot guarantee it completely. By using the
          services, you agree not to use them for illegal purposes, not develop unauthorized applications, not interfere
          with others, not use the accounts of others, not post inappropriate content, not upload viruses, not bypass
          filters, not test for vulnerabilities, and not encourage violations. We have the right to investigate and take
          legal action against violations. Do not use the services in a way that distracts you from adhering to safety
          laws.
        </p>
      </div>
      <div class="phrase">
        <p class="title">9.Account</p>
        <p class="desc">
          You are fully responsible for the security and proper management of your account. It is essential that you
          take all necessary measures to keep your account secure. Do not create multiple accounts without a legitimate
          reason. Additionally, if your account has been disabled, do not attempt to create a new one without obtaining
          proper permission. Under no circumstances should you sell access to your account or share your password with
          others. Also, refrain from logging in to your account through unauthorized applications. By adhering to these
          guidelines, you can help ensure the integrity and security of your account and the overall user experience on
          our platform.
        </p>
      </div>
      <div class="phrase">
        <p class="title">10.Purchases and Payments</p>
        <p class="desc">
          Telo provides friendship-making services that can be acquired by using app gems. The handling of payments is
          carried out by third-party service providers. Once a purchase is made, it is considered final and cannot be
          refunded. Virtual products may be for single use or repeated use, but they can be modified or even eliminated.
          Inactive accounts may have their free virtual coins frozen or suspended. Individuals under the age of 18
          require the consent of a parent or guardian for making purchases. Telo is not engaged in the business of
          providing money services. In-app purchases are made through authorized platforms and are subject to the terms
          and conditions of those platforms. Generally speaking, charges for in-app purchases (IAP) are non-refundable,
          although exceptions may occur in certain circumstances. For refund requests related to Apple ID subscriptions,
          they should be processed through Apple. For Google Play subscriptions, contact Google Play customer support
          for assistance.
        </p>
      </div>
      <div class="phrase">
        <p class="title">11.Subscription</p>
        <p class="desc">
          If you choose to purchase a Host Card subscription on a monthly basis, it is important to note that the
          payment for this subscription will be handled by iTunes. Specifically, the payment will be processed through
          the iTunes platform. Additionally, if you wish to disable the auto-renewal feature of this subscription, you
          can do so by accessing the settings within iTunes. Once a purchased subscription has been activated, under no
          circumstances is cancellation of that subscription allowed. This means that once you have initiated and
          activated the subscription, you cannot request to cancel it and obtain a refund or discontinuation of the
          service.
        </p>
      </div>
      <div class="phrase">
        <p class="title">12.Mobile Phones and Data Charges</p>
        <p class="desc">
          Users are held accountable for any mobile charges that may be incurred while they are utilizing the services
          provided. In case users are uncertain about the potential mobile charges that might be incurred during the
          usage of these services, it is advisable for them to check with their respective service providers. This way,
          they can gain a clear understanding of any potential costs associated with using the services on their mobile
          devices and make informed decisions regarding their usage.
        </p>
      </div>
      <div class="phrase">
        <p class="title">13.Third-Party Services</p>
        <p class="desc">
          If a user chooses to utilize third-party services through Telo, it is important to note that the terms and
          conditions of those third-party services will govern the relationship between the user and the third-party
          service provider. Telo has no control over and is not responsible for the terms and conditions set by
          third-party service providers. Additionally, Telo cannot be held accountable for any actions taken by
          third-party service providers. Telo merely acts as a platform through which users may access these third-party
          services, but it does not have any influence over the terms or actions of these third-party entities.
        </p>
      </div>
      <div class="phrase">
        <p class="title">14.Modification of the Services and Termination</p>
        <p class="desc">
          Telo reserves the right to modify or terminate its services at any given time without prior notice. This means
          that Telo can make changes to the services it offers or completely discontinue them without providing any
          advance warning to the users. Moreover, Telo also has the authority to terminate the terms and conditions
          governing its relationship with the user at any time. However, even in the event of such terminations, certain
          sections, namely Sections 3, 6, 10, and Sections 13 through 21, will still remain applicable and continue to
          govern the interactions and obligations to the extent permitted by law.
        </p>
      </div>
      <div class="phrase">
        <p class="title">15.Indemnity</p>
        <p class="desc">
          The user explicitly agrees to indemnify and hold harmless Telo and its affiliates from and against any and all
          claims, losses, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) that may
          arise in connection with the user's access to Telo's services, the content provided by the user, or any breach
          of the terms and conditions by the user. This indemnification obligation is intended to protect Telo and its
          affiliates from any legal consequences that may result from the user's actions or omissions while using the
          services.
        </p>
      </div>
      <div class="phrase">
        <p class="title">16.Disclaimers</p>
        <p class="desc">
          The services provided by Telo are offered on an "as is" basis without any warranties, express or implied. Telo
          makes no representations or warranties regarding the quality, reliability, availability, or functionality of
          the services. Telo does not guarantee that the services will be free from errors, defects, or interruptions.
          Additionally, Telo is not responsible for any content that appears on or is accessible through the services.
          The user acknowledges that there is a possibility of being exposed to content that may be inappropriate,
          offensive, or otherwise objectionable. Telo does not have control over the content generated by third parties
          or users and cannot be held liable for any such content. The user assumes all risks associated with using the
          services and accessing the content thereon.
        </p>
      </div>
      <div class="phrase">
        <p class="title">17.Limitation of Liability</p>
        <p class="desc">
          To the utmost degree allowed by applicable law, Telo and its connected entities shall not be accountable for
          specific kinds of damages. Telo and its related parties offer no guarantees or statements concerning their
          liability for any damages that might transpire. It is important to note that some exclusions of liability may
          not be applicable in certain jurisdictions because of specific legal demands or restrictions. In such
          instances, the degree of liability of Telo and its affiliated entities will be established in accordance with
          the laws and regulations of the relevant jurisdiction.
        </p>
      </div>
      <div class="phrase">
        <p class="title">18.Arbitration, Class Waiver, and Jury Waiver</p>
        <p class="desc">
          For the majority of disputes, arbitration is mandatory except in the case of certain intellectual property
          claims. The rules governing arbitration are determined by US Arbitration Law. Arbitration may be conducted
          through the US International Economic Trade Arbitration Commission (USIETAC) or an alternative forum as deemed
          appropriate. In the case of non-appearance arbitration, it can be carried out via phone, online, or through
          written submissions. The arbitrator holds the authority to determine jurisdiction over the dispute and has the
          power to grant appropriate remedies. Class actions or consolidated actions are waived, meaning that such forms
          of legal action are not permitted. The arbitration proceedings are confidential in nature, ensuring that the
          details of the dispute and its resolution remain private. Rights under the arbitration agreement can be waived
          by the parties involved. Opting out of the arbitration agreement is possible within a period of 30 days. Small
          claims court is also an available option for resolving disputes. Additionally, the arbitration agreement
          remains in effect even after the termination of the relationship or agreement between the parties.
        </p>
      </div>
      <div class="phrase">
        <p class="title">19.Choice of Law</p>
        <p class="desc">
          These Terms and any disputes arising from or in connection with them are primarily governed by the laws of the
          United States. This governance is carried out excluding the application of conflict-of-laws principles. In
          other words, the legal framework that applies is that of the United States, and this is the case except when
          there are specific provisions of US laws that override or take precedence over the general application of
          these laws.
        </p>
      </div>
      <div class="phrase">
        <p class="title">20.Severability</p>
        <p class="desc">
          In the event that a particular clause within these Terms is found to be unenforceable for any reason, such as
          being in violation of applicable laws or being deemed overly broad or otherwise unworkable, that clause will
          be removed from the Terms. However, this removal will be done in such a way that it does not have any adverse
          impact on the validity and enforceability of the remaining clauses. The remaining clauses will continue to be
          in full force and effect and will be interpreted and applied as if the unenforceable clause had never been a
          part of these Terms. This approach ensures that the overall intent and purpose of these Terms can still be
          achieved to the greatest extent possible despite the removal of the unenforceable clause.
        </p>
      </div>
      <div class="phrase">
        <p class="title">21.Additional Terms for Specific Services</p>
        <p class="desc">
          For certain specific services provided under these Terms, additional terms and conditions may apply. These
          additional terms are designed to address the unique characteristics and requirements of those particular
          services. If a user engages in or makes use of the relevant specific services, these additional terms
          automatically become an integral part of the overall agreement. This means that by availing themselves of the
          specific services, users are deemed to have accepted and agreed to abide by not only the general terms but
          also these additional terms specific to the particular services in question. The combination of the general
          terms and the applicable additional terms for the specific services forms a comprehensive contractual
          framework governing the user's interaction and use of those services.
        </p>
      </div>
      <div class="phrase">
        <p class="title">22.Final Terms</p>
        <p class="desc">
          These Terms represent the complete and entire agreement between the user and Telo. They supersede and replace
          any and all previous agreements, understandings, or arrangements that may have existed between the parties.
          These Terms are strictly between the user and Telo and do not create any third-party beneficiaries. In other
          words, no third party can claim any rights or benefits under these Terms. If Telo fails to enforce a
          particular provision at a given time, this does not constitute a waiver of its right to enforce that provision
          at a later time. Telo reserves all rights that are not explicitly granted to the user under these Terms. Users
          are not permitted to transfer any of their rights or obligations under these Terms to any other party without
          the express written consent of Telo. In the event of a conflict between the English version of these Terms and
          a translated version into another language, the English version shall prevail. This is to ensure clarity and
          consistency in the interpretation and application of the Terms.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import './index.scss';
const drawer = ref(false);
const showDrawer = () => {
  drawer.value = true;
};
const jump = (url: string) => {
  window.location.href = url;
};
</script>
