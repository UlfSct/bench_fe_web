export const routerPaths = {
  MAIN: '/', // auth
  APP: '/app', // any
  LOGIN: '/login', // no auth
  REGISTER: '/reg', // no auth
  FORGOT_PASSWORD: '/forgot-password', // no auth
  RESET_PASSWORD: '/reset-password', // any
  VERIFY_EMAIL: '/verify-email', // any
  CHANGE_EMAIL: '/change-email', // any
  NOT_FOUND: '*', // any
} as const;

export type RouterPath = (typeof routerPaths)[keyof typeof routerPaths];
