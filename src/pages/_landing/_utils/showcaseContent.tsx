import chatPreview from '../_images/chat.png';
import drawPreview from '../_images/draw.png';
import chatPreviewVideo from '../_videos/chat.mp4';

// We specify what to preload for showcases here
export const preloadContent = [
  { href: chatPreview.src, as: 'image', type: `image/${chatPreview.format}` },
  { href: drawPreview.src, as: 'image', type: `image/${drawPreview.format}` },
  { href: chatPreviewVideo, as: 'video', type: 'video/mp4' },
];

export { chatPreview, drawPreview, chatPreviewVideo };
