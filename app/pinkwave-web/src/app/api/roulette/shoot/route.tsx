import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../../config';
import { getFrameHtmlResponse } from '../../../../utils/getFrameHtmlResponse';

async function getResponse(): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'link',
          label: 'run',
          target: 'https://www.naver.com',
        },
      ],
      image: {
        aspectRatio: '1:1',
        src: `${NEXT_PUBLIC_URL}/roulette/died.png`,
      },
    }),
  );
}

export async function POST(): Promise<Response> {
  return getResponse();
}

export const dynamic = 'force-dynamic';
