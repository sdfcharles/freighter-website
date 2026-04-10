import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Freighter Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-text-primary tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-text-tertiary mt-2">
            Last updated: January 1, 2025
          </p>

          <article className="prose prose-invert prose-lg mt-12 max-w-none">
            <h2>1. Introduction</h2>
            <p>
              The Stellar Development Foundation (&quot;SDF,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and protect information when you use
              Freighter (the &quot;Service&quot;).
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              Freighter is designed with privacy as a core principle. We collect
              minimal information:
            </p>

            <h3>2.1 Information We Do NOT Collect</h3>
            <ul>
              <li>Private keys or recovery phrases</li>
              <li>Wallet passwords</li>
              <li>Personal identification information (name, email, phone)</li>
              <li>IP addresses tied to wallet activity</li>
              <li>Transaction history or asset balances</li>
            </ul>

            <h3>2.2 Information We May Collect</h3>
            <ul>
              <li>
                <strong>Anonymous usage analytics:</strong> If you opt in, we
                may collect anonymized data about feature usage to improve the
                product. This data cannot be linked to your identity or wallet
                address.
              </li>
              <li>
                <strong>Crash reports:</strong> Anonymized crash reports to help
                us identify and fix bugs. These contain technical information
                about the error but no personal or wallet data.
              </li>
            </ul>

            <h2>3. How We Use Information</h2>
            <p>Any information we collect is used solely to:</p>
            <ul>
              <li>Improve the performance and reliability of Freighter</li>
              <li>Identify and fix bugs and crashes</li>
              <li>Understand which features are most useful to users</li>
            </ul>

            <h2>4. Blockchain Data</h2>
            <p>
              Please be aware that transactions on the Stellar network are
              public and immutable. When you submit a transaction through
              Freighter, the transaction details (including your public address,
              amounts, and asset types) are permanently recorded on the Stellar
              blockchain. This is a fundamental property of blockchain
              technology and is not controlled by SDF or Freighter.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              Freighter may interact with third-party services that have their
              own privacy policies:
            </p>
            <ul>
              <li>
                <strong>Blockaid:</strong> Security scanning for transaction
                safety
              </li>
              <li>
                <strong>Stellar Expert:</strong> Blockchain data and address
                verification
              </li>
              <li>
                <strong>Coinbase/Ramp partners:</strong> Fiat on/off-ramp
                services (their own KYC requirements may apply)
              </li>
              <li>
                <strong>Google Analytics:</strong> Anonymous usage tracking (if
                opted in)
              </li>
            </ul>
            <p>
              We encourage you to review the privacy policies of any
              third-party services you interact with through Freighter.
            </p>

            <h2>6. Biometric Data</h2>
            <p>
              If you enable biometric authentication (Face ID, Touch ID, or
              fingerprint), this data is processed and stored entirely on your
              device by your operating system. Freighter and SDF never have
              access to your biometric data.
            </p>

            <h2>7. Data Storage and Security</h2>
            <p>
              Your private keys and recovery phrase are encrypted and stored
              locally on your device. They are never transmitted to SDF servers
              or any third party. We implement industry-standard security
              measures to protect any data we do collect.
            </p>

            <h2>8. Your Choices</h2>
            <ul>
              <li>
                <strong>Analytics opt-out:</strong> You can opt out of anonymous
                analytics data sharing at any time in Freighter&apos;s settings.
              </li>
              <li>
                <strong>Data deletion:</strong> Uninstalling Freighter removes
                all locally stored data from your device. If you have shared
                anonymous analytics, you can request deletion by contacting us.
              </li>
            </ul>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Freighter is not intended for use by individuals under the age of
              18. We do not knowingly collect information from children.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date. Continued use of the
              Service after changes constitutes acceptance of the revised
              policy.
            </p>

            <h2>11. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us at{" "}
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
