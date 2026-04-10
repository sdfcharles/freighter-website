import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Freighter Terms of Service.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-text-primary tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-text-tertiary mt-2">
            Last updated: January 1, 2025
          </p>

          <article className="prose prose-invert prose-lg mt-12 max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Freighter (the &quot;Service&quot;), a non-custodial
              cryptocurrency wallet developed by the Stellar Development
              Foundation (&quot;SDF,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound
              by these Terms of Service (&quot;Terms&quot;). If you do not agree to these
              Terms, do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Freighter is a non-custodial wallet that allows you to generate
              cryptographic key pairs, manage digital assets, sign transactions,
              and interact with applications on the Stellar network. Freighter
              is available as a browser extension and mobile application.
            </p>

            <h2>3. Non-Custodial Nature</h2>
            <p>
              Freighter is a non-custodial wallet. This means that you, and only
              you, have access to and control over your private keys and
              recovery phrase. SDF does not store, have access to, or have any
              ability to retrieve your private keys, recovery phrase, or
              passwords. SDF cannot:
            </p>
            <ul>
              <li>Access or freeze your funds</li>
              <li>Reset or recover your password</li>
              <li>Reverse or modify any transactions</li>
              <li>Recover lost private keys or recovery phrases</li>
            </ul>

            <h2>4. User Responsibilities</h2>
            <p>
              You are solely responsible for the security and safekeeping of
              your private keys, recovery phrase, and passwords. You acknowledge
              that if you lose access to your recovery phrase, your funds may be
              permanently inaccessible. You agree to:
            </p>
            <ul>
              <li>
                Safely store your recovery phrase in a secure physical location
              </li>
              <li>Not share your recovery phrase or private keys with anyone</li>
              <li>Use a strong, unique password for your wallet</li>
              <li>
                Keep your device and browser secure and up to date
              </li>
            </ul>

            <h2>5. Fees</h2>
            <p>
              Freighter is currently provided free of charge. SDF reserves the
              right to introduce fees for certain features in the future, with
              advance notice. Transactions on the Stellar network are subject to
              network fees (base fees), which are not controlled by SDF.
            </p>

            <h2>6. Third-Party Services</h2>
            <p>
              Freighter may integrate with or provide access to third-party
              services, including but not limited to fiat on/off-ramp providers,
              security providers (such as Blockaid), and blockchain data
              providers (such as Stellar Expert). SDF is not responsible for the
              availability, accuracy, or practices of any third-party services.
            </p>

            <h2>7. Risks</h2>
            <p>
              You acknowledge and accept the following risks associated with
              using digital assets and the Stellar network:
            </p>
            <ul>
              <li>
                Digital asset values are highly volatile and may result in
                significant losses
              </li>
              <li>Transactions on the Stellar network are irreversible</li>
              <li>
                Digital assets are not protected by FDIC, SIPC, or similar
                insurance
              </li>
              <li>
                Regulatory changes may affect the legality or functionality of
                digital assets in your jurisdiction
              </li>
            </ul>

            <h2>8. Age Requirement</h2>
            <p>
              You must be at least 18 years of age to use Freighter. By using
              the Service, you represent and warrant that you meet this age
              requirement.
            </p>

            <h2>9. Intellectual Property</h2>
            <p>
              Freighter and its source code are made available under an
              open-source license. The Freighter name, logo, and branding are
              trademarks of the Stellar Development Foundation.
            </p>

            <h2>10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. SDF DOES NOT
              WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR
              SECURE.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SDF SHALL NOT BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES ARISING FROM YOUR USE OF THE SERVICE, INCLUDING BUT NOT
              LIMITED TO LOSS OF FUNDS, DATA, OR PROFITS.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, United States, without regard
              to its conflict of law provisions.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              SDF reserves the right to modify these Terms at any time. Changes
              will be posted on this page with an updated &quot;Last updated&quot; date.
              Continued use of the Service after changes constitutes acceptance
              of the revised Terms.
            </p>

            <h2>14. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:help@freighter.app">help@freighter.app</a> or
              write to: Stellar Development Foundation, 475 Brannan Street,
              Suite 400, San Francisco, CA 94107.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
