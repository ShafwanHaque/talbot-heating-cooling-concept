export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Talbot Heating & Cooling",
    shortName: "Talbot",
    logo: "/brand/company-logo.png",
    logoLight: "/brand/company-logo.png",
    region: "Montgomery · Central Alabama",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#00AFC4", "brandSecondary": "#F0442D", "brandAccent": "#107A91", "page": "#0C2029", "surfaceDark": "#07161D", "surfaceDarkAlt": "#102A34", "surfaceElevated": "#193B45", "surfaceSoft": "#F2F8F8", "textPrimary": "#F7FBFB", "textSecondary": "#D4E3E4", "textMuted": "#8FA6A9", "textOnBrand": "#FFFFFF", "borderSubtle": "#29454A", "borderStrong": "#69868A", "glowPrimary": "#00AFC4", "glowSecondary": "#F0442D", "networkLine": "#2BBBC8", "success": "#70A982", "service1": "#00AFC4", "service2": "#F0442D", "service3": "#1D8098", "service4": "#F1A63B", "service5": "#5677B7"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 334-300-8910",
    ctaLabel: "Request service",
    mobileEyebrow: "MONTGOMERY · CENTRAL ALABAMA",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "MONTGOMERY · CENTRAL ALABAMA",
    line1: "Talbot",
    line2: "Local comfort.",
    detail: "Talbot Heating & Cooling offers residential and light commercial maintenance, service, replacement, and indoor air quality work, with financing options for eligible repairs and replacements.",
    location: "Residential · light commercial",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "MONTGOMERY · CENTRAL ALABAMA · LOCAL HVAC",
    headlineLine1: "Expert service.",
    headlineLine2: "Renegade vision.",
    description: "Residential and light commercial heating and cooling, from preventive maintenance and repair to replacement and indoor air quality.",
    primaryCta: "Request service",
    secondaryCta: "Call Talbot",
    locationLabel: "MONTGOMERY · CENTRAL ALABAMA",
    locationValue: "Montgomery · Central Alabama",
    edgeLabel: "MONTGOMERY · CENTRAL ALABAMA",
    bottomStatement: "MAINTENANCE · SERVICE · REPLACEMENT · IAQ",
    sillLabel: "Residential · light commercial",
    serviceLabels: ["Maintenance", "Service", "Replacement"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "/hero/client-hero.png", "primaryAlt": "Talbot Heating & Cooling marked service truck and trailer at a residential job site", "primaryPosition": "center center", "fit": "cover", "backdrop": "matte", "aspectRatio": "820 / 312"},

  },

  seo: {
    title: "Talbot Heating & Cooling | HVAC Service in Montgomery",
    description: "Talbot Heating & Cooling offers residential and light commercial maintenance, service, replacement, and indoor air quality work, with financing options for eligible repairs and replacements.",

  },

  contact: {
    phoneDisplay: "334-300-8910",
    phoneHref: "tel:+13343008910",
    email: "",
    address: "Montgomery, AL",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "Residential · light commercial",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "Residential · light commercial",
    body: "Talbot Heating & Cooling centers its work on clear assessments, preventive maintenance, repair, replacement, and indoor air quality. The company also lists several financing options.",
    callLabel: "Call now",
    availabilityLabel: "Montgomery · Central Alabama",
    panelEyebrow: "TALBOT HEATING & COOLING",
    panelTitle: "Talbot Heating & Cooling centers its work on clear assessments, preventive maintenance, repair, replacement, and indoor air quality. The company also lists several financing options.",
    panelFooter: "Montgomery · Central Alabama",
    handoff: "Explore Talbot Heating & Cooling services.",
    items: [{"icon": "cooling", "label": "Preventive maintenance", "detail": "Seasonal service designed to keep heating and cooling equipment operating reliably."}, {"icon": "heating", "label": "Heating & cooling service", "detail": "A clear assessment when air conditioning or heat is not working as expected."}, {"icon": "maintenance", "label": "System replacement", "detail": "System replacement guidance with a true-cost calculation to help compare options."}],

  },

  services: {
    eyebrow: "TALBOT HEATING & COOLING · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "MONTGOMERY · CENTRAL ALABAMA",
    summaryTitle: "Talbot Heating & Cooling centers its work on clear assessments, preventive maintenance, repair, replacement, and indoor air quality. The company also lists several financing options.",
    summaryBody: "Talbot Heating & Cooling centers its work on clear assessments, preventive maintenance, repair, replacement, and indoor air quality. The company also lists several financing options.",
    summaryCta: "Talk to the team",
    items: [{"name": "Preventive maintenance", "shortName": "Maintenance", "image": "/services/01.svg", "description": "Seasonal service designed to keep heating and cooling equipment operating reliably."}, {"name": "Heating & cooling service", "shortName": "Service", "image": "/services/02.svg", "description": "A clear assessment when air conditioning or heat is not working as expected."}, {"name": "System replacement", "shortName": "Replacement", "image": "/services/03.svg", "description": "System replacement guidance with a true-cost calculation to help compare options."}, {"name": "Indoor air quality", "shortName": "Indoor air", "image": "/services/04.svg", "description": "Air quality options beyond standard filters for a more comfortable home."}, {"name": "Light commercial HVAC", "shortName": "Light commercial", "image": "/services/05.svg", "description": "Heating and cooling support for residential and light commercial spaces."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Montgomery · Central Alabama",
    featuredLocation: "Montgomery, AL",
    locationDetail: "Serving Montgomery · Central Alabama.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Montgomery · Central Alabama",
    metrics: [{"value": "5 communities", "label": "Coverage shown"}, {"value": "Residential · light commercial", "label": "Service commitment"}, {"value": "Local team", "label": "Montgomery · Central Alabama"}],
    locations: [{"name": "Montgomery, AL", "kind": "city", "lat": 32.3668, "lng": -86.3, "hub": true}, {"name": "Prattville, AL", "kind": "city", "lat": 32.464, "lng": -86.4597, "hub": false}, {"name": "Millbrook, AL", "kind": "city", "lat": 32.4799, "lng": -86.3619, "hub": false}, {"name": "Pike Road, AL", "kind": "city", "lat": 32.2846, "lng": -86.103, "hub": false}, {"name": "Wetumpka, AL", "kind": "city", "lat": 32.5437, "lng": -86.2119, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Talbot Heating & Cooling about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Talbot",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 334-300-8910 to contact Talbot Heating & Cooling.",

  }
};
