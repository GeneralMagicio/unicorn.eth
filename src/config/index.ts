export const appConfig = {
  ensDomain: `.${process.env.NEXT_PUBLIC_OFFCHIAN_ENS_DOMAIN}`,
  isDevMode: process.env.NODE_ENV === 'development',
  // isDevMode: false,
}
