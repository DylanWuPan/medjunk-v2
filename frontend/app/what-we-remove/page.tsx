import Image from 'next/image'

export const metadata = {
  title: 'What We Remove',
}

export default function WhatWeRemovePage() {
  const sections = [
    {
      title: 'Furniture',
      items:
        'Sofas, sectionals, armchairs, recliners, dining tables, chairs, bed frames, dressers, desks, bookshelves, entertainment centers, and outdoor furniture.',
      note: 'We happily disassemble as needed.',
      image: '/images/furniture-2.jpg',
    },
    {
      title: 'Mattresses & Box Springs',
      items: 'All sizes and conditions of mattresses and box springs.',
      note: 'Responsibly recycled through specialized facilities.',
      image: '/images/mattress.jpg',
    },
    {
      title: 'Appliances',
      items: 'Refrigerators, washers, dryers, ovens, dishwashers, microwaves, AC units, and more.',
      note: 'Handled safely, including refrigerants.',
      image: '/images/appliances.PNG',
    },
    {
      title: 'Electronics & TVs',
      items: 'TVs, computers, printers, speakers, gaming systems, and e-waste.',
      note: 'Disposed of responsibly through proper facilities.',
      image: '/images/furniture.jpg',
    },
    {
      title: 'Yard & Outdoor',
      items: 'Lawn equipment, grills, trampolines, sheds, fencing, and yard debris.',
      note: 'Seasonal cleanups available.',
      image: '/images/yard.jpg',
    },
    {
      title: 'Construction Debris',
      items: 'Drywall, lumber, flooring, tile, insulation, fixtures, and renovation waste.',
      note: 'Great for contractors and DIY projects.',
      image: '/images/construction.jpeg',
    },
    {
      title: 'Miscellaneous',
      items: 'Boxes, clothing, books, décor, toys, and general clutter.',
      note: 'We donate usable items whenever possible.',
      image: '/images/furniture-3.jpg',
    },
    {
      title: 'Full Cleanouts',
      items: 'Bedrooms, basements, attics, garages, or entire homes.',
      note: 'Handled with care and sensitivity.',
      image: '/images/cleanout.jpg',
    },
  ]

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">What We Remove</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-md leading-relaxed sm:leading-loose">
          We remove just about everything from homes, garages, basements, and estates. Not sure if
          we take something? Call or text us at
          <a
            href="tel:16179229752"
            className="font-semibold shadow rounded-full px-2 py-1 mx-2 inline-block hover:bg-gray-100 transition"
          >
            (617) 922 - 9752
          </a>
          — we’re happy to help.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                {/* Replace src with real images */}
                <Image
                  src={section.image}
                  alt={section.title}
                  width={2000}
                  height={2000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-3">✅ {section.title}</h2>
              <p className="text-gray-700 mb-2">{section.items}</p>
              <p className="text-sm text-gray-500">{section.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
