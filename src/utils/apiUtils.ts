/**
 * Parses a GitHub repository URL (in HTTPS or SSH format) and extracts
 * owner, name, ref (#main), subpath (/node).
 */
export const parseRepositoryUrl = (repositoryUrl: string) => {
  try {
    let httpUrl = repositoryUrl;

    // Error out if local URL is used
    if (httpUrl.startsWith('file://')) {
      return { status: 'invalid url' as const };
    }

    // Convert any Git SSH URLs into HTTPS
    if (httpUrl.startsWith('git@')) {
      httpUrl = httpUrl.replace(/^git@([^:]+):(.+)$/, 'https://$1/$2');
    }

    const url = new URL(httpUrl);

    // Fail for non-GitHub URLs (for now)
    if (url.host !== 'github.com') {
      return { status: 'invalid url' as const };
    }

    // eslint-disable-next-line prefer-const
    let [, owner, repo, ...subpathParts] = url.pathname.split('/');

    let subpath = subpathParts && subpathParts.length > 0 ? subpathParts.join('/') : undefined;
    if (subpath && subpath.endsWith('/')) subpath = subpath.slice(0, -1);

    let ref = url.hash || undefined;
    if (ref) ref = ref.replace('#', '');

    // This is safe to do, as GitHub repository names cannot end with ".git"
    if (repo.endsWith('.git')) {
      repo = repo.substring(0, repo.length - '.git'.length);
    }

    if (!/^[a-zA-Z0-9-]{1,39}$/.test(owner)) {
      return { status: 'invalid owner name' as const };
    }

    if (!/^[a-zA-Z0-9-_.]{1,100}$/.test(repo)) {
      return { status: 'invalid repo name' as const };
    }

    const result: { status: 'ok'; url: string; owner: string; repo: string; subpath?: string; ref?: string } = {
      status: 'ok' as const,
      url: `https://github.com/${owner}/${repo}`,
      owner,
      repo,
    };
    if (subpath) result.subpath = subpath;
    if (ref) result.ref = ref;

    return result;
  } catch (error) {
    return { status: 'invalid url' as const };
  }
};
