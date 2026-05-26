import networkData from '../../vendor/network-manifest/network.json';

const SELF = 'CheatingChelsea';

export function NetworkFooter() {
  const hub = networkData.sites.find((s) => s.role === 'hub');
  const peers = networkData.sites.filter(
    (s) => s.role === 'member' && s.name !== SELF
  );

  if (!hub) return null;

  return (
    <div className="border-t border-border mt-2 pt-3 text-xs text-muted-foreground text-center">
      Part of the{' '}
      <a
        href={hub.url}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {networkData.network_name}
      </a>
      {peers.length > 0 && (
        <>
          {' '}—{' '}
          {peers.map((site, i) => (
            <span key={site.name}>
              {i > 0 && ' · '}
              <a
                href={site.url}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.name}
              </a>
            </span>
          ))}
        </>
      )}
    </div>
  );
}
