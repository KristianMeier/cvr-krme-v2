import { Link } from 'react-router-dom'

export const FooterSection = ({ data, className }) => {
  return (
    <section className='footer-section'>
      {data.map((item) => {
        const { text, link } = item
        return (
          <Link className={className} key={link} to={link}>
            {text}
          </Link>
        )
      })}
    </section>
  )
}
