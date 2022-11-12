export const VirkopediaArticle = ({ heading, paragraphs }) => (
  <article className='virkopedia-article'>
    <h3>{heading}</h3>
    {paragraphs.map((item) => (
      <p key={item}>{item}</p>
    ))}
  </article>
)
