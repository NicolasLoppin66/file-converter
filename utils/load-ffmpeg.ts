import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

export default async function loadFfmpeg(): Promise<FFmpeg> {
    const ffmpeg = new FFmpeg()
    const baseUrl = "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd"
    await ffmpeg.load({
        coreURL: await toBlobURL(`${baseUrl}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseUrl}/ffmpeg-core.wasm`, 'application/wasm')
    })
    return ffmpeg
}