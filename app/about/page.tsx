import type { Metadata } from "next";
import { SITE, CONTACT } from "../../lib/config";

export const metadata: Metadata = {
  title: `About — ${SITE.projectName} NFT`,
  description: `What ${SITE.projectName} is, how the reservation works, how to verify this is the real site, and safety information.`,
};

export default function AboutPage() {
  return (
    <div className="shell">
      <section className="card">
        <div className="sec-label mono">TRUST</div>
        <h1>About {SITE.projectName}</h1>
        <p className="sub">What this site is — and what it never does.</p>
      </section>

      <section className="card">
        <h2>What is this?</h2>
        <p>
          {SITE.projectName} is a fixed-supply NFT collection ({SITE.totalSlots}{" "}
          pieces). This page is the official reservation site: complete the promo
          tasks on X, reserve up to {SITE.maxPerWallet} NFTs, and your spot is
          reviewed. The NFT claim phase opens after all slots are taken.
        </p>
        <p>
          Reserving your spot is completely free — no payment, no wallet
          connection, and no signatures during the reservation phase. Claim-phase
          details (pricing and payment) will be announced clearly on the official
          X account before it opens.
        </p>

        <h2>Safety — please read</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>We only ask for your <b>public wallet address</b> (0x…), to know where to send the NFT. That's an identifier, like an IBAN — it gives us no control over your funds.</li>
          <li>We will <b>never</b> ask for a seed phrase, private key, or recovery words.</li>
          <li>We will <b>never</b> ask you to connect your wallet here or sign a transaction during the reservation phase.</li>
          <li>We will <b>never</b> DM you first from a "support" account asking to "verify" or "unlock" anything.</li>
          <li>Only links published from the official X account <a href={CONTACT.xUrl} target="_blank" rel="noopener noreferrer">@{CONTACT.xHandle}</a> are authentic.</li>
        </ul>

        <h2>How to verify this is the real site</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Check that this URL is the one posted in @{CONTACT.xHandle}'s bio/pinned post on X.</li>
          <li>Doubting this page? Your reservation is stored on this domain only — return any time to look it up, and cross-check the URL against @{CONTACT.xHandle}'s pinned post on X.</li>
        </ul>

        <h2>Reviews &amp; transparency</h2>
        <p>
          Every reservation is manually reviewed: accounts that don't complete the
          tasks, botted interactions, or duplicate wallets are rejected. Accepted
          wallets are included in the claim round. Questions? Reach us on X at{" "}
          <a href={CONTACT.xUrl} target="_blank" rel="noopener noreferrer">@{CONTACT.xHandle}</a>.
        </p>
        <div className="btnrow">
          <a className="btn btn-p" href="/">← Back to reservation</a>
          <a className="btn" href="/privacy">Privacy</a>
          <a className="btn" href="/terms">Terms</a>
        </div>
      </section>
    </div>
  );
}
