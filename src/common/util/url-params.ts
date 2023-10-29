
const getParam = (key: string) => {
  const param = new URLSearchParams(location.search).get(key)
  if (param) {
    return decodeURI(param)
  }
  return null
}

export const getUrlCodeParam = () => {
  return getParam('code');
}

export const setUrlCodeParam = (code: string) => {
  const url = new URL(location.href);
  url.searchParams.set('code', code)
  history.pushState(null, '', url.toString())
}

export const getUrlReadModeParam = () => {
  return getParam('read-mode');
}

export const setUrlReadModeParam = (isReadMode: boolean) => {
  const url = new URL(location.href);

  if (!isReadMode) {
    url.searchParams.delete('read-mode')
  } else {
    url.searchParams.set('read-mode', '1')
  }

  history.pushState(null, '', url.toString())
}
