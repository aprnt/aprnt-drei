import * as React from 'react';
import { useTexture } from './useTexture.js';
import { suspend } from 'suspend-react';

function getFormatString(format) {
  switch (format) {
    case 64:
      return '-64px';
    case 128:
      return '-128px';
    case 256:
      return '-256px';
    case 512:
      return '-512px';
    default:
      return '';
  }
}
const LIST_URL = 'https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/matcaps.json';
const MATCAP_ROOT = 'https://rawcdn.githack.com/emmelleppi/matcaps/9b36ccaaf0a24881a39062d05566c9e92be4aa0d';
function useMatcapTexture(id = 0, format = 1024, onLoad) {
  const matcapList = suspend(() => fetch(LIST_URL).then(res => res.json()), ['matcapList']);
  const DEFAULT_MATCAP = matcapList[0];
  const numTot = React.useMemo(() => Object.keys(matcapList).length, []);
  const fileHash = React.useMemo(() => {
    if (typeof id === 'string') {
      return id;
    } else if (typeof id === 'number') {
      return matcapList[id];
    }
    return null;
  }, [id]);
  const fileName = `${fileHash || DEFAULT_MATCAP}${getFormatString(format)}.png`;
  const url = `${MATCAP_ROOT}/${format}/${fileName}`;
  const matcapTexture = useTexture(url, onLoad);
  return [matcapTexture, url, numTot];
}

export { useMatcapTexture };
