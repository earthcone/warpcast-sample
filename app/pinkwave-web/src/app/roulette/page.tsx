import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

export const metadata: Metadata = {
  other: {
    'fc:frame': 'vNext',
    'fc:frame:button:1': 'Shoot',
    'fc:frame:button:1:action': 'post',
    'fc:frame:button:1:post_url': `${NEXT_PUBLIC_URL}/api/roulette/shoot`,
    'fc:frame:button:2': 'Stop',
    'fc:frame:button:2:action': 'post',
    'fc:frame:button:2:post_url': `${NEXT_PUBLIC_URL}/api/roulette/stop`,
    'fc:frame:button:3': 'Go to Warpcast',
    'fc:frame:button:3:action': 'link',
    'fc:frame:button:3:target': 'https://warpcast.com/',
    'fc:frame:image': `${NEXT_PUBLIC_URL}/roulette/o_noob.png`,
    'fc:frame:image:aspect_ratio': '1:1',
  },
  title: 'roulette',
};

export default function Page() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
