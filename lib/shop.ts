/**
 * SS Mobile shop details (Sinnar — Branch 1).
 */
export const shop = {
  name: "SS Mobile",
  area: "Sinnar",
  branchLabel: "Branch 1",
  ownerTitle: "",
  contactName: "SS MOBILE SINNAR",
  tagline: "Mobiles · Smart TVs · Speakers · Home Theater · Service",
  phoneDisplay: "+91 80870 54003",
  phoneTel: "+918087054003",
  whatsapp: "918087054003",
  whatsappDisplay: "+91 80870 54003",
  instagram: "https://www.instagram.com/ss_mobile_sinnar?mdxt=bDk1bGQwNmYzOHV1",
  ownerInstagram: "",
  ownerInstagramLabel: "",
  secondOwnerInstagram: "",
  secondOwnerInstagramLabel: "",
  facebook: "https://www.facebook.com/share/19tQLAHuCG/",
  address: "Opp. Mahatma Phule Statue, Near ST Bus Stand, Sinnar - Thangaon Rd, Sinnar, Dist. Nashik 422103",
  city: "Sinnar, Nashik",
  pincode: "422103",
  mapsQuery: "19.8432355,73.9946923",
  mapsShortUrl: "https://share.google/MyOieHPsWYHu6rToc",
  googleReviewLink: "https://search.google.com/local/writereview?placeid=ChIJEcfoxPK73TsRWFnpwg3gK0s",
  placeId: "ChIJEcfoxPK73TsRWFnpwg3gK0s",
  mapsEmbed:
    "https://maps.google.com/maps?q=19.8432355,73.9946923+(SS+Mobile+Sinnar)&t=h&z=18&ie=UTF8&iwloc=&output=embed",
  hours: "Open Daily · 10:00 AM – 10:00 PM",
  brands: [
    "Samsung",
    "Apple iPhone",
    "Vivo",
    "Oppo",
    "Xiaomi / Redmi",
    "Realme",
    "OnePlus",
    "Smart TVs",
    "Home Theater",
    "JBL / boAt",
  ],
  offers: [
    "Latest 5G smartphones — all major brands (Samsung, Vivo, Oppo, Xiaomi, Realme, iPhone, OnePlus)",
    "All-brand Smart LED TVs, 4K Android TVs & Google TVs",
    "Bluetooth speakers, soundbars, party speakers & Home Theater systems",
    "Genuine accessories, covers, tempered glass, neckbands, earbuds & fast chargers",
    "Expert mobile repair, display replacement & battery service",
    "Best exchange / buyback value on old phones + Easy 0% EMI options",
  ],
};

export const categories = [
  { id: "all", label: "All" },
  { id: "mobiles", label: "New Mobiles" },
  { id: "tv_audio", label: "Smart TV & Speakers" },
  { id: "accessories", label: "Accessories" },
  { id: "repair", label: "Repair & Service" },
  { id: "exchange", label: "Exchange & EMI" },
  { id: "staff", label: "Staff & Billing" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export function googleReviewUrl() {
  // Official write-review URL. Same-tab <a href> works on iOS Safari + Android.
  if (shop.placeId) {
    return `https://search.google.com/local/writereview?placeid=${shop.placeId}`;
  }
  if (shop.googleReviewLink) {
    return shop.googleReviewLink;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapsQuery)}`;
}

export function mapsDirectionsUrl() {
  if (shop.mapsShortUrl) return shop.mapsShortUrl;
  if (shop.placeId) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapsQuery)}&query_place_id=${shop.placeId}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapsQuery)}`;
}

export function mapsEmbedUrl() {
  if (shop.mapsEmbed) return shop.mapsEmbed;
  return `https://maps.google.com/maps?q=${encodeURIComponent(shop.mapsQuery)}&t=h&z=18&ie=UTF8&iwloc=&output=embed`;
}

export function whatsappUrl() {
  const num = shop.whatsapp.replace(/\D/g, "");
  if (!num || num.includes("X")) return "#";
  return `https://wa.me/${num}`;
}

export function vcard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:SINNAR;SS MOBILE;;;`,
    `FN:${shop.contactName}`,
    `ORG:${shop.name} ${shop.area}`,
    `TEL;TYPE=CELL,VOICE,PREF:${shop.phoneTel}`,
    `ADR;TYPE=WORK:;;${shop.address};;;;India`,
    shop.instagram.endsWith("instagram.com/") ? "" : `URL:${shop.instagram}`,
    shop.ownerInstagram ? `URL:${shop.ownerInstagram}` : "",
    shop.secondOwnerInstagram ? `URL:${shop.secondOwnerInstagram}` : "",
    shop.facebook.endsWith("facebook.com/") ? "" : `URL:${shop.facebook}`,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\n");
}
