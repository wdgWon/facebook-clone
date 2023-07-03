const photos = [
  {
    id: "ca9dcecc-7116-5317-a78a-5db6947b8692",
    alt: "price",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "b8cd5d9e-78f8-55b9-b178-a99e9b92aed7",
    alt: "never",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "0168094c-dcd3-58b4-94a2-016fa4aeb62d",
    alt: "torn",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "b622ae93-8456-5866-a349-1d193f53f23b",
    alt: "fourth",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "74264ce5-8c4d-59fd-921f-83997b803579",
    alt: "saddle",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "f3bb9ea0-3847-5ae8-8933-c505f2aa6da8",
    alt: "job",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "98334f48-4d4b-5f8d-9ea9-dcfd1be975b2",
    alt: "effort",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "524681cd-fea0-579e-a2cc-d324876145ca",
    alt: "rough",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "e67a7db3-6bc0-5824-a2c9-1fb9ce382edf",
    alt: "best",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "e6560745-a685-55d9-8178-ac1d42290886",
    alt: "eager",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: "642b956d-3d45-52a4-8bff-15999cf4e749",
    alt: "task",
    photo: "https://www.hanalube.com/common/img/default_profile.png",
  },
];

const Photos = () => {
  return (
    <div className="min-w-screen min-h-screen p-4 bg-gray-200">
      <div className="flex flex-col mx-auto max-w-screen-xl p-4 bg-white rounded pt-2 shadow-md">
        <header className="flex flex-nowrap my-2 leading-4 space-x-4">
          <div className="basis-full">
            <h1 className="font-black text-lg text-black">사진</h1>
          </div>
          <button
            type="button"
            className="text-blue-500 font-black min-w-fit px-2 rounded-lg hover:bg-gray-200"
          >
            사진 추가
          </button>
        </header>
        <div className="mt-4 flex flex-wrap">
          {photos.map((photo) => (
            <div className="relative" key={photo.id}>
              <img
                className=" m-1 mb-2 w-[185px] h-[185px] border border-black/20 rounded-md overflow-hidden cursor-pointer transition-transform duration-300 transform-gpu hover:scale-105"
                src={photo.photo}
                alt={photo.alt}
              />
              <button
                type="button"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-400 hover:bg-gray-500"
              >
                <span className="inline-block">✏</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Photos;
