/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
                domains: [ 'res.cloudinary.com' ],
        },

        webpack: (config, { isServer }) => {
                if (!isServer)
                {
                        config.resolve.fallback = {
                                fs: false,
                                net: false,
                                dns: false,
                                path: false,
                                stream: false,
                                constants: false,
                                child_process: false,
                                tls: false,
                        };
                }

                return config;
        },
};

export default nextConfig;
