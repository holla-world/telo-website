export const volcengineDefaultConfig = {
  apiKey: 'eda05b10045311eeb76715460119f2e6',
  projectId: 5667,
  operatorId: 2100232399,
  expiredTime: 20 * 60 * 1000, // 缓存过期设置为20分钟
  timeout: 20 * 1000, // 请求超时设置为20秒
  fallbackLangs: ['en'],
  host: 'https://starling-public.byteintlapi.com',
};

export const volcengineH5Config = {
  ...volcengineDefaultConfig,
  namespace: 42034,
};

export const volcengineActivityConfig = {
  ...volcengineDefaultConfig,
  namespace: 42041,
};

export const volcengineGuildConfig = {
  ...volcengineDefaultConfig,
  namespace: 42046,
};

export type ConfigType = typeof volcengineH5Config;
