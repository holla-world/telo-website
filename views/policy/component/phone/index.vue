<template>
  <div class="phone-main">
    <div class="header">
      <img class="icon_left" @click="jump('/')" src="../../../assets/bg_phone_title.webp" alt="" />
      <img class="icon_right" v-show="!isShowModal" @click="showModal()" src="../../../assets/icon_phone.webp" alt="" />
      <img
        class="icon_right"
        v-show="isShowModal"
        @click="closeModal()"
        src="../../../assets/phone_icon_close.webp"
        alt=""
      />
    </div>
    <div class="content">
      <div class="content_title">Private Policy</div>
      <div class="phrase">
        <p class="title">1.What Information Do We Gather?</p>
        <p class="desc">
          We accumulate information when you establish an account and utilize the Platform. We also gather information
          that you share with us from third-party social network providers, as well as technical and behavioral details
          about your usage of the Platform. Additionally, we collect information contained in the messages you transmit
          through our Platform and information from your phone directory if you grant us access to it on your mobile
          device. More details about the categories and sources of information are provided below. Information You Opt
          to Provide For certain activities, such as when you register or upload content to the Platform, you may
          furnish some or all of the following information: 
          <p class="desc">• Registration details, like age, username and password,
            language, email or phone number, and social media account.</p>
            <p class="desc">• Profile data, including name, social media
          account information (such as your nickname as it appears on your social media profile, your user ID, and your
          profile picture), and profile image. </p>
          <p class="desc"></p>
          <p class="desc">• User-generated content, comprising comments, photographs, videos, and
          virtual item videos that you decide to upload or broadcast on the Platform (“User Content”). </p>
          
          <p class="desc">• Payment
          details, such as PayPal or other third-party payment information (where required for payment purposes, we will
          not retain and collect your credit card name, number or security code). </p>
          <p class="desc">• Transaction data, such as
          transaction records and history, date, items, amounts.
        </p>
        <p class="desc">• Your phone and social network contacts, with your
          permission. If you choose to find other users through your phone contacts, we will access and collect the
          names and phone numbers and match that information against existing users of the Platform. If you choose to
          find other users through your social network contacts, we will gather your public profile information as well
          as the names and profiles of your social contacts. 
          
        </p>
        <p class="desc">• Your opt-in selections and communication preferences. </p>
        <p class="desc">•
          Information to authenticate an account. 
        </p>
        <p class="desc">
        • Information in correspondence you send to us. 
      </p>
      <p class="desc">
      • Information you
          share through surveys or your participation in challenges, sweepstakes, or contests, such as your gender, age,
          likeness, and preferences. For safety and security and to ensure you have the most optimal user experience, we
          require users to authenticate their accounts (because we want to make sure you are not a bot!) and might ask
          for your phone number or Facebook Account. Don’t be concerned! This is only to confirm that you are real and
          alive! We won't use your phone number for marketing purposes. Information We Gather When You Utilize Once you
          have created a Profile and used Telo, you may choose to edit your gender, birthday and other information.
          However, please note that these are not mandatory and you have a choice. We may collect information related to
          when and how you used our Services. The collected information includes your IP address, device information
          (model, system, MCC), time zone. And we also collect information about mobile operators, network information
          (5G\4G\3G\WIFI). That information helps us determine your physical location so that it can be displayed and
          shared with other users who choose to view "nearby" users and moments. We may, from time to time, permit our
          employees to use the product for testing and user engagement purposes. When you use our Service, your
          position, microphone and phone camera shall be utilized upon your explicit authorization, and certain log file
          information shall be uploaded by you. All such information enables more accurate reporting and improvement of
          the Service.
        </p>
        </p>
      </div>
      <div class="phrase">
        <p class="title">2.How We Utilize Your Information</p>
        <p class="desc">
          We will employ your information to fulfill and enforce our Terms and Conditions of Use, and to enhance our
          Platform and tailor your advertising experience. We may use the information we receive from you to:
        </p>
        <p class="desc">(1) Enable you to access your information smoothly after logging in.</p>
        <p class="desc">
          (2) Keep in memory information so you don't have to enter it anew during your current visit or on your
          subsequent visit to the Service.
        </p>
        <p class="desc">
          (3) Offer personalized content and information to you and others, which may consist of tailor-made content,
          online commercials or other marketing means.
        </p>
        <p class="desc">(4) Supply, ameliorate, examine and oversee the effectiveness of our Service.</p>
        <p class="desc">(5) Invent and trial new products and traits.</p>
        <p class="desc">
          (6) Monitor indicators such as the total number of visitors, traffic flow, and demographic configurations.
        </p>
        <p class="desc">
          (7) Detect and resolve technical glitches, fulfill requests for products, services, Platform capabilities,
          support and information for internal operations, including troubleshooting, data assessment, testing,
          research, statistical analysis, and survey aims and solicit your response.
        </p>
        <p class="desc">
          (8) Automatically update the Telo application on your device. Telo or other users may organize competitions,
          special deals or other events or activities ("Events") on the Service. If you don't desire to participate in
          an Event, don't use the particular metadata (for instance, hashtag or geotag) associated with that Event.
        </p>
        <p class="desc">(9) Aid us in spotting improper use, deception and illegal actions on the Platform.</p>
        <p class="desc">(10) Ensure that you are of an adequate age to utilize the Platform (as mandated by law).</p>
        <p class="desc">
          (11) Could make use of the material you post in the open access areas of Telo in advertising and promotional
          materials on our partner sites and partner products.
        </p>
        <p class="desc">
          (12) Integrate all the information we collect or receive about you for any of the previously mentioned
          purposes.
        </p>
        <p class="desc">
          (13) For any other purposes revealed to you at the time we gather your information or in accordance with your
          assent.
        </p>
      </div>
      <div class="phrase">
        <p class="title">3.How We Communicate Your Information.</p>
        <p class="desc">
          We are committed to maintaining your trust and ensuring the safety of your personal information. We will not
          provide, disclose or transfer your personal information to any third parties without your consent or unless it
          is permitted by applicable laws. Service Providers and Business Partners: When you use the services of our
          business partners or those provided by service providers, we may share the categories of personal information
          mentioned above with service providers and business partners to help us conduct business operations and
          achieve business goals, including research, payment processing and transaction fulfillment, database
          maintenance, managing contests and special offers, technology services, deliveries, email distribution,
          advertising, analysis, measurement, data storage and hosting, disaster recovery, search engine optimization,
          marketing, and data processing. In particular, for targeted advertising, we engage third-party advertising
          companies to show ads when you use our app. These companies may use information about your visits to this and
          other websites to provide advertisements for goods and services that may interest you. Within Our Corporate
          Group: We may share your information with a parent company, subsidiary, or other affiliated entity of our
          corporate group for improved service. We will take measures to ensure that our group companies with which
          personal information is shared comply with this policy. Succession of Business: If there is any business
          transaction between companies related to our business to which this policy applies, such as acquisition,
          merger or change of business entity, personal information may be transferred to the business successor to the
          extent permitted by applicable laws. For Legal Reasons: Telo also aims to maintain a healthy community and
          will cooperate with all third parties to enforce their intellectual property or other rights. We might
          disclose your information in response to subpoenas, court directives, legal procedures, requests from law
          enforcement agencies, legal claims, or government inquiries. This is done to safeguard and defend the rights,
          interests, safety, and security of Telo, the Platform, our affiliated entities, users, or the public.
          Additionally, we may share your information to enforce the terms applicable to the Platform, exercise or
          defend any legal claims, and comply with any applicable law as we see fit. We will also collaborate with law
          enforcement inquiries both within and outside your country of residence. When we have a bona fide belief that
          disclosure is mandated by law or when we, at our discretion, consider that disclosure is necessary to protect
          our legal rights or those of third parties and/or to comply with a judicial proceeding, court order, or legal
          process served on us. In such instances, we may either raise or waive any legal objection or right at our
          disposal. With Your Approval We may share information for other purposes based on your consent or with your
          additional instructions. If you access third-party services like Apple, Facebook, Google, or Twitter to log in
          to the Platform or share information about your usage on the Platform with others, these third-party services
          may be able to gather information about you, including details about your activity on the Platform. They may
          also inform your connections on the third-party services about your use of the Platform in accordance with
          their privacy policies. We may share aggregated information with parties such as Facebook that contains your
          personal information (but does not directly identify you), along with other information including log data
          with third parties for industry analysis, demographic profiling, and to provide targeted advertising about
          other products and services. To ensure that you get to meet as many people as possible on Telo, other users
          will have the opportunity to check the information you post on your Profile, including photos if you select
          the 'Public' access setting. If you choose to engage in public activities on the Platform, you should be
          careful when disclosing personal information. We are not responsible for the information you choose to submit.
          Any information you choose to provide should reflect how much you want other Telo users to know about you. And
          you should be aware that any information you share may be read, collected, or used by other users. However,
          you can also choose to limit the visibility scope of your information on the "Settings" page.
        </p>
      </div>
      <div class="phrase">
        <p class="title">4.Your Rights</p>
        <p class="desc">
          As permitted by applicable laws, with regard to your personal information that we process, you have the right
          to access it, the right to make corrections, the right to have it erased, the right to restrict processing,
          the right to withdraw your consent, the right to data portability, the right to confirm if we are processing
          any of your personal information, and the right to request a review of any automated decisions resulting from
          the processing. Moreover, we will not discriminate against you for exercising any of these rights. However,
          please note that if you provide your gender information, you only have one opportunity to change it. After
          verifying your identity, we will respond to your request within a reasonable time period and in accordance
          with relevant laws. However, if permitted by applicable laws, we may not be able to respond to your request in
          the following circumstances: <p class="desc">• It is likely to harm the life, body, property, or other rights or interests of
          you or another individual/user. </p><p class="desc">• It is likely to seriously hinder the proper execution of our business. </p><p class="desc">• It
          is likely to violate other laws and regulations. </p><p class="desc">• When you fail to verify your identity. </p><p class="desc">• We are otherwise
          permitted by applicable laws to refuse your request. However, withdrawing your consent will in no way affect
          the lawfulness of our processing of your personal data based on your consent given before the withdrawal.
        </p>
      </p>
      </div>
      <div class="phrase">
        <p class="title">5.Data Storage</p>
        <p class="desc">
          We might keep your personal data outside the country or area where you live. When this takes place, we will
          adopt measures to guarantee that your personal information is handled and stored in line with applicable laws.
        </p>
      </div>
      <div class="phrase">
        <p class="title">6.Security</p>
        <p class="desc">
          How does Telo ensure the safety of my personal information? Telo has adopted reasonable and proper security
          measures to safeguard and prevent the loss, misappropriation, and alteration of the information under our
          jurisdiction, including your personal information. Telo utilizes reasonable security means to maintain the
          confidentiality of your personal information, such as secure servers equipped with firewalls. The technical
          experts at Telo strive hard to guarantee your secure utilization of our site. Although we take reasonable
          preventive measures against possible security breaches of our website, member database, and records, no
          website or Internet transmission is entirely secure, and we cannot guarantee that unauthorized access,
          hacking, data loss, or other violations will never occur. We urge you to take steps to keep your personal
          information secure (including your password) and log out of your account after usage. We cannot guarantee the
          security of your personal data during its transmission to our site, and any transmission is at your own risk.
          Once we receive your information, we have procedures and security features in place to try to prevent
          unauthorized access. How can you help maintain the security of your information? You must not reveal your
          password to any third parties or share it with them. If you lose your password or give it away, your personal
          information may be endangered. In such a case, please report it to Support through Feedback. You must change
          your password immediately through your “Settings” page. Telo cannot be held accountable for your failure to
          keep your password secure, and failure to do so may violate our Terms and Conditions of Use.
        </p>
      </div>
      <div class="phrase">
        <p class="title">7.Cookies and other technologies</p>
        <p class="desc">
          The Platform is not targeted at children under 18 years old. If we find out that personal information of a
          person under 18 has been collected on the Platform, we will remove this information and close the person’s
          account.
        </p>
      </div>
      <div class="phrase">
        <p class="title">8.Disclaimer</p>
        <p class="desc">
          Cookies and other techniques For the application to operate efficiently, we occasionally place small data
          records named cookies on your device. Most application creators do this. A cookie is a small text record that
          a website stores when you visit it. It allows the website to recall your actions and preferences, aiming to
          improve the user experience. You can determine whether to accept cookies through settings or by utilizing
          other tools. However, if you deactivate cookies or limit the ability to set cookies, you may not be able to
          enjoy the complete advantages of our services or access all of its functions, which may restrict your overall
          user experience. Other techniques We may install modules of other companies in Telo to analyze how the service
          and product are utilized or provided. Regarding your personal information processed by a third party through a
          module provided by that third party, the privacy policy of that third party will be applicable and we also
          encourage you to review it.
        </p>
      </div>
      <div class="phrase">
        <p class="title">9. Minors</p>
        <p class="desc">
          You declare and guarantee that you possess the appropriate capacity and legal competence necessary for using
          Telo. The platform is not targeted at minors. If we discover that personal information has been gathered on
          the platform from a person who is a minor, we will erase this information and terminate the person's account.
        </p>
      </div>
      <div class="phrase">
        <p class="title">10. Disclaimer</p>
        <p class="desc">
          You can make use of our instant messaging feature, which allows you to communicate with other Telo users.
          Nevertheless, we suggest and encourage you (and all our users) to think thoroughly about the disclosed
          information of other users. We also don't recommend that you include email addresses, URLs, instant messaging
          specifics, phone numbers, full names, addresses, credit card details, national identity numbers, drivers'
          license details, and other sensitive information in your profile as it is likely to be misused and
          misappropriated. Moreover, be careful when putting sensitive details about yourself on your profile, such as
          your religious belief and health information. Although you may voluntarily provide this information to us when
          setting up your profile, including your sexual preference and ethnic background, there is no obligation to do
          so. Remember that any photographs or video clips you post on Telo may expose these kinds of sensitive personal
          data. When you upload and post this sensitive information about yourself, you are explicitly consenting to our
          processing of your information. And you will be doing this at your own peril. If you post anything that
          doesn't comply with our Terms and Conditions of Use, we reserve the right to deactivate your account.
        </p>
      </div>
    </div>
    <div class="modal" v-if="isShowModal" @click="closeModal()">
      <div class="modal_content">
        <p @click.prevent="jump('/service')">Terms of Service</p>
        <p @click.prevent="jump('/policy')">Privacy Policy</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import './index.scss';
const isShowModal = ref(false);
const showModal = () => {
  isShowModal.value = true;
};
const closeModal = () => {
  isShowModal.value = false;
};
const jump = (url: string) => {
  window.location.href = url;
};
</script>
