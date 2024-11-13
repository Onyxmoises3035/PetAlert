/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return[
            {
                source: "/",
                destination: "/petalert",
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
