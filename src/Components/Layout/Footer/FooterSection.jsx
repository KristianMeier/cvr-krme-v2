export const FooterSection = ({ data, className }) => {
  return (
    <section className='footer-section'>
      {data.map((item) => {
        return (
          <p className={className} key={item}>
            {item}
          </p>
        )
      })}
    </section>
  )
}
