/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        // domains: ['images.unsplash.com', 'res.cloudinary.com']
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**'
            },
        ]
    }
};

export default nextConfig;
