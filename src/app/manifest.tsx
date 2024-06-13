import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'GREasy Personalized Vocabulary Generator',
        short_name: 'GREasy',
        description: 'A personalized GRE vocabulary generator that sends flashcards directly to your inbox.',
        start_url: '/',
        display: 'standalone',
        background_color: '#3B413C',
        theme_color: '#7DDF64',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}