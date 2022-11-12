export const FooterSection = ({ data, className }) => (
  <section className='footer-section'>
    {data.map((item) => (
      <p className={className} key={item}>
        {item}
      </p>
    ))}
  </section>
)
