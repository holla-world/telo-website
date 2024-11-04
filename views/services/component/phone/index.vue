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
      <p class="content_title">Terms of Service</p>
      <div class="phrase">
        <p class="title">1.Sharing Your Content and Information</p>
        <p class="desc">You can post various things ("Content") on Telo. You hold ownership of all the content and information you post on Telo, and you can control how it is shared through your "Privacy" and "Application Settings". However, there are certain rules regarding what is acceptable. When using Telo, you should not post or send any Content that:</p>
        <p class="desc">(1). contains vulgar language or expressions that could be considered offensive or are likely to harass, distress, embarrass, alarm, or annoy any other person;</p>
        <p class="desc">(2). is lewd, pornographic, or otherwise may violate human dignity;</p>
        <p class="desc">(3). is derogatory, insulting, or threatening, or promotes or encourages racism, sexism, hatred, or bigotry;</p>
        <p class="desc">(4). encourages any illegal activity including, without limitation, terrorism, inciting racial hatred, malicious content, or the submission of which in itself constitutes a criminal offense;</p>
        <p class="desc">(5). is slanderous;</p>
        <p class="desc">(6). pertains to commercial activities (including, without limitation, sales, competitions, advertising, links to other websites or premium line telephone numbers);</p>
        <p class="desc">(7). involves the transmission of "junk" mail or "spam";</p>
        <p class="desc">(8). contains any spyware, viruses, corrupt files, worm programs, or other malicious code designed to disrupt, damage, or limit the functionality of or interfere with any software, hardware, telecommunications, networks, servers, or other equipment, a Trojan horse, or any other material designed to damage, interfere with, wrongly intercept, or expropriate any data or personal information whether from Telo or otherwise;</p>
        <p class="desc">(9). itself, or the posting of which, violates any third party's rights (including, without limitation, intellectual property rights and privacy rights);</p>
        <p class="desc">(10). depicts drugs or drug use;</p>
        <p class="desc">(11). shows political content;</p>
        <p class="desc">(12). shows another person who was created or distributed without that person's consent;</p>
        <p class="desc">(13). other contents that, in the judgment of Telo, are negative or otherwise not suitable for dissemination; </p>
        <p class="desc">(14). contains information, comments, or any other forms of content about a person under 18 years old.</p>
        <p class="desc">(15). We always value your feedback or other suggestions regarding Telo, but you understand that we may use your feedback or suggestions without any obligation to compensate you for them (just as you have no obligation to provide them).</p>
        <p class="desc">Please exercise common sense when selecting the Content you choose to post on or send via Telo because you are solely responsible for and bear all liability in relation to such Content.</p>
      </div>
      <div class="phrase">
        <p class="title">2. Safeguarding Others' Rights</p>
        <p class="desc">We respect the rights of others and make every effort to keep Telo secure. We expect you to do the same.</p>
        <p class="desc">(1). You must not post content or take any actions on Telo that violate someone else's rights or break the law.</p>
        <p class="desc">(2). If we believe that the content or information you post on Telo violates these Terms or our policies, we can remove it.</p>
        <p class="desc">(3). If we remove your content for infringing someone else's copyright and you think we made a mistake, we will give you an opportunity to appeal.</p>
        <p class="desc">(4). If you repeatedly violate other people's intellectual property rights, we will disable your account when appropriate.</p>
        <p class="desc">(5). You must not use our copyrights or trademarks or any marks that are confusingly similar, except as expressly permitted with our prior written consent.</p>
        <p class="desc">(6). If you collect information from users, you must: obtain their consent, make it clear that you (and not Telo) are collecting their information, and post a privacy policy explaining what information you collect and how you will use it.</p>
        <p class="desc">(7). You must not post anyone's identification documents or sensitive financial information on Telo.</p>
        <p class="desc">(8). You must not tag users or send email invitations to non-users without their consent.</p>
      </div>
      <div class="phrase">
        <p class="title">3. Registration and Account</p>
        <p class="desc">Telo users need a nickname, age, gender, avatar, and other optional information. We need your help to maintain this. We offer three ways to access Telo: Facebook, Google, and SMS. Here are some commitments you make to us regarding registering and maintaining the security of your account:</p>
        <p class="desc">(1). If you are under 18, you cannot use Telo.</p>
        <p class="desc">(2). You must not transfer your account to anyone without first obtaining our written permission.</p>
        <p class="desc">(3). You must not provide false personal information on Telo or create an account for anyone other than yourself without permission.</p>
        <p class="desc">(4). If we disable your account, you can only post content to contact the official assistant called "Telo Team".</p>
        <p class="desc">(5). We reserve the right to delete or ban your account if we deem it appropriate.</p>
      </div>
      <div class="phrase">
        <p class="title">4. Termination</p>
        <p class="desc">If you violate the Terms or otherwise create risks or possible legal exposures for us, then we reserve the right, at our sole discretion, at any time and without liability or the need to give you prior notice or refund any unused services, to:</p>
        <p class="desc">(1). suspend or revoke your registration (if applicable) and your right to access and/or use Telo or submit any content to Telo; </p>
        <p class="desc">(2). utilize any operational, technological, legal, or other available means to enforce the Terms (including without limitation blocking specific IP addresses).</p>
        <p class="desc">We will attempt (but we are not obligated) to notify you if your access to Telo and/or your profile is to be or has been suspended or terminated.</p>
        <p class="desc">If you have registered on Telo, you can terminate your registration at any time by going to the "Settings" control on Telo when you are logged in and choosing the "Delete Account" link. We save your profile information in case you later decide to restore your account. Many users deactivate their accounts for temporary reasons and expect us to maintain their information until they return to Telo. Therefore, you will be able to restore your account and your profile in its entirety within 30 days of deactivating it. Once your registration is terminated, we have the right to delete any related content that you have submitted or uploaded onto Telo. For more details, please refer to our Privacy Policy. Content that you have uploaded to Telo, other than your profile (such as moments, comments, or contacts), may still appear on Telo after the termination of your registration.</p>
      </div>
      <div class="phrase">
        <p class="title">5.In-App Purchases and Subscriptions</p>
        <p class="desc">In-App Purchases. From time to time, Telo may offer additional products and services for acquisition through the App Store ℠, Google Play or other application platforms ("in-app acquisitions"). If you opt to make an in-app acquisition, you will be prompted to enter details for your account with the mobile platform you are utilizing (e.g., Apple, Android, etc.) ("your IAP Account"), and your IAP Account will be billed for the in-app acquisition in accordance with the terms disclosed to you at the time of purchase as well as the general terms for in-app acquisitions that apply to your IAP Account. If you purchase an auto-recurring periodic subscription through an in-app acquisition, your IAP Account will be continuously charged for the subscription until you cancel in accordance with the platform terms. In all cases, please refer to the terms of your application platform which apply to your in-app acquisitions.</p>
      </div>
      <div class="phrase">
        <p class="title">6.What Can I Obtain at Telo?</p>
        <p class="desc">Telo provides you with the opportunity to pay for certain services offered on the site. Telo’s VIP services encompass various opportunities to find and encounter additional people, to customize your profile and to enhance your profile so that more people discover you. Telo also offers the ability to play various games on the site. All of these VIP services can be purchased after you register, and you may subscribe to the VIP services for various durations. Once you have paid for any VIP services, they are non-refundable. You can alter your Auto Top-up at any time in your payment settings on your profile page. The pricing may vary due to a number of factors, such as (but not limited to) promotional offers, loyalty bonuses and other discounts that might apply to your age group.</p>
      </div>
      <div class="phrase">
        <p class="title">7.How Do I Renew My VIP Services with Telo?</p>
        <p class="desc">Once you have requested a Telo VIP Service, you authorize Telo to charge your chosen payment method. If you wish to cancel or change your payment method at any time, you can do so either via the payment settings option under your profile or by contacting your mobile service provider. If your chosen payment method is via your mobile service provider, then please check with them about their payment terms, as their payment terms will govern how payments to Telo are made as well as how such payments may be changed or cancelled. Your subscription to Telo’s VIP services will automatically renew until you decide to cancel, and if you have enabled the auto top-up feature, your account will automatically be replenished until you decide to disable this feature.</p>
      </div>
      <div class="phrase">
        <p class="title">8.Subscription Guidelines</p>
        <p class="desc">(1). Subscription automatically renews unless auto-renew is disabled at least 24 hours before the end of the current period;</p>
        <p class="desc">(2). Account will be charged for renewal within 24 hours prior to the end of the current period, and identify the cost of the renewal;</p>
        <p class="desc">(3). Subscriptions can be managed by the user: auto-renewal can be turned off by going to the user‘s Account Settings after purchase;</p>
        <p class="desc">(4). No cancellation of the current subscription is permitted during the active subscription period.</p>
      </div>
      <div class="phrase">
        <p class="title">9.Proprietary Rights Regarding Content on Telo</p>
        <p class="desc">(1). Telo DOES NOT ASSERT ANY ownership entitlements in the text, documents, images, photographs, videos, sounds, musical compositions, literary works, applications, or any other materials (collectively, "Content") that you post on or via the Telo Services. By presenting or releasing ("posting") any Content on or through the Telo Services, you hereby grant Telo a non-exclusive, fully compensated and royalty-free, global, limited license to utilize, modify, remove from, add to, publicly perform, publicly exhibit, reproduce and translate such Content. This includes, without limitation, distributing part or all of the Site in any media format through any media channels. However, Content not shared publicly ("private") will not be distributed outside the Telo Services.</p>
        <p class="desc">(2). You represent and guarantee that: (i) you own the Content posted by you on or through the Telo Services or otherwise have the right to grant the license specified in this section; (ii) the posting and use of your Content on or through the Telo Services does not violate the privacy rights, publicity rights, copyrights, contract rights, intellectual property rights or any other rights of any person; and (iii) the posting of your Content on the Site does not lead to a breach of contract between you and a third party. You agree to pay for all royalties, fees, and any other amounts owed to any person due to Content you post on or through the Telo Services.</p>
        <p class="desc">(3). The Telo Services contain content belonging to Telo ("Telo Content"). Telo Content is safeguarded by copyright, trademark, patent, trade secret and other laws. Telo owns and retains all rights in the Telo Content and the Telo Services. Telo hereby grants you a limited, revocable, non-transferable license to reproduce and display the Telo Content (excluding any software code) solely for your personal use in connection with viewing the Site and using the Telo Services.</p>
        <p class="desc">(4). The Telo Services contain content of Users and other Telo licensors. Except as provided within this Agreement, you may not copy, modify, translate, publish, broadcast, transmit, distribute, perform, display, or sell any Content appearing on or through the Telo Services.</p>
        <p class="desc">(5). Telo performs technical functions necessary to provide the Telo Services, including but not limited to transcoding and/or reformating Content to enable its use throughout the Telo Services.</p>
        <p class="desc">(6). Although the Site and other Telo Services are typically available, there will be times when the Site or other Telo Services will be interrupted for scheduled maintenance or upgrades, for emergency repairs, or due to failures of telecommunications links and equipment beyond Telo's control. Also, although Telo will normally only remove Content that violates this Agreement, Telo reserves the right to delete any Content for any reason without prior notice. Deleted content may be stored by Telo to comply with certain legal obligations and is not retrievable without a valid court order. Consequently, Telo encourages you to maintain your own backup of your Content. In other words, Telo is not a backup service. Telo will not be liable to you for any modification, suspension, or discontinuation of the Telo Services, or the loss of any Content.</p>
      </div>
      <div class="phrase">
        <p class="title">10.Disclaimer of Warranties and Limitation of Liability</p>
        <p class="desc">To the greatest extent permitted by law, Telo explicitly disclaims:</p>
        <p class="desc">(1). all conditions, representations, warranties and other terms that might otherwise be implied by statute, common law or the law of equity;</p>
        <p class="desc">(2). any liability incurred by you resulting from the use of Telo, its services or these terms and conditions, including without limitation for any claims, charges, demands, damages, liabilities, losses or expenses of whatever nature and however direct, indirect, incidental, special, exemplary, punitive or consequential damages (however arising including negligence), loss of use, loss of data, loss caused by a computer or electronic virus, loss of income or profit, loss of or damage to property, wasted managerial or office time, breach of contract or claims of third parties or other losses of any kind or character, even if Telo has been informed of the possibility of such damages or losses, arising out of or in connection with the use of Telo. This limitation on liability applies to, but is not limited to, the transmission of any disabling device or virus that may infect your equipment, failure of mechanical or electrical equipment or communication lines, telephone or other interconnection issues (e.g., you cannot access your internet service provider), unauthorized access, theft, bodily injury (other than caused by our negligence), property damage, operator errors, strikes or other labor problems or any act of God in connection with Telo including, without limitation, any liability for loss of revenue or income, loss of profits or contracts, loss of business, loss of anticipated savings, loss of goodwill, loss of data, wasted managerial or office time and any other loss or damage of any kind, however arising and whether caused by tort (including, but not limited to, negligence), breach of contract or otherwise, even if foreseeable whether arising directly or indirectly.</p>
      </div>
      <div class="phrase">
        <p class="title">11.Indemnification</p>
        <p class="desc">You agree to safeguard, compensate and hold blameless Telo, its parent company, officers, directors, employees and agents from and against any and all claims, damages, obligations, losses, liabilities, costs or debts, and expenses (including but not limited to legal fees) resulting from: </p>
        <p class="desc">(i) your use of and access to the Telo Service; </p>
        <p class="desc">(ii) your violation of any provision of these Terms of Service;</p>
        <p class="desc">(iii) your infringement of any third-party right, including without limitation any copyright, property, or privacy right; </p>
        <p class="desc">(iv) any claim that one of your user status submissions caused harm to a third party. This obligation to defend and indemnify will endure these Terms of Service and your use of the Telo Service.</p>
      </div>
      <div class="phrase">
        <p class="title">12.Modifications</p>
        <p class="desc">We reserve the right to make alterations to these terms and offer you the opportunity to review and provide comments on the revised terms before continuing to utilize our Services. We may give notice on the Website if we make changes to policies, guidelines or other terms referenced in or incorporated by this Statement.</p>
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
