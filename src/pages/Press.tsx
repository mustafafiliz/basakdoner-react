import { PlayCircle } from "lucide-react";

interface VideoItem {
  title: string;
  subtitle: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: VideoItem[] = [
  {
    title: "Dönerci Celal Usta",
    subtitle: "İmalathane",
    thumbnail: "/images/döner2.jpg",
    videoUrl: "#",
  },
  {
    title: "Dönerci Celal Usta",
    subtitle: "Tanıtım Filmi",
    thumbnail: "/images/döner2.jpg",
    videoUrl: "#",
  },
  {
    title: "CNN",
    subtitle: "Lezzet Durakları",
    thumbnail: "/images/döner2.jpg",
    videoUrl: "#",
  },
  {
    title: "NTV",
    subtitle: "Vedat Milor Tadı Damağında",
    thumbnail: "/images/döner2.jpg",
    videoUrl: "#",
  },
  {
    title: "TRT Haber",
    subtitle: "Fazla Mesai",
    thumbnail: "/images/döner2.jpg",
    videoUrl: "#",
  },
  {
    title: "Dönerci Celal Usta",
    subtitle: "Tanıtım Filmi",
    thumbnail: "/images/döner2.jpg",
    videoUrl: "#",
  },
];

const Press = () => {
  const articles = [
    {
      id: 1,
      image: "/images/döner.jpg",
      alt: "Newspaper article 1",
    },
    {
      id: 2,
      image: "/images/döner.jpg",
      alt: "Newspaper article 2",
    },
    {
      id: 3,
      image: "/images/döner.jpg",
      alt: "Newspaper article 3",
    },
    {
      id: 4,
      image: "/images/döner.jpg",
      alt: "Newspaper article 4",
    },
    {
      id: 5,
      image: "/images/döner.jpg",
      alt: "Newspaper article 5",
    },
    {
      id: 6,
      image: "/images/döner.jpg",
      alt: "Newspaper article 6",
    },
  ];
  return (
    <div>
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-8 text-4xl font-semibold text-gray-800">
          Televizyon
        </h2>
        <div className="border-2 border-red-800 w-full my-10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={video.thumbnail}
                  alt={`${video.title} - ${video.subtitle}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="mt-2 text-center">
                <h3 className="font-medium text-gray-900">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Gazete & Dergi</h2>
          <div className="border-2 border-red-800 w-full my-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="relative aspect-[3/4] hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
