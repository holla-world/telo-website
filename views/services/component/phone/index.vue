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
      <p class="content_title">Telo Terms and Conditions</p>

      <p class="title">1. Share Your Content and Information</p>
      <p>
        You can post various contents on Telo. You own the content and information you post. You can control the sharing
        method through settings. When using Telo, do not post or send the following contents:
      </p>
      <ol>
        <li>Contents containing vulgar, offensive language or harassing others.</li>
        <li>Obscene, pornographic or dignity-violating contents.</li>
        <li>Derogatory, insulting, threatening contents or contents promoting discrimination.</li>
        <li>Contents encouraging illegal activities.</li>
        <li>Defamatory contents.</li>
        <li>Contents related to commercial activities.</li>
        <li>Contents containing spam or junk information.</li>
        <li>Contents containing malicious code.</li>
        <li>Contents violating third-party rights.</li>
        <li>Contents depicting drugs.</li>
        <li>Contents showing political matters.</li>
        <li>Contents showing others without consent.</li>
        <li>Other negative or inappropriate content.</li>
        <li>Contents containing information about minors.</li>
      </ol>
      <p>
        We value your feedback and suggestions, but we are not obligated to provide compensation. Use common sense when
        posting content, as you are responsible for the content you post.
      </p>

      <p class="title">2. Protecting Others' Rights</p>
      <p>
        We attach great importance to the rights of others and make every effort to ensure the security and stability of
        Telo. We expect you to act in the same way.
      </p>
      <ol>
        <li>You must not post any content or take actions on Telo that violate others' rights or violate the law.</li>
        <li>
          If we think that the content or information you post on Telo violates these terms or our policies, we have the
          right to remove it.
        </li>
        <li>
          If we delete your content because you violate others' copyright and you think we are wrong, we will give you
          an opportunity to appeal.
        </li>
        <li>
          If you repeatedly violate others' intellectual property rights, we will shut down your account at an
          appropriate time.
        </li>
        <li>
          Unless you obtain our prior written consent, you cannot use our copyrights, trademarks or any similar marks
          that are easily confused.
        </li>
        <li>
          If you collect information from users, you must obtain their consent, clearly indicate that it is you (not
          Telo) who is collecting their information, and publish a privacy policy explaining what information you
          collect and how you will use it.
        </li>
        <li>You cannot post anyone's identity documents or sensitive financial information on Telo.</li>
        <li>You cannot tag users or send email invitations to non-users without their consent.</li>
      </ol>

      <p class="title">3. Account</p>
      <p>
        Telo users need a nickname, age, gender, avatar, and other optional information. We need your help to maintain
        this. Here are some commitments you make to us regarding registering and maintaining the security of your
        account:
      </p>
      <ol>
        <li>If you are a minor, you cannot use Telo.</li>
        <li>You must not transfer your account to anyone without first obtaining our written permission.</li>
        <li>
          You must not provide false personal information on Telo or create an account for anyone other than yourself
          without permission.
        </li>
        <li>
          If we disable your account, you can only post content to contact the official assistant called "Telo Team".
        </li>
        <li>We reserve the right to delete or ban your account if we deem it appropriate.</li>
      </ol>

      <p class="title">4. Termination</p>
      <p>
        In case you violate these terms or otherwise pose risks or potential legal liabilities to us, we hold the right
        to take the following actions at our sole discretion at any time without incurring any liability or being
        obliged to provide prior notice or refund any unused services:
      </p>
      <ul>
        <li>
          Suspend or revoke your registration (if applicable) as well as your right to access and/or use Telo or submit
          any content to it.
        </li>
        <li>
          Employ any operational, technological, legal, or other available means to enforce these terms (including but
          not limited to blocking specific IP addresses).
        </li>
      </ul>
      <p>
        If your access right to Telo and/or your profile is to be or has been suspended or terminated, we will make an
        attempt (though not obligated) to notify you. You can terminate your registration at any time by logging into
        Telo and going to the “Settings” control and then choosing the “Delete Account” link. We will preserve your
        profile information in case you decide to restore your account later.
      </p>
      <p>
        Once your registration is terminated, we have the right to delete any relevant content you have submitted or
        uploaded to Telo.
      </p>

      <p class="title">5. Provisions on the property rights of content on Telo</p>
      <ol>
        <li>
          Telo will not claim any ownership rights or interests in texts, files, images, photos, videos, sounds, musical
          works, literary works, applications or any other materials (collectively referred to as "content") that you
          post on Telo services or through Telo services.
        </li>
        <li>
          You declare and guarantee: (i) you own the content you post on Telo services or through Telo services, or you
          have the right to grant the license specified in this section.
        </li>
        <li>
          Telo services contain content belonging to Telo ("Telo content"). Telo content is protected by copyrights,
          trademarks, patents, trade secrets and other laws.
        </li>
        <li>
          Telo services contain content from users and other Telo licensees. Except as provided in this agreement, you
          may not copy, modify, translate, publish, broadcast, transmit, distribute, perform, display or sell any
          content that appears on Telo services or through Telo services.
        </li>
        <li>
          Telo performs the technical functions required to provide Telo services, including but not limited to
          transcoding and/or reformatting content to make it usable throughout Telo services.
        </li>
      </ol>

      <p class="title">6. Disclaimer of Warranties and Limitation of Liability</p>
      <p>
        To the fullest extent permitted by law, Telo expressly disclaims all conditions, representations, warranties and
        other terms that might otherwise be implied by statute, common law or the law of equity.
      </p>

      <p class="title">7. Indemnification liability</p>
      <p>
        You agree to provide protection, compensation and hold Telo, its parent company, management personnel,
        directors, employees and agents blameless.
      </p>

      <p class="title">8. Modifications</p>
      <p>
        We have the right to make changes to these terms and provide you with the opportunity to review the revised
        terms and offer your comments before continuing to use our services.
      </p>
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
