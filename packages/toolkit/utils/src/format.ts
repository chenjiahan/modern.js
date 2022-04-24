import type { ProxyDetail, BffProxyOptions } from '@modern-js/types';

function formatProxyOptions(proxyOptions: BffProxyOptions) {
  const formatedProxy: ProxyDetail[] = [];
  if (!Array.isArray(proxyOptions)) {
    if ('target' in proxyOptions) {
      formatedProxy.push(proxyOptions as ProxyDetail);
    } else {
      Array.prototype.push.apply(
        formatedProxy,
        Object.keys(proxyOptions).reduce(
          (total: ProxyDetail[], source: string) => {
            const option = proxyOptions[source];

            total.push({
              context: source,
              changeOrigin: true,
              logLevel: 'warn',
              ...(typeof option === 'string' ? { target: option } : option),
            });
            return total;
          },
          [],
        ),
      );
    }
  } else {
    formatedProxy.push(...proxyOptions);
  }
  return formatedProxy;
}

export { formatProxyOptions };
