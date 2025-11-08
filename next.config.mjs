/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['node_modules'],   // ★ 關鍵：讓 @import 能解析套件內的相對引用
  },
};

export default nextConfig;
