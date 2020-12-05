export default function createLoginUrl(redirectTo) {
  if (redirectTo) {
    return `/auth/login?redirectTo=${encodeURIComponent(redirectTo)}`;
  }
  return `/auth/login`;
}
