import type { Metadata } from "next";
import { SITE, CONTACT } from "../../lib/config";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.projectName}`,
  description: `How ${SITE.projectName} collects, uses, and protects the data you submit during the NFT reservation.`,
};

export default function PrivacyPage() {
  return (
    <div className="shell">
      <section className="card">
        <div className="sec-label mono">LEGAL</div>
        <h1>Privacy Policy</h1>
        <p className="sub">Last updated: October 2026</p>
      </section>

      <section className="card">
        <h2>What we collect</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li><b>X (Twitter) handle</b> — only to tag and review your promo tasks.</li>
          <li><b>Wallet address</b> — so the Oblyx NFT can be delivered to you at claim time.</li>
          <li><b>Reservation details</b> — quantity, timestamp, and task-check status.</li>
          <li><b>On-device copy</b> — a local record of your reservation stored only in your own browser (localStorage), so your claim lookup keeps working offline.</li>
        </ul>

        <h2>What we never collect</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Seed phrases or private keys — never, under any circumstance.</li>
          <li>Transaction signatures or token approvals — we only need your <i>address</i>, read-only.</li>
          <li>Passwords, passphrases, or access to your X, email, or wallet accounts.</li>
        </ul>

        <h2>How we use it</h2>
        <p>
          Data is stored securely and used solely to (1) validate that one wallet =
          one reservation, (2) review task completion, and (3) distribute the NFTs
          when the claim phase opens. We do not sell, rent, or share personal data
          with third parties for marketing.
        </p>
        <p>
          <b>Claim phase:</b> if minting at claim time involves payment, the data
          needed for that (e.g. an order record) will be handled securely and this
          policy will be updated before the claim phase opens.
        </p>

        <h2>Retention &amp; control</h2>
        <p>
          Reservation records are kept until the claim phase completes and the
          allowlist has been finalized. You can request deletion of your record at
          any time via the contact channel below — mention the wallet address you
          reserved with.
        </p>

        <h2>Contact</h2>
        <p>
          {CONTACT.email
            ? <>Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></>
            : null}
          {" "}Contact us on X: <a href={CONTACT.xUrl} target="_blank" rel="noopener noreferrer">@{CONTACT.xHandle}</a>.
        </p>
        <div className="btnrow">
          <a className="btn" href="/">← Back</a>
        </div>
      </section>
    </div>
  );
}
