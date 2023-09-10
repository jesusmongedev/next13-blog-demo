/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.GITHUB_USER_CONTENT_URL.replace(
          'https://',
          ''
        ),
        port: '',
        pathname: `/${process.env.GITHUB_REPO_PATH}/main/images/**`
      }
    ]
  }
}

module.exports = nextConfig
