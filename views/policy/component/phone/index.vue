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
    <!-- <div class="content">
      <div class="phrase">
        <p class="title">What precisely Does this Privacy Policy Encompass?</p>
        <p class="desc">
          This Privacy Policy is closely related to Telo's meticulous handling of Personal Data that is gradually
          amassed when you engage in the utilization of the application and service. Nevertheless, it emphatically does
          not pertain to the actions of third parties that are neither possessed nor controlled by Telo. This includes
          various third-party services that are accessed through Telo. Given the fact that our service integrates with
          sites such as Facebook and others of a similar nature, we reasonably assume that you are thoroughly
          familiarized with their respective privacy policies.
        </p>
      </div>
      <div class="phrase">
        <p class="title">The Service</p>
        <p class="desc">
          Telo presents an astonishingly user-friendly interface that is nothing short of exceptional. It stands out
          with its intuitive design and seamless functionality, making it a pleasure to interact with. Just like a
          state-of-the-art navigator of future technology, it acts as a gateway to a world of diverse experiences. This
          remarkable feature permits you to move between different interest communities with absolute ease and without
          the slightest effort. You can explore various realms of interest, freely transitioning from one to another.
          Moreover, you have the opportunity to customize your exclusive profile in a highly personalized manner. By
          doing so, you can showcase your truly unique interest spectrum, highlighting your individual passions and
          pursuits. At the same time, you can also display your captivating personality allure, allowing others to get a
          glimpse of your distinct charm and charisma.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Information We Collect</p>
        <p class="desc">
          We accumulate a large amount of information in the following areas: Information that you offer voluntarily.
          This includes details you provide when signing up, filling out forms, or sharing your preferences. Information
          that we obtain when you utilize our services. As you interact with our platform, we collect data on your
          activities, such as the pages you visit, the actions you take, and the time you spend on different features.
          Information that we acquire from third parties. We may receive additional data from external sources, which
          can help us enhance our understanding of your needs and interests and provide you with a more personalized
          experience. Here's a more in-depth examination of each category.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Information You Provide</p>
        <p class="desc">
          When you visit and interact with Telo's app and service, you provide us with personal information. This
          personal information can encompass a wide range of details. For instance, it may include your name, which is a
          fundamental identifier that helps us address you and distinguish you from other users. Your profile picture is
          another important element. It gives a visual representation of you and can make it easier for others to
          recognize you within the service. Additionally, your birth date can provide some context about your age group
          and might be used for certain age-appropriate features or content. Your phone number is also a valuable piece
          of information that can be used for verification purposes or for communication if needed. This information may
          be shared with your contacts on our service. This sharing can enhance the connectivity and social aspect of
          the platform, allowing you to easily connect and interact with people you know. However, you have control over
          and can modify your profile. This means that you can update your information as needed, change your profile
          picture to reflect a different mood or stage in your life, or adjust other details to ensure that your profile
          accurately represents you. If you register with Facebook, we may store your ID and token. This enables a
          seamless integration between our service and your Facebook account, making it easier for you to log in and
          access our platform. However, your profile is accessible to connected users and can be discovered unless you
          opt out. This gives you the choice to decide whether you want your profile to be visible to others or not. You
          can also share your device's contacts list. This can be a convenient way to find and connect with friends who
          are also using the service. But if you don't want us to store it, you can opt out at any time. It's important
          to remember that any content you send through the service can be saved or copied. This could be messages,
          posts, or other forms of communication. So, be cautious about what you share. When you contact support or
          communicate with us in any other way, we collect the information you voluntarily provide. This helps us better
          understand your issues and concerns and respond to you more effectively.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Info We Get From Your Use Of Our Services</p>
        <p class="desc">
          When you use our services, we collect info on usage (e.g., filter use), device info (e.g., model, OS), user
          content, device phonebook with consent, location with consent, info via cookies/tech, log info, and keep
          records if you contact us.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Info We Gather from Third Parties</p>
        <p class="desc">
          We collect info from third parties. Other users may provide info about you when using our services. E.g., if a
          user allows us to collect from their phonebook and you're in their contacts, we may combine it. We may also
          get info from our other companies or third-party sources and combine it with our collected info.
        </p>
      </div>
      <div class="phrase">
        <p class="title">How We Use Information</p>
        <p class="desc">
          What precisely do we do with the gathered information? In short, we employ this information to supply you with
          excellent products and services and ceaselessly work on enhancing them. We are involved in the development,
          operation, improvement, delivery, upkeep, and protection of our products and services. Additionally, we
          correspond with you to keep you updated and handle your inquiries. We observe and analyze trends and usage
          behaviors to better comprehend your requirements and inclinations. We customize our services to provide a more
          individualized experience. We strengthen safety and security measures to safeguard your data and ensure a
          secure environment. We confirm your identity and take measures to prevent deception. We utilize cookie data to
          further improve our services. Furthermore, we enforce our terms of service to maintain a just and orderly
          platform. We may also store some of the information locally on your device for convenient access and enhanced
          performance.
        </p>
      </div>
      <div class="phrase">
        <p class="title">How We Share Information</p>
        <p class="desc">
          In specific circumstances, we might share your personal information with third-party service providers. There
          are several ways in which we may share information about you. With other users: We may share your username,
          your name, and information about your interactions. This sharing helps other users understand the connections
          between them and you. Additionally, we may share additional information with your explicit consent. With all
          users and the public: We may share public information such as profile pictures that you have submitted to
          Local. This allows for a more open and connected community experience. With our affiliates: We may share
          information within the Telo family of companies. This sharing enables us to provide better services and a more
          seamless experience across different platforms and entities within our corporate structure. With third
          parties: We may share your information with service providers, sellers, and partners. This sharing is done to
          ensure the smooth operation of our services and to provide you with the best possible experience. We may also
          share your information for legal reasons, such as complying with court orders or responding to legal
          investigations. In the event of a merger or acquisition, we may share your information with the acquiring
          company or entity. Additionally, we may share aggregated or de-identified information, which cannot be used to
          identify you individually. You give your consent that the information provided when you register and the
          content you create can be recorded, stored, published, and made available to other users. This consent is an
          important part of our community and helps to foster interaction and collaboration. Your information may be
          stored and processed in any country where we provide our service. This is necessary to ensure the availability
          and functionality of our services on a global scale. If you do not agree with this privacy policy, please do
          not use our service. By using our service, you are indicating your acceptance of this privacy policy and the
          terms and conditions it contains.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Information You Choose to Share with Third Parties</p>
        <p class="desc">
          The services that we provide may contain third-party links, search results, integrations, or may even be
          co-branded. When you utilize these features, there is a possibility that you may provide information either to
          the third party or to us. It is important to note that we cannot be held responsible for the manner in which
          third parties collect or use your information. Each third party has its own unique privacy practices and
          policies, and these may vary significantly from ours. When you click on a third-party link, interact with a
          third-party search result, or engage with an integrated service or a co-branded offering, you are essentially
          entering into a relationship with that third party. As a result, the collection, storage, and usage of your
          information are governed by the privacy policies of that particular third party. We strongly encourage you to
          review the privacy policies of all third-party sites and services that you interact with through our platform.
          This will help you understand how your information is being handled and give you the opportunity to make
          informed decisions about sharing your data. By being aware of the privacy practices of these third parties,
          you can take steps to protect your personal information and ensure that it is used in a manner that is
          consistent with your expectations. Remember, while we strive to provide a secure and reliable service, we
          cannot control the actions of third parties. Therefore, it is essential that you exercise caution and due
          diligence when interacting with third-party offerings to safeguard your privacy and the security of your
          personal information.
        </p>
      </div>
      <div class="phrase">
        <p class="title">How Long We Keep Your Content</p>
        <p class="desc">
          You should be acutely aware that users who have the opportunity to view your content possess the ability to
          save it through a variety of means. There are numerous ways in which this can occur, and it is not always
          possible for us to anticipate or prevent every possible method of saving. For instance, users may use
          screenshotting tools, download functions provided by their devices or browsers, or employ other software or
          techniques to capture and store your content. Moreover, it is entirely possible for someone to access messages
          through forensic techniques. These techniques can be employed by individuals with a certain level of technical
          expertise and may involve analyzing data on a device or in a network to uncover previously sent or received
          messages. Additionally, messages may sometimes be found in a device's temporary storage. This can happen due
          to various reasons, such as caching or incomplete deletion processes. Temporary storage on a device can hold
          onto data for a period of time, even after you may have thought it was deleted. In the event of the deletion
          of user information from our App, we cannot guarantee that it will occur within a specific time period. The
          deletion process can be complex and may depend on a number of factors, including the volume of data being
          processed, the efficiency of our systems, and any potential technical glitches or delays. Additionally, even
          after we initiate the deletion process, there may be a lag time before the information is completely removed
          from all of our servers and storage systems. We might also retain some information in backup for a limited
          duration. This is often done for reasons such as disaster recovery, ensuring the integrity of our services, or
          to comply with legal requirements. The length of time for which we retain backup information can vary
          depending on our internal policies and any legal mandates. In some cases, we may be required by law to retain
          certain types of information for a specific period of time. This could be for regulatory purposes, to assist
          in investigations, or to meet other legal obligations. So, while we take steps to protect your privacy and
          manage user information as carefully as possible, it is important to understand that there are limitations and
          uncertainties regarding the deletion and retention of your data.
        </p>
      </div>
      <div class="phrase">
        <p class="title">How We Protect Your Information</p>
        <p class="desc">
          Protecting user privacy and personal details holds an extremely high level of significance. It is a
          fundamental priority for us. We handle your personal information with the utmost care and diligence for
          several crucial purposes. Firstly, we do so to enhance and enforce security measures within our systems. This
          includes taking proactive steps to safeguard against potential threats and vulnerabilities. By handling your
          personal information in a responsible manner, we are able to implement stronger security protocols and
          safeguards. We also combat spam, malware, malicious activities, and security risks. Your personal information
          helps us identify and address these threats more effectively. By analyzing patterns and behaviors associated
          with your data, we can detect and prevent spam emails, malicious software, and other malicious activities that
          could compromise the security and integrity of our platform. In addition, we monitor and verify your identity
          to prevent unauthorized access. This is essential to ensure that only you and those authorized by you have
          access to your account and personal information. By implementing identity verification processes, we can
          reduce the risk of identity theft and unauthorized access to your data. Access to user information is strictly
          restricted to our employees, contractors, agents, and third-party service providers who have a legitimate need
          for it. These individuals and entities are required to access user information in order to provide, operate,
          develop, maintain, support, and optimize our service and security. We have strict access controls and security
          measures in place to ensure that only those with a legitimate need can access user information and that they
          do so in a secure and responsible manner. We utilize a variety of measures to safeguard user information.
          Password protection is a fundamental security measure that helps ensure only authorized users can access your
          account. We also maintain access logs to track who has accessed user information and when. This allows us to
          monitor and detect any unauthorized access attempts. Additionally, we implement system monitoring to detect
          and respond to potential security threats in real time. However, due to the complex and ever-changing nature
          of the internet and related technologies, we cannot guarantee absolute protection against loss, misuse, or
          alteration of user information. While we take extensive measures to protect your data, there are always risks
          associated with the digital environment. Hackers, malware, and other threats can evolve and adapt, making it
          difficult to provide 100% certainty of protection. Nevertheless, we are committed to continuously improving
          our security measures and staying vigilant in the face of emerging threats to ensure the best possible
          protection for your personal information.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Control over Your Information</p>
        <p class="desc">
          We are committed to providing you with control over your personal information by offering various tools. For
          instance, we provide access to and the ability to update your information (although there may be certain
          limitations. This can be accessed via the app's Settings section or by making a request. In some cases,
          identity confirmation may be required to ensure the security and integrity of your data). You also have the
          option to revoke permissions for certain data sources by adjusting the settings on your device. Additionally,
          we offer the possibility of erasure of your data (again, with some limitations). We also allow for restriction
          on the processing of your information and give you the right to object to the processing of your data under
          specific circumstances.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Data Removal</p>
        <p class="desc">
          You have the option to remove your data. If you request to delete your account, we will make every effort to
          fulfill your request while also adhering to legal requirements. However, it should be noted that deleting your
          account may result in an inability on our part to provide certain services to you. To erase your data, you can
          tap on “Me - Settings - Delete account”. When you initiate this process, we may ask for identity verification
          or additional information to ensure the security and proper handling of your request. This is done to protect
          your data and prevent unauthorized access or deletion.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Analytics and Advertising Services Provided by Others</p>
        <p class="desc">
          We may, under certain circumstances, permit other companies to utilize tracking technologies on our services.
          These companies are then able to collect information on your usage patterns over an extended period of time
          and across multiple services. The purposes for which they collect this information can be diverse, including
          but not limited to serving targeted advertisements. As of now, Telo does not respond to do-not-track signals.
          However, if at any point in the future we decide to respond to such signals, this will be clearly stated in an
          updated version of our privacy policy. This will ensure that you are informed of any changes in our approach
          to handling do-not-track requests and that your privacy is protected to the greatest extent possible.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Children</p>
        <p class="desc">
          Our services are meticulously crafted and specifically aimed at users who have reached the age of 18 or above.
          We do not direct our services towards anyone younger than 18 years old. As a result, we are exceptionally
          cautious and take every possible measure to guarantee that we do not intentionally gather any personal data
          from individuals who are under the age of 18.
        </p>
      </div>
      <div class="phrase">
        <p class="title">Revisions to the Privacy Policy</p>
        <p class="desc">
          We may revise this privacy policy on a regular and periodic basis. When we undertake such revisions, we will
          make sure to inform you through one method or another. At certain times, we will notify you by making
          modifications to the date that appears at the top of the privacy policy which can be easily accessed on both
          our website and mobile application. On other occasions, we may provide you with additional forms of notice.
          For example, we might add a prominent statement to the homepages of our websites to ensure that you are aware
          of the changes. Or we could give you an in-app alert to draw your attention to the updated privacy policy.
        </p>
      </div>
    </div> -->
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
