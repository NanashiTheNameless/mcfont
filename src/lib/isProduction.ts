export default function isProduction() {
  return process.env.VERCEL_ENV === "production";
}
