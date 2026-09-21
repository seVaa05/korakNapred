import room1 from '../assets/gallery/prostorije/001a_1.jpg'
import room2 from '../assets/gallery/prostorije/001a.jpg'
import room3 from '../assets/gallery/prostorije/002a.jpg'
import room4 from '../assets/gallery/prostorije/003a.jpg'
import room5 from '../assets/gallery/prostorije/004a.jpg'
import room6 from '../assets/gallery/prostorije/005a.jpg'
import room7 from '../assets/gallery/prostorije/006a.jpg'
import room8 from '../assets/gallery/prostorije/007a.jpg'
import room9 from '../assets/gallery/prostorije/008a.jpg'
import room10 from '../assets/gallery/prostorije/009a.jpg'
import room11 from '../assets/gallery/prostorije/010a.jpg'

export const roomGallery = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11].map((src, index) => ({
  src,
  alt: `Prostorije Edukativnog centra Korak napred, fotografija ${index + 1}`,
}))

export const videos = [
  'https://www.youtube.com/embed/8mve0UoSxTo',
  'https://www.youtube.com/embed/KdxEAt91D7k',
  'https://www.youtube.com/embed/6uE4nfFgc5Q',
  'https://www.youtube.com/embed/3icoSeGqQtY',
]
