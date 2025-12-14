// const isDev = process.env.NODE_ENV === 'development';

// const nextConfig = {
//   images: {
//     ...(isDev
//       ? {
//           remotePatterns: [
//             { protocol: 'https', hostname: '**' },
//           ],
//         }
//       : {
//           domains: ['res.cloudinary.com', 'i.ibb.co'],
//         }),
//   },
// };

// module.exports = nextConfig;

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

module.exports = nextConfig;
