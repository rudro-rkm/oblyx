export const SITE = {
  projectName: "Oblyx",
  tokenSymbol: "NFT • 1000 SUPPLY",
  tagline: "X NFT promo — reserve your mints",
  totalSlots: 1000,
  // Manual offset added on top of the MongoDB count (e.g. offline sales).
  // The DB is now the source of truth — keep 0 unless migrating.
  alreadyReserved: 0,
  maxPerWallet: 4,
  xAccount: "OBLYX_NFT",
  xAccountUrl: "https://x.com/intent/follow?screen_name=OBLYX_NFT",
  xPostUrl: "https://x.com/OBLYX_NFT",
  // Direct X intent links for the promo post (one tap, right action).
  xLikeUrl: "https://x.com/intent/like?tweet_id=2114598321344131548",
  xRepostUrl: "https://x.com/intent/retweet?tweet_id=2114598321344131548",
  xReplyUrl: "https://x.com/intent/post?in_reply_to=2114598321344131548",
  // Canonical site origin. Set NEXT_PUBLIC_SITE_URL in the deployment env
  // (e.g. "https://oblyx.art") so og:meta URLs and search results use it.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
} as const;

export const CONTACT = {
  // Put your real contact email here when available; X DMs are the
  // primary channel until then.
  email: "",
  xHandle: "OBLYX_NFT",
  xUrl: "https://x.com/OBLYX_NFT",
};

export type ReservationStatus = "pending" | "accepted" | "rejected";

export type Reservation = {
  handle: string;
  wallet: string;
  qty: number;
  at: number;
  handleVerified: boolean;
  status: ReservationStatus;
  proofs?: { repostUrl?: string; commentUrl?: string };
};
