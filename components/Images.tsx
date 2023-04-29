const products = [
  {
    id: 1,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    href: '#',
    imageSrc:
      '/1.gif',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 4,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 5,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 6,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
]

function Images() {
    return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group relative">
              <div className="aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 w-full overflow-hidden rounded-lg">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              {product.id === 1 && (
                <span className="home-label absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold text-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Home
                </span>
              )}
              {product.id === 2 && (
                <span className="home-label absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold text-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Test2
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Images
