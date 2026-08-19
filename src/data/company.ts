/*
  Datos reales de la empresa (de CLAUDE.md / sitio actual). No inventar nada acá.
*/
export const company = {
  name: 'D.T. Flow Wrap Machines',
  tagline: 'Pack anything beautifully',
  founded: 2020,
  email: 'info@flow-wrap-machines.com',
  logo: 'https://flow-wrap-machines.com/wp-content/uploads/2025/09/Logo_DT-1536x412.jpg',
  /*
    Copia local del video del sitio actual. Se sirve desde public/ y no desde el
    servidor del cliente: el hotlink no carga en el navegador (protección de Cloudflare)
    y además un demo no debe depender de un origen que podemos no controlar.
  */
  heroVideo: '/media/hero.mp4',
  locations: [
    {
      key: 'hq',
      region: 'Ontario',
      address: '72 Stonechurch Rd. W. Unit #66',
      city: 'Hamilton, Ontario L9B 2H8',
      phone: '647 372-0005',
      phoneHref: '+16473720005',
    },
    {
      key: 'qc',
      region: 'Québec',
      address: '392 Dorval Ave. Suite #154',
      city: 'Dorval, QC H9S 3H7',
      phone: '514 703-3542',
      phoneHref: '+15147033542',
    },
    {
      key: 'usa',
      region: 'United States',
      address: '11320 U.S. 9 #102511',
      city: 'Champlain, NY 12919',
      phone: null,
      phoneHref: null,
    },
  ],
  socials: [
    { label: 'YouTube', href: 'https://youtube.com/@flowwrapmachines' },
    { label: 'Instagram', href: 'https://instagram.com/flow_wrap_machines' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@dtflowwrap' },
  ],
  /* Proof points para la stat bar — todos verificables en el sitio actual. */
  stats: [
    { value: '50+', label: 'machine models' },
    { value: '100,000', label: 'sq ft of facilities' },
    { value: 'CE', label: 'certified' },
    { value: '3', label: 'workshops' },
  ],
} as const;
