type MetricsType = { [type: string]: { [size: string]: any } };

const baseMetrics: MetricsType = {
  fontSize: {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 18,
    xl: 22,
    xxl: 30,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    boldLight: 600,
    bold: 700,
  },
  padding: {
    none: 0,
    tiny: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 36,
    xxl: 48,
  },
  margin: {
    none: 0,
    tiny: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 36,
    xxl: 48,
  },
  breakpoints: {
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

// Nasty
type MediaQueries = {
  [bkpt in keyof typeof baseMetrics["breakpoints"]]: string;
};

const metrics: MetricsType = {
  ...baseMetrics,

  // This gives us media queries from our breakpoints
  mediaQueries: Object.keys(baseMetrics.breakpoints).reduce(
    (mq: { [size: string]: string }, key: string) => {
      mq[key] = `@media (min-width: ${baseMetrics.breakpoints[key]}px)`;
      return mq;
    },
    {}
  ) as MediaQueries,
};

export default metrics;
