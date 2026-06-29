import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Button, LinkButton } from '../components/ui/Button';
import TwitterTestimonials from '../components/ui/TwitterTestimonialCards';

const REVIEW_DATES = {
  ru: [
    '12 янв 2026', '8 янв 2026', '3 янв 2026',
    '28 дек 2025', '21 дек 2025', '14 дек 2025',
    '5 дек 2025', '27 ноя 2025', '18 ноя 2025',
  ],
  en: [
    'Jan 12, 2026', 'Jan 8, 2026', 'Jan 3, 2026',
    'Dec 28, 2025', 'Dec 21, 2025', 'Dec 14, 2025',
    'Dec 5, 2025', 'Nov 27, 2025', 'Nov 18, 2025',
  ],
};

const getReviews = (t) => [
  { text: t('clients.reviews.items.0.text'), initials: t('clients.reviews.items.0.initials'), name: t('clients.reviews.items.0.name'), handle: t('clients.reviews.items.0.handle'), role: t('clients.reviews.items.0.role'), tag: t('clients.reviews.items.0.tag') },
  { text: t('clients.reviews.items.1.text'), initials: t('clients.reviews.items.1.initials'), name: t('clients.reviews.items.1.name'), handle: t('clients.reviews.items.1.handle'), role: t('clients.reviews.items.1.role'), tag: t('clients.reviews.items.1.tag') },
  { text: t('clients.reviews.items.2.text'), initials: t('clients.reviews.items.2.initials'), name: t('clients.reviews.items.2.name'), handle: t('clients.reviews.items.2.handle'), role: t('clients.reviews.items.2.role'), tag: t('clients.reviews.items.2.tag') },
  { text: t('clients.reviews.items.3.text'), initials: t('clients.reviews.items.3.initials'), name: t('clients.reviews.items.3.name'), handle: t('clients.reviews.items.3.handle'), role: t('clients.reviews.items.3.role'), tag: t('clients.reviews.items.3.tag') },
  { text: t('clients.reviews.items.4.text'), initials: t('clients.reviews.items.4.initials'), name: t('clients.reviews.items.4.name'), handle: t('clients.reviews.items.4.handle'), role: t('clients.reviews.items.4.role'), tag: t('clients.reviews.items.4.tag') },
  { text: t('clients.reviews.items.5.text'), initials: t('clients.reviews.items.5.initials'), name: t('clients.reviews.items.5.name'), handle: t('clients.reviews.items.5.handle'), role: t('clients.reviews.items.5.role'), tag: t('clients.reviews.items.5.tag') },
  { text: t('clients.reviews.items.6.text'), initials: t('clients.reviews.items.6.initials'), name: t('clients.reviews.items.6.name'), handle: t('clients.reviews.items.6.handle'), role: t('clients.reviews.items.6.role'), tag: t('clients.reviews.items.6.tag') },
  { text: t('clients.reviews.items.7.text'), initials: t('clients.reviews.items.7.initials'), name: t('clients.reviews.items.7.name'), handle: t('clients.reviews.items.7.handle'), role: t('clients.reviews.items.7.role'), tag: t('clients.reviews.items.7.tag') },
  { text: t('clients.reviews.items.8.text'), initials: t('clients.reviews.items.8.initials'), name: t('clients.reviews.items.8.name'), handle: t('clients.reviews.items.8.handle'), role: t('clients.reviews.items.8.role'), tag: t('clients.reviews.items.8.tag') },
];

// Social platform glyphs (size-agnostic, inherit currentColor).
const PLATFORM = {
  youtube: { name: 'YouTube', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" /></svg>
  ) },
  tiktok: { name: 'TikTok', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.4 2.3 1.8 3.8 4 3.9v2.9c-1.4.1-2.8-.3-4-1.1v6.1c0 3.4-2.9 6.1-6.3 5.8-3-.3-5.2-2.8-5.2-5.7 0-3.3 2.9-5.9 6.2-5.6v3c-.3-.1-.6-.1-.9-.1-1.5 0-2.7 1.3-2.6 2.9.1 1.4 1.3 2.5 2.7 2.5 1.5 0 2.7-1.2 2.7-2.7V3h3.4z" /></svg>
  ) },
  vk: { name: 'VK', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true"><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill="currentColor" fontFamily="inherit">VK</text></svg>
  ) },
  instagram: { name: 'Instagram', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" /></svg>
  ) },
  facebook: { name: 'Facebook', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg>
  ) },
  pinterest: { name: 'Pinterest', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.2 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3-2.3 3-5 0-2.1-1.4-3.6-3.9-3.6-2.9 0-4.6 2.1-4.6 4.4 0 .8.2 1.4.6 1.9.2.2.2.3.1.5l-.2.9c-.1.3-.3.4-.6.2-1.1-.5-1.7-1.9-1.7-3.1 0-2.5 2.1-5.5 6.3-5.5 3.4 0 5.6 2.4 5.6 5 0 3.5-1.9 6.1-4.8 6.1-1 0-1.9-.5-2.2-1.1l-.6 2.4c-.2.8-.7 1.7-1 2.3.8.2 1.6.4 2.4.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>
  ) },
  dzen: { name: 'Дзен', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true"><text x="12" y="15.5" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="currentColor" fontFamily="inherit">Дзен</text></svg>
  ) },
  rutube: { name: 'Rutube', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true"><text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="800" fill="currentColor" fontFamily="inherit">RT</text></svg>
  ) },
  ok: { name: 'OK', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true"><text x="12" y="16" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="currentColor" fontFamily="inherit">OK</text></svg>
  ) },
};

// Profile screenshots used as proof. Each client links its own real screenshots;
// clients without screenshots simply omit `shots` and the proof strip is hidden.
const NOMOS_SHOTS = [
  { src: '/screens/clients/nomos_youtube.png', p: 'youtube', stat: '72,6К подписчиков', alt: 'YouTube-профиль NOMOS Clinic — 72,6К подписчиков, 523 видео' },
  { src: '/screens/clients/nomos_tiktok.png', p: 'tiktok', stat: '161,9К подписчиков', alt: 'TikTok-профиль NOMOS Clinic — 161,9К подписчиков, 2,2M лайков' },
  { src: '/screens/clients/nomos_vk.png', p: 'vk', stat: '23,9К подписчиков', alt: 'VK-профиль NOMOS Clinic — 23,9К подписчиков' },
];

const INMEDOS_SHOTS = [
  { src: '/screens/clients/inmedos_youtube.png', p: 'youtube', stat: '56,7К подписчиков', alt: 'YouTube-профиль Inmedos — 56,7К подписчиков' },
  { src: '/screens/clients/inmedos_instagram.png', p: 'instagram', stat: '52,1К подписчиков', alt: 'Instagram-профиль Inmedos — 52,1К подписчиков' },
  { src: '/screens/clients/inmedos_tiktok.png', p: 'tiktok', stat: '23,4К подписчиков', alt: 'TikTok-профиль Inmedos — 23,4К подписчиков' },
  { src: '/screens/clients/inmedos_dzen.png', p: 'dzen', stat: '4 688 подписчиков', alt: 'Дзен-профиль Inmedos — 4 688 подписчиков' },
  { src: '/screens/clients/inmedos_vk.png', p: 'vk', stat: '3 886 подписчиков', alt: 'VK-профиль Inmedos — 3 886 подписчиков' },
];

const INSTITUT_SHOTS = [
  { src: '/screens/clients/institut_youtube.png', p: 'youtube', stat: '56,6К подписчиков', alt: 'YouTube-профиль Института пластики — 56,6К подписчиков' },
  { src: '/screens/clients/institut_tiktok.png', p: 'tiktok', stat: '48,9К подписчиков', alt: 'TikTok-профиль Института пластики — 48,9К подписчиков' },
  { src: '/screens/clients/institut_vk.png', p: 'vk', stat: '11,9К подписчиков', alt: 'VK-профиль Института пластики — 11,9К подписчиков' },
  { src: '/screens/clients/institut_facebook.png', p: 'facebook', stat: '2 100 подписчиков', alt: 'Facebook-профиль Института пластики — 2 100 подписчиков' },
];

const KRISTINA_SHOTS = [
  { src: '/screens/clients/kristina_instagram.png', p: 'instagram', stat: '165К подписчиков', alt: 'Instagram-профиль Кристины Кузнецовой — 165К подписчиков' },
  { src: '/screens/clients/kristina_tiktok.png', p: 'tiktok', stat: '77,1К подписчиков', alt: 'TikTok-профиль Кристины Кузнецовой — 77,1К подписчиков' },
  { src: '/screens/clients/kristina_facebook.png', p: 'facebook', stat: '71К подписчиков', alt: 'Facebook-профиль Кристины Кузнецовой — 71К подписчиков' },
  { src: '/screens/clients/kristina_youtube.png', p: 'youtube', stat: '42,8К подписчиков', alt: 'YouTube-профиль Кристины Кузнецовой — 42,8К подписчиков' },
  { src: '/screens/clients/kristina_vk.png', p: 'vk', stat: '23,7К подписчиков', alt: 'VK-профиль Кристины Кузнецовой — 23,7К подписчиков' },
];

const VSESVOI_SHOTS = [
  { src: '/screens/clients/vsesvoi_tiktok.png', p: 'tiktok', stat: '19,3К подписчиков', alt: 'TikTok-профиль ВсеСвои — 19,3К подписчиков' },
  { src: '/screens/clients/vsesvoi_youtube.png', p: 'youtube', stat: '12,3К подписчиков', alt: 'YouTube-профиль ВсеСвои — 12,3К подписчиков' },
  { src: '/screens/clients/vsesvoi_pinterest.png', p: 'pinterest', stat: '20 подписчиков', alt: 'Pinterest-профиль ВсеСвои — 20 подписчиков' },
];

const VOLOS_SHOTS = [
  { src: '/screens/clients/volos_tiktok.png', p: 'tiktok', stat: '34,2К подписчиков', alt: 'TikTok-профиль Доктора Волос — 34,2К подписчиков' },
  { src: '/screens/clients/volos_youtube.png', p: 'youtube', stat: '4 380 подписчиков', alt: 'YouTube-профиль Доктора Волос — 4 380 подписчиков' },
];

const MEDTIME_SHOTS = [
  { src: '/screens/clients/medtime_tiktok.png', p: 'tiktok', stat: '5 591 подписчик', alt: 'TikTok-профиль Медтайм — 5 591 подписчик' },
  { src: '/screens/clients/medtime_youtube.png', p: 'youtube', stat: '3 600 подписчиков', alt: 'YouTube-профиль Медтайм — 3 600 подписчиков' },
  { src: '/screens/clients/medtime_vk.png', p: 'vk', stat: '687 подписчиков', alt: 'VK-профиль Медтайм — 687 подписчиков' },
];

const ROKSANA_SHOTS = [
  { src: '/screens/clients/roksana_instagram.png', p: 'instagram', stat: '30,8К подписчиков', alt: 'Instagram-профиль Роксаны — 30,8К подписчиков' },
  { src: '/screens/clients/roksana_youtube.png', p: 'youtube', stat: '707 подписчиков', alt: 'YouTube-профиль Роксаны — 707 подписчиков' },
  { src: '/screens/clients/roksana_tiktok.png', p: 'tiktok', stat: '235 подписчиков', alt: 'TikTok-профиль Роксаны — 235 подписчиков' },
];

const SUZAN_SHOTS = [
  { src: '/screens/clients/suzan_instagram.png', p: 'instagram', stat: '22,3К подписчиков', alt: 'Instagram-профиль Сюзан — 22,3К подписчиков' },
  { src: '/screens/clients/suzan_tiktok.png', p: 'tiktok', stat: '4 912 подписчиков', alt: 'TikTok-профиль Сюзан — 4 912 подписчиков' },
  { src: '/screens/clients/suzan_facebook.png', p: 'facebook', stat: '4 000 подписчиков', alt: 'Facebook-профиль Сюзан — 4 000 подписчиков' },
  { src: '/screens/clients/suzan_youtube.png', p: 'youtube', stat: '99 подписчиков', alt: 'YouTube-профиль Сюзан — 99 подписчиков' },
];

// All clients. Real numbers from the clients' tracking sheets (totals as of 24.06.2026;
// `month` = growth over the tracked period; `spark` = daily series, scaled per-card).
// `shots` carry each client's own real profile screenshots; clients without them omit it.
const CLIENTS = [
  {
    key: 'nomos', featured: true,
    perDay: 6667, perMonth: 47728, videos: 523,
    shots: NOMOS_SHOTS,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/nomos_clinic' },
      { p: 'youtube', url: 'https://www.youtube.com/@nomos_clinic' },
      { p: 'tiktok', url: 'http://www.tiktok.com/@nomos_clinic' },
      { p: 'vk', url: 'https://vk.com/nomos.clinic' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61590307941723' },
      { p: 'pinterest', url: 'https://pin.it/6eOApjNJk' },
    ],
    platforms: [
      { p: 'instagram', now: 242000, month: 29000, url: 'https://www.instagram.com/nomos_clinic', spark: [213, 214.1, 214.8, 215, 216, 217, 218, 220, 226, 227, 227, 228, 233, 234, 237, 238, 242] },
      { p: 'tiktok', now: 163400, month: 7900, url: 'http://www.tiktok.com/@nomos_clinic', spark: [155.5, 155.8, 156, 156.4, 157.4, 157.7, 158.1, 158.3, 158.1, 160.1, 160.4, 160.6, 161.5, 161.8, 162.1, 162.4, 163.4] },
      { p: 'youtube', now: 73600, month: 5000, url: 'https://www.youtube.com/@nomos_clinic', spark: [68.6, 68.7, 68.9, 69.1, 69.5, 69.6, 69.8, 70, 71, 71.1, 71.4, 71.6, 72.4, 72.5, 72.7, 72.9, 73.6] },
      { p: 'vk', now: 24478, month: 2493, url: 'https://vk.com/nomos.clinic', spark: [22, 22, 22.1, 22.1, 22.3, 22.4, 22.5, 22.6, 23.1, 23.1, 23.2, 23.2, 23.7, 23.8, 24, 24.1, 24.5] },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61590307941723', now: 3200, month: 3196, spark: [4, 5, 5, 5, 5, 14, 811, 1100, 1800, 1900, 1900, 1900, 2200, 2400, 2500, 2600, 3200] },
      { p: 'pinterest', url: 'https://pin.it/6eOApjNJk', now: 1000, month: 139, spark: [861, 879, 890, 900, 922, 928, 934, 939, 960, 964, 970, 972, 995, 999, 1000, 1000, 1000] },
      // Small networks — shown as cards (no link, no chart) so the total adds up.
      { p: 'rutube', now: 10 },
      { p: 'ok', now: 5 },
    ],
  },
  {
    key: 'institut',
    perDay: 499, perMonth: 4826,
    shots: INSTITUT_SHOTS,
    socials: [
      // Instagram omitted on purpose — the account is defunct (no working profile), so no chip/link.
      { p: 'youtube', url: 'https://www.youtube.com/@institut.plastiki' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@institut_plastiki1' },
      { p: 'vk', url: 'https://vk.com/institut.plastiki' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61582031501878' },
      { p: 'pinterest', url: 'https://pin.it/2b3p129Ky' },
    ],
    platforms: [
      { p: 'youtube', now: 56700, month: 300, url: 'https://www.youtube.com/@institut.plastiki', spark: [56.4, 56.4, 56.4, 56.4, 56.5, 56.5, 56.5, 56.5, 56.6, 56.6, 56.6, 56.6, 56.6, 56.6, 56.6, 56.7, 56.7] },
      { p: 'tiktok', now: 49000, month: 700, url: 'https://www.tiktok.com/@institut_plastiki1', spark: [48.3, 48.3, 48.3, 48.3, 48.4, 48.6, 48.6, 48.7, 48.8, 48.8, 48.8, 48.8, 48.9, 48.9, 48.9, 48.9, 49] },
      // Instagram: real 41К from the sheet's total row. The account is defunct, so no url (not clickable) and no spark (no growth chart) — the tile still shows because it has an audience.
      { p: 'instagram', now: 41000 },
      { p: 'vk', now: 12040, month: 1317, url: 'https://vk.com/institut.plastiki', spark: [10723, 10770, 10841, 10927, 11060, 11109, 11152, 11181, 11500, 11499, 11559, 11559, 11833, 11880, 11914, 11952, 12040] },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61582031501878', now: 3800, month: 2500, spark: [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 2.1, 2.9, 3.4, 3.8] },
      { p: 'pinterest', url: 'https://pin.it/2b3p129Ky', now: 160, month: 9, spark: [151, 152, 153, 154, 154, 154, 154, 155, 158, 158, 158, 158, 160, 160, 160, 160, 160] },
      // Small networks — shown as cards (no link, no chart) so the total adds up.
      { p: 'rutube', now: 2 },
      { p: 'ok', now: 2 },
    ],
  },
  {
    key: 'kristina',
    perDay: 1337, perMonth: 55982,
    shots: KRISTINA_SHOTS,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/kristina_genetic' },
      { p: 'youtube', url: 'https://youtube.com/channel/UCV2Hwj4xKe5XMd118lhyIZg' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@kuznetsova_genetic' },
      { p: 'vk', url: 'https://vk.com/krisrina_kuznetsova' },
      { p: 'facebook', url: 'https://www.facebook.com/share/1Ah2KYmt7e/' },
    ],
    platforms: [
      { p: 'instagram', now: 170000, month: 23000, url: 'https://www.instagram.com/kristina_genetic', spark: [147, 148.1, 148.6, 149, 149, 150, 151, 151, 159, 160, 161, 162, 164, 165, 167, 168, 170] },
      { p: 'tiktok', now: 77900, month: 21100, url: 'https://www.tiktok.com/@kuznetsova_genetic', spark: [56.8, 59.8, 63.7, 65, 66.7, 67.6, 68.8, 69.4, 74.1, 74.6, 75.2, 75.6, 76.9, 77.1, 77.3, 77.4, 77.9] },
      { p: 'facebook', now: 72000, month: 8000, url: 'https://www.facebook.com/share/1Ah2KYmt7e/', spark: [64, 64, 64, 64, 65, 65, 65, 65, 69, 69, 70, 70, 71, 71, 71, 71, 72] },
      { p: 'youtube', now: 43300, month: 1900, url: 'https://youtube.com/channel/UCV2Hwj4xKe5XMd118lhyIZg', spark: [41.4, 41.4, 41.5, 41.5, 41.8, 41.9, 41.9, 42, 42.3, 42.3, 42.4, 42.5, 42.8, 42.8, 43, 43.2, 43.3] },
      { p: 'vk', now: 24324, month: 8262, url: 'https://vk.com/krisrina_kuznetsova', spark: [16062, 16248, 16503, 16739, 17664, 18126, 18418, 18818, 21806, 22180, 22519, 22519, 23565, 23692, 23855, 23968, 24324] },
      // Дзен — no public profile link to hand yet, so no url (card shows the count + chart, not clickable).
      { p: 'dzen', now: 750, month: 557, spark: [193, 197, 205, 212, 265, 297, 325, 350, 506, 521, 541, 562, 670, 681, 696, 712, 750] },
    ],
  },
  {
    key: 'vsesvoi',
    perDay: 200, perMonth: 3591,
    shots: VSESVOI_SHOTS,
    socials: [
      // Instagram/Facebook dropped from chips — both flipped to 0 in June; counts are their peaks.
      { p: 'youtube', url: 'http://www.youtube.com/@svoi_stom' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@svoi_stom' },
      { p: 'pinterest', url: 'https://www.pinterest.com/vse_svoi/' },
    ],
    platforms: [
      // Instagram & Facebook tracking dropped to 0 — keep the peaks they reached, no url/spark.
      { p: 'instagram', now: 33200 },
      { p: 'tiktok', url: 'https://www.tiktok.com/@svoi_stom', now: 19300, month: 1900, spark: [17.4, 17.5, 17.7, 17.8, 17.8, 17.9, 18, 18, 18.2, 18.3, 18.3, 18.4, 18.7, 18.9, 19, 19.1, 19.3] },
      { p: 'youtube', now: 12300, month: 2200, url: 'http://www.youtube.com/@svoi_stom', spark: [10.1, 10.1, 10.2, 10.3, 11.1, 11.2, 11.2, 11.3, 11.7, 11.7, 11.7, 11.8, 11.9, 11.9, 11.9, 12, 12.3] },
      { p: 'facebook', now: 7900 },
      { p: 'pinterest', url: 'https://www.pinterest.com/vse_svoi/', now: 20, month: 4, spark: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 19, 19, 20, 20, 20] },
      { p: 'vk', now: 3 },
      { p: 'ok', now: 3 },
    ],
  },
  {
    key: 'volos',
    perDay: 110, perMonth: 21690,
    shots: VOLOS_SHOTS,
    socials: [
      // Instagram dropped from chips — flipped to 0 in June; count is its peak.
      { p: 'youtube', url: 'https://www.youtube.com/channel/UCzUN-L0o_ZHKlDLpxo4oMKQ' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@doctor__volos' },
    ],
    platforms: [
      { p: 'tiktok', now: 34200, month: 22200, url: 'https://www.tiktok.com/@doctor__volos', spark: [12, 12, 12.6, 17.1, 22.6, 24.3, 25.3, 25.9, 28.8, 29.5, 30.5, 31.7, 32.7, 32.8, 32.9, 33.2, 34.2] },
      // Facebook tracking dropped to 0 mid-June — keep the peak it reached (34 000), no url/spark.
      { p: 'facebook', now: 34000 },
      { p: 'youtube', now: 4380, month: 660, url: 'https://www.youtube.com/channel/UCzUN-L0o_ZHKlDLpxo4oMKQ', spark: [3.72, 3.72, 3.72, 3.81, 3.97, 4.07, 4.13, 4.19, 4.3, 4.33, 4.35, 4.36, 4.37, 4.38, 4.38, 4.38, 4.38] },
      // Instagram tracking dropped to 0 — keep its peak (15), no url/spark.
      { p: 'instagram', now: 15 },
    ],
  },
  // Clients with profile links only (no tracking data yet) — render as link tiles.
  {
    key: 'inmedos',
    perDay: 526, perMonth: 12300,
    shots: INMEDOS_SHOTS,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/inmedos.samara' },
      { p: 'instagram', url: 'https://www.instagram.com/inmedos' },
      { p: 'youtube', url: 'https://youtube.com/channel/UCtjCcNl8gGOCTNYUaiaZkGQ' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@inmedos' },
      { p: 'dzen', url: 'https://dzen.ru/inmedos' },
      { p: 'vk', url: 'https://vk.com/inmedos' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61582213604312' },
      { p: 'ok', url: 'https://ok.ru/inmedos' },
    ],
    platforms: [
      { p: 'youtube', now: 58700, month: 5900, url: 'https://youtube.com/channel/UCtjCcNl8gGOCTNYUaiaZkGQ', spark: [52.8, 53, 53.1, 53.3, 53.7, 54.2, 54.5, 54.7, 55.7, 55.8, 56, 56, 56.6, 56.7, 56.9, 57.1, 58.7] },
      { p: 'instagram', now: 53900, month: 8500, url: 'https://www.instagram.com/inmedos', spark: [45.4, 45.7, 45.9, 46.1, 46.9, 47, 47.2, 47.4, 48.7, 48.9, 49.1, 49.4, 51.7, 52.1, 52.4, 52.6, 53.9] },
      // 2nd Instagram (Самара) — tracking dropped out mid-June (red 0s), so no spark; count from the "Общее" row.
      { p: 'instagram', now: 46400, month: 500, label: 'Instagram · Самара', url: 'https://www.instagram.com/inmedos.samara' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@inmedos', now: 23500, month: 600, spark: [22.9, 22.9, 23, 23, 23, 23.1, 23.1, 23.1, 23.3, 23.3, 23.3, 23.3, 23.4, 23.4, 23.5, 23.5, 23.5] },
      { p: 'dzen', url: 'https://dzen.ru/inmedos', now: 4754, month: 409, spark: [4345, 4380, 4406, 4431, 4478, 4511, 4528, 4541, 4610, 4616, 4631, 4642, 4676, 4688, 4700, 4723, 4754] },
      { p: 'vk', url: 'https://vk.com/inmedos', now: 3886, month: 65, spark: [3821, 3833, 3839, 3842, 3862, 3864, 3869, 3871, 3876, 3877, 3877, 3877, 3877, 3886, 3885, 3886, 3886] },
      // OK is slowly declining (−99 last period), so no growth badge; the chart shows the trend.
      { p: 'ok', url: 'https://ok.ru/inmedos', now: 1300, spark: [1401, 1401, 1401, 1401, 1401, 1401, 1401, 1400, 1399, 1399, 1399, 1399, 1399, 1399, 1399, 1399, 1300] },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61582213604312', now: 266, month: 263, spark: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 85, 89, 91, 103, 266] },
      { p: 'rutube', now: 8 },
    ],
  },
  {
    key: 'suzan',
    perDay: 344, perMonth: 3300,
    shots: SUZAN_SHOTS,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/suzi_mamedli' },
      { p: 'youtube', url: 'https://www.youtube.com/channel/UCRlAKcgxXvjLEv16Kr-9RVg' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@susangin11' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61582123865351' },
    ],
    platforms: [
      { p: 'instagram', now: 22300, month: 4000, url: 'https://www.instagram.com/suzi_mamedli', spark: [18.3, 18.4, 18.526, 18.62, 18.8, 18.9, 18.9, 19, 19.8, 19.9, 20, 20, 20.5, 20.8, 21.2, 21.5, 22.3] },
      { p: 'tiktok', url: 'https://www.tiktok.com/@susangin11', now: 4912 },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61582123865351', now: 4000, month: 500, spark: [3.5, 3.5, 3.5, 3.5, 3.5, 3.6, 3.6, 3.6, 3.7, 3.7, 3.8, 3.8, 4, 4, 4, 4, 4] },
      { p: 'youtube', now: 99, url: 'https://www.youtube.com/channel/UCRlAKcgxXvjLEv16Kr-9RVg' },
      { p: 'vk', now: 8 },
      { p: 'pinterest', now: 2 },
      { p: 'ok', now: 1 },
    ],
  },
  {
    key: 'medtime',
    perDay: 225, perMonth: 9100,
    shots: MEDTIME_SHOTS,
    socials: [
      // Instagram dropped from chips — flipped to 0 in June; count is its peak.
      { p: 'youtube', url: 'https://www.youtube.com/@medplus.clinic' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@medplus_clinic' },
      { p: 'vk', url: 'https://vk.com/club236969759' },
    ],
    platforms: [
      // Instagram tracking dropped to 0 — keep the peak it reached (15 500), no url/spark.
      { p: 'instagram', now: 15500 },
      { p: 'tiktok', url: 'https://www.tiktok.com/@medplus_clinic', now: 5591, month: 1826, spark: [3.765, 3.802, 3.806, 3.971, 4.104, 4.125, 4.147, 4.159, 4.593, 4.605, 4.644, 4.672, 5.05, 5.16, 5.373, 5.469, 5.591] },
      { p: 'youtube', now: 3600, month: 1240, url: 'https://www.youtube.com/@medplus.clinic', spark: [2.36, 2.39, 2.41, 2.41, 2.5, 2.55, 2.57, 2.57, 2.701, 2.73, 2.76, 2.78, 3.24, 3.34, 3.46, 3.52, 3.6] },
      { p: 'vk', url: 'https://vk.com/club236969759', now: 687, month: 122, spark: [565, 572, 572, 575, 583, 589, 593, 595, 606, 608, 609, 612, 647, 662, 668, 672, 687] },
    ],
  },
  {
    key: 'improv',
    perDay: 505, perMonth: 5100,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/improvstudio.ru' },
      { p: 'youtube', url: 'https://www.youtube.com/channel/UC8Lu2zl3YsNEFFnFtm5DZ4Q' },
      { p: 'vk', url: 'https://vk.com/improvstudio' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@improvstudio_moscow' },
    ],
    platforms: [
      { p: 'instagram', now: 9605, month: 6268, url: 'https://www.instagram.com/improvstudio.ru', spark: [3337, 3584, 3712, 3943, 3979, 4011, 4046, 4220, 4245, 4363, 4804, 7742, 8047, 8247, 9056, 9605] },
      { p: 'vk', url: 'https://vk.com/improvstudio', now: 8501, month: 11, spark: [8490, 8489, 8489, 8489, 8489, 8489, 8489, 8489, 8492, 8492, 8492, 8492, 8493, 8491, 8493, 8494, 8501] },
      { p: 'tiktok', url: 'https://www.tiktok.com/@improvstudio_moscow', now: 347, month: 41, spark: [306, 315, 315, 317, 320, 321, 323, 324, 330, 333, 334, 335, 339, 341, 343, 344, 347] },
      { p: 'youtube', now: 85, month: 19, url: 'https://www.youtube.com/channel/UC8Lu2zl3YsNEFFnFtm5DZ4Q', spark: [66, 69, 70, 74, 78, 81, 81, 82, 84, 84, 84, 85, 85, 85, 85, 85, 85] },
    ],
  },
  {
    key: 'salano',
    perDay: 13, perMonth: 250,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/salano_russia' },
      { p: 'youtube', url: 'https://www.youtube.com/@salano_russia' },
      { p: 'vk', url: 'https://vk.ru/salano_russia' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@salano_russia' },
    ],
    platforms: [
      { p: 'vk', url: 'https://vk.ru/salano_russia', now: 3472, month: 24, spark: [3448, 3449, 3449, 3449, 3453, 3453, 3453, 3453, 3453, 3453, 3454, 3455, 3457, 3459, 3465, 3466, 3472] },
      { p: 'youtube', now: 2300, url: 'https://www.youtube.com/@salano_russia' },
      { p: 'instagram', now: 1636, month: 299, url: 'https://www.instagram.com/salano_russia', spark: [1.337, 1.345, 1.345, 1.358, 1.371, 1.378, 1.391, 1.4, 1.452, 1.46, 1.486, 1.502, 1.545, 1.556, 1.575, 1.594, 1.636] },
      { p: 'rutube', now: 49 },
      { p: 'dzen', url: 'https://dzen.ru/salano', now: 37 },
      { p: 'tiktok', url: 'https://www.tiktok.com/@salano_russia', now: 13 },
    ],
  },
  {
    key: 'roksana',
    perDay: 14, perMonth: 1720,
    shots: ROKSANA_SHOTS,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/dr.roksana' },
      { p: 'youtube', url: 'https://youtube.com/@dr.roksana.1' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@doctor_roksana' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=100071604780372' },
    ],
    platforms: [
      { p: 'instagram', now: 30800, month: 1500, url: 'https://www.instagram.com/dr.roksana', spark: [29.3, 29.3, 29.436, 29.522, 29.8, 29.9, 29.9, 30, 30.3, 30.3, 30.4, 30.4, 30.6, 30.6, 30.7, 30.7, 30.8] },
      { p: 'youtube', now: 707, month: 132, url: 'https://youtube.com/@dr.roksana.1', spark: [575, 595, 604, 608, 608, 608, 608, 610, 642, 657, 668, 671, 681, 686, 689, 691, 707] },
      { p: 'tiktok', url: 'https://www.tiktok.com/@doctor_roksana', now: 235, month: 223, spark: [12, 13, 17, 16, 17, 30, 54, 88, 147, 150, 160, 167, 185, 194, 195, 202, 235] },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=100071604780372', now: 5, month: 2 },
    ],
  },
  {
    key: 'iphonika',
    perDay: 0, perMonth: 110,
    socials: [
      // Instagram dropped from chips — tracking keeps falling to 0; the count is its historical peak.
      { p: 'youtube', url: 'https://www.youtube.com/channel/UCkH_eakKd47O3TvuQq9aH7g' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@iphonika_msk0' },
      { p: 'vk', url: 'https://vk.com/club238621466' },
    ],
    platforms: [
      // Instagram tracking flips to 0 — keep the peak it reached (4175), no url/spark.
      { p: 'instagram', now: 4175 },
      { p: 'tiktok', url: 'https://www.tiktok.com/@iphonika_msk0', now: 823, spark: [836, 835, 834, 833, 834, 833, 832, 832, 826, 827, 827, 828, 826, 826, 825, 824, 823] },
      { p: 'vk', url: 'https://vk.com/club238621466', now: 245, month: 81, spark: [164, 166, 168, 181, 202, 211, 217, 217, 228, 231, 231, 231, 241, 243, 243, 244, 245] },
      { p: 'youtube', now: 222, month: 25, url: 'https://www.youtube.com/channel/UCkH_eakKd47O3TvuQq9aH7g', spark: [197, 198, 204, 206, 215, 216, 217, 217, 221, 222, 222, 222, 223, 223, 223, 223, 222] },
    ],
  },
  {
    key: 'vsesvoispb',
    perDay: 10, perMonth: 190,
    socials: [
      // Instagram dropped from chips — flipped to 0 in June; count is its peak.
      { p: 'youtube', url: 'https://www.youtube.com/@Vsesvoispb' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@vse.svoi.spb' },
      { p: 'vk', url: 'https://vk.com/club238622457' },
    ],
    platforms: [
      // Instagram tracking dropped to 0 — keep the peak it reached (864), no url/spark.
      { p: 'instagram', now: 864 },
      { p: 'tiktok', url: 'https://www.tiktok.com/@vse.svoi.spb', now: 277, month: 214, spark: [63, 63, 67, 71, 84, 91, 98, 102, 148, 153, 159, 161, 185, 190, 197, 200, 277] },
      { p: 'youtube', now: 96, month: 74, url: 'https://www.youtube.com/@Vsesvoispb', spark: [22, 28, 30, 32, 40, 44, 45, 44, 60, 62, 63, 66, 74, 77, 84, 84, 96] },
      { p: 'vk', url: 'https://vk.com/club238622457', now: 3 },
    ],
  },
  {
    key: 'vsesvoikrd',
    perDay: 2, perMonth: 170,
    socials: [
      // Instagram dropped from chips — flipped to 0 in June; count is its peak.
      { p: 'youtube', url: 'https://youtube.com/@vsesvoikrd' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@vse.svoi.krd' },
      { p: 'vk', url: 'https://vk.com/club238709352' },
    ],
    platforms: [
      // Instagram tracking dropped to 0 — keep the peak it reached (1280), no url/spark.
      { p: 'instagram', now: 1280 },
      { p: 'tiktok', url: 'https://www.tiktok.com/@vse.svoi.krd', now: 501, month: 472, spark: [0, 0, 0, 0, 0, 29, 30, 30, 107, 107, 130, 135, 140, 141, 142, 344, 501] },
      { p: 'youtube', now: 83, month: 68, url: 'https://youtube.com/@vsesvoikrd', spark: [15, 18, 20, 22, 33, 34, 34, 34, 46, 48, 53, 57, 60, 60, 62, 83] },
      { p: 'vk', url: 'https://vk.com/club238709352', now: 5 },
    ],
  },
  {
    key: 'wilstreamru',
    perDay: 4, perMonth: 100,
    socials: [
      // Instagram & YouTube dropped from chips — both flipped to 0 in June; YouTube count is its peak.
      { p: 'dzen', url: 'https://dzen.ru/wilstream' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61590313226223' },
      { p: 'vk', url: 'https://vk.com/wilstream_ru' },
    ],
    platforms: [
      { p: 'dzen', url: 'https://dzen.ru/wilstream', now: 247, month: 68, spark: [179, 181, 180, 180, 185, 188, 189, 194, 217, 220, 225, 229, 242, 245, 245, 247, 247] },
      // YouTube tracking dropped to 0 — keep the peak it reached (20), no url/spark.
      { p: 'youtube', now: 20 },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61590313226223', now: 4 },
      { p: 'vk', url: 'https://vk.com/wilstream_ru', now: 4 },
    ],
  },
  {
    key: 'wilstreamaz',
    perDay: 0, perMonth: 20,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/wilstream.az' },
      { p: 'youtube', url: 'https://youtube.com/@wilstreamaz' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@wilstreamaz' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61590339087808' },
    ],
    platforms: [
      { p: 'youtube', now: 15, month: 14, url: 'https://youtube.com/@wilstreamaz', spark: [1, 1, 1, 1, 3, 4, 4, 4, 14, 15, 15, 15, 15, 15, 15, 15, 15] },
      { p: 'tiktok', url: 'https://www.tiktok.com/@wilstreamaz', now: 6, month: 1 },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61590339087808', now: 4 },
    ],
  },
  {
    key: 'evyx',
    perDay: 0, perMonth: 17,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/evyx_ai' },
      { p: 'youtube', url: 'https://www.youtube.com/channel/UCI_VQqnMWhRoxIHwFXLXhnw' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@evyxai' },
      { p: 'vk', url: 'https://vk.com/Evyxaaiai' },
    ],
    platforms: [
      { p: 'youtube', now: 22, month: 13, url: 'https://www.youtube.com/channel/UCI_VQqnMWhRoxIHwFXLXhnw', spark: [9, 10, 10, 10, 12, 12, 12, 12, 15, 16, 17, 17, 18, 18, 18, 18, 22] },
      { p: 'tiktok', url: 'https://www.tiktok.com/@evyxai', now: 5, month: 3, spark: [2, 2, 2, 2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5] },
      { p: 'vk', url: 'https://vk.com/Evyxaaiai', now: 5, month: 4, spark: [1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 5, 5] },
      { p: 'instagram', now: 1, url: 'https://www.instagram.com/evyx_ai' },
    ],
  },
  {
    key: 'deonisiy',
    perDay: 8, perMonth: 134,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/deonisiy_otec' },
      { p: 'youtube', url: 'https://youtube.com/channel/UCLjvRmkxKQokZeAT_XxFxsQ' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61590725611907' },
      { p: 'vk', url: 'https://vk.com/club239439969' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@father_deonisius_' },
    ],
    platforms: [
      { p: 'youtube', now: 104, month: 41, url: 'https://youtube.com/channel/UCLjvRmkxKQokZeAT_XxFxsQ', spark: [63, 82, 103, 103, 103, 103, 104] },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61590725611907', now: 14, month: 11, spark: [3, 6, 8, 15, 14, 14, 14, 14, 14] },
      { p: 'vk', url: 'https://vk.com/club239439969', now: 9, month: 9, spark: [0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 9, 9] },
      { p: 'tiktok', url: 'https://www.tiktok.com/@father_deonisius_', now: 7, month: 7 },
    ],
  },
  {
    key: 'diana',
    perDay: 1, perMonth: 418,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/dr.diana_viktorovna' },
      { p: 'youtube', url: 'https://www.youtube.com/@dr.diana_viktorovna' },
      { p: 'facebook', url: 'https://www.facebook.com/share/1BUSaK53oR/' },
      { p: 'vk', url: 'https://vk.com/club239565353' },
    ],
    platforms: [
      { p: 'instagram', now: 17800, month: 400, url: 'https://www.instagram.com/dr.diana_viktorovna', spark: [17.4, 17.4, 17.4, 17.8, 17.8, 17.8, 17.8, 17.8, 17.8] },
      { p: 'facebook', url: 'https://www.facebook.com/share/1BUSaK53oR/', now: 106, month: 4, spark: [102, 103, 104, 104, 105, 105, 105, 106, 106] },
      { p: 'youtube', now: 31, month: 29, url: 'https://www.youtube.com/@dr.diana_viktorovna', spark: [2, 4, 4, 6, 17, 17, 17, 26, 31] },
      { p: 'vk', url: 'https://vk.com/club239565353', now: 3 },
    ],
  },
  {
    key: 'luminova',
    perDay: 92, perMonth: 737,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/luminova.spb' },
      { p: 'youtube', url: 'https://youtube.com/@luminova-spb' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@luminovaspb' },
      { p: 'vk', url: 'https://vk.com/club235661784' },
    ],
    platforms: [
      { p: 'tiktok', url: 'https://www.tiktok.com/@luminovaspb', now: 713, month: 90, spark: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 623, 678, 713] },
      { p: 'instagram', now: 37, month: 2, url: 'https://www.instagram.com/luminova.spb' },
      { p: 'youtube', now: 21, month: 7, url: 'https://youtube.com/@luminova-spb' },
      { p: 'vk', url: 'https://vk.com/club235661784', now: 4 },
    ],
  },
  {
    key: 'fullskin',
    perDay: 2, perMonth: 9,
    socials: [
      { p: 'instagram', url: 'https://www.instagram.com/fullskin_ru' },
      { p: 'youtube', url: 'https://www.youtube.com/@FullSkinru' },
      { p: 'tiktok', url: 'https://www.tiktok.com/@fullskin.ru' },
      { p: 'vk', url: 'https://vk.com/club239780618' },
      { p: 'facebook', url: 'https://www.facebook.com/profile.php?id=61591246051841' },
    ],
    platforms: [
      { p: 'youtube', now: 12, month: 10, url: 'https://www.youtube.com/@FullSkinru', spark: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 4, 12] },
      { p: 'vk', url: 'https://vk.com/club239780618', now: 2 },
      { p: 'tiktok', url: 'https://www.tiktok.com/@fullskin.ru', now: 1 },
    ],
  },
];

// Platforms with ≤10 followers are noise — hidden from the dashboard AND excluded from
// the total, so the headline number always equals the sum of the visible cards.
const MIN_AUDIENCE = 10;
const audiencePlatforms = (platforms = []) => platforms.filter((p) => (p.now || 0) > MIN_AUDIENCE);

CLIENTS.forEach((c) => {
  c.total = audiencePlatforms(c.platforms).reduce((sum, p) => sum + (p.now || 0), 0);
});

const COLS = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
};

// Rolls up from `start` to `target` shortly after mount; with `live`, keeps ticking
// up to feel alive. Cancels its rAF/timer on cleanup and honours reduced-motion.
function LiveCounter({ target, start = 0, live = false, locale, className = '' }) {
  const [val, setVal] = useState(start);

  useEffect(() => {
    const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVal(target); return; }
    const t0 = Date.now();
    let liveTimer;
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - t0) / 1600);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(start + (target - start) * eased));
      if (t >= 1) {
        clearInterval(id);
        if (live) {
          const tick = () => { setVal((v) => v + 1); liveTimer = setTimeout(tick, 5000 + Math.random() * 4000); };
          liveTimer = setTimeout(tick, 5000 + Math.random() * 4000);
        }
      }
    }, 40);
    return () => { clearInterval(id); clearTimeout(liveTimer); };
  }, [target, start, live]);

  return <span className={`tabular-nums ${className}`}>{val.toLocaleString(locale)}</span>;
}

function Spark({ data, className = '' }) {
  const w = 100, h = 28;
  const min = Math.min(...data), max = Math.max(...data), span = (max - min) || 1;
  const pts = data.map((v, i) => `${((i / (data.length - 1)) * w).toFixed(1)},${(h - ((v - min) / span) * h).toFixed(1)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className} fill="none" aria-hidden="true">
      <polyline points={pts} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function PlatformStat({ data, locale, monthLabel }) {
  const meta = PLATFORM[data.p];
  const inner = (
    <>
      <div className="flex items-center gap-2">
        <span className="w-[18px] h-[18px] block text-ink">{meta.icon}</span>
        <span className="text-[12.5px] font-bold text-ink-soft">{data.label || meta.name}</span>
        {data.url && (
          <svg className="w-3.5 h-3.5 ml-auto text-ink-mute group-hover:text-mint-700 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
        )}
      </div>
      <div className="mt-2.5 text-[clamp(20px,2.4vw,26px)] font-extrabold tracking-tight text-ink leading-none tabular-nums">
        {data.now.toLocaleString(locale)}
      </div>
      {data.month != null ? (
        <div className="mt-1.5 inline-flex items-center gap-1 text-[12px] font-bold text-mint-700">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><polyline points="7 7 17 7 17 17" /></svg>
          +{data.month.toLocaleString(locale)}
          <span className="text-ink-mute font-medium">{monthLabel}</span>
        </div>
      ) : (
        <div className="mt-1.5 text-[12px] text-ink-mute font-medium leading-none">·</div>
      )}
      {data.spark
        ? <Spark data={data.spark} className="mt-3 h-7 w-full text-mint-500/80" />
        : <div className="mt-3 h-7" aria-hidden="true" />}
    </>
  );
  return data.url ? (
    <a href={data.url} target="_blank" rel="noopener noreferrer" className="group block p-5 hover:bg-mint-50/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mint-500/40" aria-label={`${meta.name} — ${data.now.toLocaleString(locale)}`}>
      {inner}
    </a>
  ) : (
    <div className="p-5">{inner}</div>
  );
}

// Per-platform growth grid — reused by the featured card and every accordion client.
function ClientDashboard({ platforms, locale, monthLabel }) {
  // Show a card for every platform with a real audience (small networks without a growth
  // chart included; micro accounts ≤10 are dropped) so the tiles add up to the total.
  const shown = audiencePlatforms(platforms);
  // ≤6 cards → one row sized to fit; 7+ → 4-wide, but 3-wide when 4 would leave a lone
  // last cell (e.g. 9 → 3×3), so rows stay even with no big empty gaps.
  const n = shown.length;
  const colCls = n <= 6 ? (COLS[Math.max(2, n)] || COLS[6]) : COLS[n % 4 === 1 ? 3 : 4];
  return (
    <div className={`grid ${colCls} gap-px bg-line rounded-rlg overflow-hidden border border-line`}>
      {shown.map((d, i) => (
        <div key={(d.label || d.p) + i} className="bg-white"><PlatformStat data={d} locale={locale} monthLabel={monthLabel} /></div>
      ))}
    </div>
  );
}

// Proof screenshots. Each <img> loads even while hidden; a figure shows once its
// file loads, and the whole strip stays hidden until at least one is present.
function ProofGallery({ shots, className = '' }) {
  const [status, setStatus] = useState(() => shots.map(() => 'pending'));
  const set = (i, v) => setStatus((arr) => arr.map((s, k) => (k === i ? v : s)));
  const anyOk = status.some((s) => s === 'ok');
  return (
    <div className={className} style={anyOk ? undefined : { display: 'none' }}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {shots.map((s, i) => {
          const meta = PLATFORM[s.p];
          return (
            <figure key={s.src} className="m-0" style={status[i] === 'ok' ? undefined : { display: 'none' }}>
              <a href={s.src} target="_blank" rel="noopener noreferrer" title={s.alt} className="group block rounded-rxl border border-line overflow-hidden bg-white shadow-soft hover:shadow-soft-lg hover:border-mint-300 transition">
                <img src={s.src} alt={s.alt} className="block w-full aspect-[4/3] object-cover object-top" onLoad={() => set(i, 'ok')} onError={() => set(i, 'err')} />
                {meta && (
                  <figcaption className="px-4 py-3 border-t border-line text-[12.5px] font-bold text-ink">
                    {meta.name}{s.stat && <span className="text-ink-soft font-medium"> · {s.stat}</span>}
                  </figcaption>
                )}
              </a>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

// Small clickable social icon (Instagram / YouTube / …).
function SocialChip({ link, clientName }) {
  const meta = PLATFORM[link.p];
  if (!meta) return null;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${clientName} — ${meta.name}`}
      title={meta.name}
      className="w-8 h-8 rounded-[9px] bg-mint-50 text-mint-700 grid place-items-center hover:bg-mint-500 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/40"
    >
      <span className="w-[15px] h-[15px] block">{meta.icon}</span>
    </a>
  );
}

// A client tile in the compact grid. Shows social links always; clients that have
// tracking data also show their total audience and a "view stats" button (modal).
function ClientTile({ data, name, niche, locale, t, onOpen }) {
  const hasStats = data.total != null;
  const isNew = data.total != null && data.total < 1000;
  return (
    <div className="p-5 rounded-rxl border border-line bg-white hover:border-mint-300 hover:shadow-soft transition-all duration-300 flex flex-col">
      <div className="flex items-center gap-2">
        <div className="text-[15px] font-bold tracking-tight text-ink truncate min-w-0">{name}</div>
        {isNew && (
          <span className="shrink-0 inline-flex items-center rounded-full bg-mint-100 text-mint-700 text-[9px] font-extrabold uppercase tracking-[0.12em] px-2 py-0.5">{t('clients.cases.newBadge')}</span>
        )}
      </div>
      {niche && <div className="text-[10.5px] text-ink-mute uppercase tracking-[0.08em] mt-0.5 truncate">{niche}</div>}
      {hasStats && (
        <>
          <div className="mt-4 text-[clamp(20px,2.4vw,24px)] font-extrabold tracking-tight text-mint-700 leading-none tabular-nums">{data.total.toLocaleString(locale)}</div>
          <div className="text-[10px] text-ink-mute uppercase tracking-[0.08em] mt-1">{t('clients.cases.audienceLabel')}</div>
        </>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {(data.socials || []).map((s, i) => <SocialChip key={s.p + i} link={s} clientName={name} />)}
      </div>
      {hasStats && (
        <button
          type="button"
          onClick={onOpen}
          className="group mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-mint-700 hover:gap-2.5 transition-all self-start rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/40"
        >
          {t('clients.cases.viewStats')}
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
        </button>
      )}
    </div>
  );
}

// Client statistics in a modal — keeps the page short no matter how many clients.
function ClientModal({ client, name, niche, locale, t, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true" aria-label={name}>
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full sm:w-[min(920px,calc(100vw-3rem))] max-h-[92vh] sm:max-h-[85vh] bg-canvas rounded-t-r2xl sm:rounded-r2xl shadow-soft-xl overflow-hidden flex flex-col">
        <div className="flex items-center gap-4 p-5 sm:p-6 border-b border-line bg-white shrink-0">
          <div className="min-w-0 flex-1">
            <div className="text-[18px] font-extrabold tracking-tight text-ink truncate">{name}</div>
            {niche && <div className="text-[11.5px] text-ink-mute uppercase tracking-[0.08em] mt-0.5 truncate">{niche}</div>}
          </div>
          <div className="text-right shrink-0">
            <div className="text-[clamp(20px,3vw,26px)] font-extrabold tracking-tight text-mint-700 leading-none"><LiveCounter target={client.total} locale={locale} /></div>
            <div className="text-[10px] text-ink-mute uppercase tracking-[0.08em] mt-1">{t('clients.cases.audienceLabel')}</div>
          </div>
          <button type="button" onClick={onClose} aria-label={t('clients.cases.close')} className="w-9 h-9 rounded-[10px] border border-line grid place-items-center text-ink-soft hover:bg-mint-50 hover:text-ink transition shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/40">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
          </button>
        </div>
        <div className="overflow-y-auto p-5 sm:p-7">
          <ClientDashboard platforms={client.platforms} locale={locale} monthLabel={t('clients.cases.dashboard.perMonth')} />
          {client.shots?.length > 0 && (
            <ProofGallery className="mt-7" shots={client.shots} />
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

const FEATURED = CLIENTS.find((c) => c.featured);
// Other clients, ordered by total audience — largest to smallest.
const OTHER_CLIENTS = CLIENTS.filter((c) => !c.featured).sort((a, b) => (b.total ?? 0) - (a.total ?? 0));

export default function Clients() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('clients.meta.title');
  }, [t]);

  const REVIEWS = useMemo(() => getReviews(t), [t]);

  const dates = REVIEW_DATES[i18n.language] ?? REVIEW_DATES.ru;
  const TWITTER_CARDS = useMemo(() => REVIEWS.map((r, i) => ({
    initials: r.initials,
    username: r.name,
    handle: r.handle,
    content: r.text,
    date: dates[i] ?? dates[dates.length - 1],
  })), [REVIEWS, dates]);

  const numLocale = i18n.language === 'en' ? 'en-US' : 'ru-RU';
  const [activeKey, setActiveKey] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_LIMIT = 8;
  const visibleClients = showAll ? OTHER_CLIENTS : OTHER_CLIENTS.slice(0, VISIBLE_LIMIT);
  const activeClient = OTHER_CLIENTS.find((c) => c.key === activeKey) || null;

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[880px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              {t('clients.hero.titlePart1')} <em className="not-italic text-grad-mint">{t('clients.hero.titleEm')}</em> {t('clients.hero.titlePart2')}
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              {t('clients.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden" id="reviews">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('clients.reviews.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('clients.reviews.desc')}</p>
          </div>

          <TwitterTestimonials
            cards={TWITTER_CARDS}
            expandLabel={t('clients.reviews.expandLabel')}
            collapseLabel={t('clients.reviews.collapseLabel')}
          />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="cases">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('clients.cases.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('clients.cases.desc')}</p>
          </div>

          {/* Flagship growth case — NOMOS (always shown, full) */}
          <article className="reveal bg-white border border-line rounded-r2xl overflow-hidden shadow-soft">
            <div className="grid lg:grid-cols-[1.3fr_1fr]">
              <div className="p-9 lg:p-11">
                <h3 className="text-[clamp(22px,2.8vw,30px)] font-extrabold tracking-tight leading-tight mb-4">{t('clients.cases.featured.title')}</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed mb-6">{t('clients.cases.featured.desc')}</p>
                <ul className="list-none m-0 p-0 flex flex-col gap-2.5 list-check text-[14px] text-ink">
                  {[0, 1, 2, 3].map((i) => <li key={i}>{t(`clients.cases.featured.points.${i}`)}</li>)}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <LinkButton to="/#contact" size="md">
                    {t('clients.cases.featured.cta')}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
                  </LinkButton>
                  {FEATURED.socials && (
                    <div className="flex items-center gap-2">
                      {FEATURED.socials.map((s, i) => <SocialChip key={s.p + i} link={s} clientName="NOMOS Clinic" />)}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-mint-700 to-mint-800 text-white p-9 lg:p-11 flex flex-col justify-center overflow-hidden">
                <div className="absolute -top-24 -right-16 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.28),transparent_70%)]" aria-hidden="true" />
                <div className="relative">
                  <div className="text-[15px] font-extrabold tracking-tight">{t('clients.cases.list.nomos.name')}</div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-mint-200 font-bold mt-1 mb-4">{t('clients.cases.dashboard.totalLabel')}</div>
                  <div className="text-[clamp(40px,6.5vw,62px)] font-extrabold tracking-tight leading-none text-grad-price-white">
                    <LiveCounter target={FEATURED.total} start={FEATURED.total - FEATURED.perMonth} live locale={numLocale} />
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px]">
                    <span className="inline-flex items-center gap-1.5 font-bold text-mint-100">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-mint-300 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full w-2 h-2 bg-mint-300" />
                      </span>
                      +{FEATURED.perDay.toLocaleString(numLocale)} {t('clients.cases.dashboard.perDay')}
                    </span>
                    <span className="text-white/65">{FEATURED.videos} {t('clients.cases.dashboard.videos')}</span>
                  </div>
                  <div className="mt-2 text-[11.5px] text-white/55">{t('clients.cases.dashboard.live')}</div>
                </div>
              </div>
            </div>

            {/* Per-platform growth dashboard */}
            <div className="border-t border-line bg-mint-50/40 p-5 sm:p-7">
              <ClientDashboard platforms={FEATURED.platforms} locale={numLocale} monthLabel={t('clients.cases.dashboard.perMonth')} />
            </div>

            {/* Proof screenshots — attached to the card */}
            <ProofGallery className="border-t border-line p-6 sm:p-8" shots={FEATURED.shots} />
          </article>

          {/* Other clients — compact grid; a tile opens the stats modal */}
          <div className="reveal mt-16 mb-7 text-center">
            <h3 className="text-[clamp(20px,2.4vw,26px)] font-extrabold tracking-tight">{t('clients.cases.othersTitle')}</h3>
            <p className="text-[14.5px] text-ink-soft mt-2 max-w-[600px] mx-auto">{t('clients.cases.othersDesc')}</p>
          </div>

          <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {visibleClients.map((c) => (
              <ClientTile
                key={c.key}
                data={c}
                name={t(`clients.cases.list.${c.key}.name`)}
                niche={t(`clients.cases.list.${c.key}.niche`)}
                locale={numLocale}
                t={t}
                onOpen={() => setActiveKey(c.key)}
              />
            ))}
          </div>

          {OTHER_CLIENTS.length > VISIBLE_LIMIT && (
            <div className="reveal text-center mt-8">
              <Button variant="secondary" size="md" onClick={() => setShowAll((v) => !v)}>
                {showAll ? t('clients.cases.collapse') : t('clients.cases.showAll', { n: OTHER_CLIENTS.length })}
              </Button>
            </div>
          )}

          {activeClient && (
            <ClientModal
              client={activeClient}
              name={t(`clients.cases.list.${activeClient.key}.name`)}
              niche={t(`clients.cases.list.${activeClient.key}.niche`)}
              locale={numLocale}
              t={t}
              onClose={() => setActiveKey(null)}
            />
          )}
        </div>
      </section>
    </>
  );
}
