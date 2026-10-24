import type { Metadata } from "next";
import { SITE, CONTACT } from "../../lib/config";

export const metadata: Metadata = {
  title: `Terms of Service — ${SITE.projectName}`,
  description: `Terms governing participation in the ${SITE.projectName} NFT reservation and claim process.`,
};

export default function TermsPage() {
  return (
    <div className="shell">
      <section className="card">
        <div className="sec-label mono">LEGAL</div>
        <h1>Terms of Service</h1>
        <p className="sub">Last updated: October 2026</p>
      </section>

      <section className="card">
        <h2>1. The service</h2>
        <p>
          {SITE.projectName} runs a free allowlist reservation for a fixed-supply
          NFT collection ({SITE.totalSlots} supply, max {SITE.maxPerWallet} per
          wallet). Reserving costs nothing and requires no payment, no
          transaction signature, and no connection to a wallet app.
        </p>

        <h2>2. Eligibility &amp; rules</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>One wallet = one reservation. Duplicates are removed.</li>
          <li>Promo tasks (follow / like / repost / comment) must be completed with a genuine account. Bot or throwaway accounts may be rejected.</li>
          <li>A reservation is a <b>request</b>, not a guarantee. Every reservation is reviewed before acceptance.</li>
        </ul>

        <h2>3. Your responsibilities</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>You are responsible for the accuracy of your wallet address. It cannot be changed after reserving.</li>
          <li>Never share a seed phrase, private key, or sign a transaction for anyone — including anyone claiming to represent {SITE.projectName}. We will never ask.</li>
        </ul>

        <h2>4. Changes</h2>
        <p>
          We may adjust supply, timing, or the claim process; material changes
          will be announced on our official X account @{CONTACT.xHandle}.
        </p>

        <h2>Contact</h2>
        <p>
          Official channels: <a href={CONTACT.xUrl} target="_blank" rel="noopener noreferrer">@{CONTACT.xHandle}</a>
          {CONTACT.email ? <> • <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></> : null}.
          Beware of impersonators — verify handles before acting on any DM.
        </p>
        <div className="btnrow">
          <a className="btn" href="/">← Back</a>
        </div>
      </section>
    </div>
  );
}
