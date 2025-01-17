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
      <h1>Telo Privacy Policy</h1>

      <h2>1. What Information Do We Gather?</h2>
      <p>
        We accumulate information when you establish an account and utilize the Platform. Additionally, we collect
        information contained in the messages you transmit through our Platform and information from your phone
        directory if you grant us access to it on your mobile device. More details about the categories and sources of
        information are provided below.
      </p>

      <h3>Information You Opt to Provide</h3>
      <p>
        For certain activities, such as when you register or upload content to the Platform, you may furnish some or all
        of the following information:
      </p>
      <ol>
        <li>
          Registration details, like age, username and password, language, email or phone number, and social media
          account.
        </li>
        <li>
          Profile data, including name, social media account information (such as your nickname as it appears on your
          social media profile, your user ID, and your profile picture), and profile image.
        </li>
        <li>
          User-generated content, comprising comments, photographs, videos, and virtual item videos that you decide to
          upload or broadcast on the Platform (“User Content”).
        </li>
        <li>Your opt-in selections and communication preferences.</li>
        <li>Information to authenticate an account.</li>
        <li>Information in correspondence you send to us.</li>
        <li>
          Information you share through surveys or your participation in challenges, or contests, such as your gender,
          age, likeness, and preferences.
        </li>
      </ol>

      <h3>Information We Gather When You Utilize</h3>
      <p>
        Once you have created a Profile and used Telo, you may choose to edit your gender, birthday and other
        information. However, please note that these are not mandatory and you have a choice. We may collect information
        related to when and how you used our Services. The collected information includes your IP address, device
        information (model, system, MCC), time zone. And we also collect information about mobile operators, network
        information (5G\4G\3G\WIFI). That information helps us determine your physical location so that it can be
        displayed and shared with other users who choose to view "nearby" users and moments. We may, from time to time,
        permit our employees to use the product for testing and user engagement purposes.
      </p>

      <p>
        When you use our Service, your position, microphone and phone camera shall be utilized upon your explicit
        authorization, and certain log file information shall be uploaded by you. All such information enables more
        accurate reporting and improvement of the Service.
      </p>

      <h2>2. How We Utilize Your Information</h2>
      <p>
        We will employ your information to fulfill and enforce our Terms and Conditions of Use. We may use the
        information we receive from you to:
      </p>
      <ol>
        <li>
          Keep memorizing information so you don't have to enter it anew during your current visit or on your subsequent
          visit to the Service.
        </li>
        <li>Supply, ameliorate, examine and oversee the effectiveness of our Service.</li>
        <li>Invent and trial new products and traits.</li>
        <li>Monitor indicators such as the total number of visitors, traffic flow, and demographic configurations.</li>
        <li>
          Detect and resolve technical glitches, fulfill requests for products, services, Platform capabilities, support
          and information for internal operations, including troubleshooting, data assessment, testing, research,
          statistical analysis, and survey aims and solicit your response.
        </li>
        <li>Aid us in spotting improper use, deception and illegal actions on the Platform.</li>
        <li>Ensure that you are of an adequate age to utilize the Platform (as mandated by law).</li>
        <li>
          Integrate all the information we collect or receive about you for any of the previously mentioned purposes.
        </li>
        <li>
          For any other purposes revealed to you at the time we gather your information or in accordance with your
          assent.
        </li>
      </ol>

      <h2>3. How We Communicate Your Information</h2>
      <p>
        We are committed to maintaining your trust and ensuring the safety of your personal information. We will not
        provide, disclose or transfer your personal information to any third parties without your consent or unless it
        is permitted by applicable laws.
      </p>

      <h3>Succession of Business</h3>
      <p>
        If there is any business transaction between companies related to our business to which this policy applies,
        such as acquisition, merger or change of business entity, personal information may be transferred to the
        business successor to the extent permitted by applicable laws.
      </p>

      <h3>For Legal Reasons</h3>
      <p>
        Telo also aims to maintain a healthy community and will cooperate with all third parties to enforce their
        intellectual property or other rights. We might disclose your information in response to subpoenas, court
        directives, legal procedures, requests from law enforcement agencies, legal claims, or government inquiries.
        This is done to safeguard and defend the rights, interests, safety, and security of Telo, the Platform, our
        affiliated entities, users, or the public.
      </p>

      <p>
        We will also collaborate with law enforcement inquiries both within and outside your country of residence. When
        we have a bona fide belief that disclosure is mandated by law or when we, at our discretion, consider that
        disclosure is necessary to protect our legal rights or those of third parties and/or to comply with a judicial
        proceeding, court order, or legal process served on us. In such instances, we may either raise or waive any
        legal objection or right at our disposal.
      </p>

      <p>
        To ensure that you get to meet as many people as possible on Telo, other users will have the opportunity to
        check the information you post on your Profile, including photos if you select the 'Public' access setting. If
        you choose to engage in public activities on the Platform, you should be careful when disclosing personal
        information. We are not responsible for the information you choose to submit. Any information you choose to
        provide should reflect how much you want other Telo users to know about you. And you should be aware that any
        information you share may be read, collected, or used by other users. However, you can also choose to limit the
        visibility scope of your information on the "Settings" page.
      </p>

      <h2>4. Your Rights</h2>
      <p>
        As permitted by applicable laws, with regard to your personal information that we process, you have the right to
        access it, the right to make corrections, the right to have it erased, the right to restrict processing, the
        right to withdraw your consent, the right to data portability, the right to confirm if we are processing any of
        your personal information, and the right to request a review of any automated decisions resulting from the
        processing. Moreover, we will not discriminate against you for exercising any of these rights.
      </p>

      <p>
        However, please note that if you provide your gender information, you only have one opportunity to change it.
      </p>

      <p>
        After verifying your identity, we will respond to your request within a reasonable time period and in accordance
        with relevant laws. However, if permitted by applicable laws, we may not be able to respond to your request in
        the following circumstances:
      </p>
      <ul>
        <li>
          It is likely to harm the life, body, property, or other rights or interests of you or another individual/user.
        </li>
        <li>It is likely to seriously hinder the proper execution of our business.</li>
        <li>It is likely to violate other laws and regulations.</li>
        <li>When you fail to verify your identity.</li>
        <li>We are otherwise permitted by applicable laws to refuse your request.</li>
      </ul>

      <p>
        However, withdrawing your consent will in no way affect the lawfulness of our processing of your personal data
        based on your consent given before the withdrawal.
      </p>

      <h2>5. Data Storage</h2>
      <p>
        We might keep your personal data outside the country or area where you live. When this takes place, we will
        adopt measures to guarantee that your personal information is handled and stored in line with applicable laws.
      </p>

      <h2>6. Security</h2>
      <h3>How does Telo ensure the safety of my personal information?</h3>
      <p>
        Telo has adopted reasonable and proper security measures to safeguard and prevent the loss, misappropriation,
        and alteration of the information under our jurisdiction, including your personal information. Telo utilizes
        reasonable security means to maintain the confidentiality of your personal information, such as secure servers
        equipped with firewalls. The technical experts at Telo strive hard to guarantee your secure utilization of our
        site.
      </p>

      <p>
        Although we take reasonable preventive measures against possible security breaches of our website, member
        database, and records, no website or Internet transmission is entirely secure, and we cannot guarantee that
        unauthorized access, hacking, data loss, or other violations will never occur. We urge you to take steps to keep
        your personal information secure (including your password) and log out of your account after usage.
      </p>

      <p>
        We cannot guarantee the security of your personal data during its transmission to our site, and any transmission
        is at your own risk. Once we receive your information, we have procedures and security features in place to try
        to prevent unauthorized access.
      </p>

      <h3>How can you help maintain the security of your information?</h3>
      <p>
        You must not reveal your password to any third parties or share it with them. If you lose your password or give
        it away, your personal information may be endangered. In such a case, please report it to Support through
        Feedback. You must change your password immediately through your “Settings” page. Telo cannot be held
        accountable for your failure to keep your password secure, and failure to do so may violate our Terms and
        Conditions of Use.
      </p>

      <h2>7. Minors</h2>
      <p>
        You declare and guarantee that you possess the appropriate capacity and legal competence necessary for using
        Telo. The platform is not targeted at minors. If we discover that personal information has been gathered on the
        platform from a person who is a minor, we will erase this information and terminate the person's account.
      </p>

      <h2>8. Disclaimer</h2>
      <p>
        Be careful when putting sensitive details about yourself on your profile, such as your religious belief and
        health information. Although you may voluntarily provide this information to us when setting up your profile,
        including your sexual preference and ethnic background, there is no obligation to do so. Remember that any
        photographs or video clips you post on Telo may expose these kinds of sensitive personal data.
      </p>

      <p>
        When you upload and post this sensitive information about yourself, you are explicitly consenting to our
        processing of your information. And you will be doing this at your own peril. If you post anything that doesn't
        comply with our Terms and Conditions of Use, we reserve the right to deactivate your account.
      </p>
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
