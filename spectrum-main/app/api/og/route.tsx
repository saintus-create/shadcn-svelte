import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Spectrum UI';
    const description = searchParams.get('description') || 'Beautiful React Components';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderRadius: '24px',
              border: '2px solid #333',
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #fff, #999)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#999',
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              {description}
            </div>
            <div
              style={{
                fontSize: 28,
                color: '#666',
                marginTop: '40px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Spectrum UI • React Components
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}

