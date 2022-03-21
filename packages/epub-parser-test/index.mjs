import { parseEpub } from '@gxl/epub-parser';
import nodeZip from 'node-zip';

/**
 * epub content: [
  '_zip',      '_root',
  '_toc',      'structure',
  '_manifest', '_content',
  '_opfPath',  '_spine',
  '_metadata', 'info',
  'sections'
]
 */
parseEpub('/Users/liangjianwen/Downloads/法治的细节.epub', {
  type: 'path',
}).then((epubObj) => {
  console.log('epub content:', JSON.stringify(epubObj._metadata, null, 2));
});
