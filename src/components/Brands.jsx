const Brands = () => {
  const brands = [
    { id: 'brand-1', logo: 'src/assets/logos/logoipsum.svg' },
    { id: 'brand-2', logo: 'src/assets/logos/logoipsum1.svg' },
    { id: 'brand-3', logo: 'src/assets/logos/logoipsum2.svg' },
    { id: 'brand-4', logo: 'src/assets/logos/logoipsum3.svg' },
    { id: 'brand-5', logo: 'src/assets/logos/logoipsum4.svg' },
    { id: 'brand-6', logo: 'src/assets/logos/logoipsum6.svg' },
  ];

  return (
    <section id="brands">
      <div className="container">
        {brands.map(brand => (
          <div key={brand.id} id={brand.id} className="brand-box hover-effect">
            <img src={brand.logo} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
