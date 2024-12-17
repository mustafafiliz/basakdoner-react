const Press = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Gazete & Dergi</h2>
          <div className="border-2 border-red-800 w-full my-10" />

          <div className="flex gap-16 mt-28">
            <div className="relative aspect-[3/2] hover:opacity-80 transition-opacity cursor-pointer">
              <img
                src="/images/4.jpeg"
                alt="Newspaper article"
                className="md:max-w-[550px] object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="text-sm md:text-base font-medium text-[#1a1a1a] lg:max-w-[700px] overflow-y-auto">
              <span className="text-red-800 font-bold">BAŞAK DÖNER&KÖFTE</span>{" "}
              <br /> <br />
              Sizlerden gelen mesajlar üzerine, Kadıköy Kozyatağı’ndaki Başak
              Döner’e gittim. Taner ve kardeşi Tamer usta yaklaşık 40 yıldır
              bölgede döner salonu işletiyorlar. Ürünleri yüzde yüz yaprak
              döner. Dana eti ve kuzu döşü kullanıyorlar. Sabah 10.00
              sıralarında et ve tavuk döner başlıyor yavaş yavaş ısınmaya. Yavaş
              yavaş diyorum çünkü dönere lezzeti veren en önemli özellik yavaş
              pişmesi.
              <a
                href="https://www.hurriyet.com.tr/lezizz/yazarlar/sertac-virancik/kadikoyun-4-nefis-donercisi-41746080"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-800 hover:text-red-600 font-medium mt-4 "
              >
                Devamını oku ...
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
