export const VirkopediaArticle = ({ heading, paragraphs }) => {
  return (
    <article className='virkopedia-article'>
      <h3>{heading}</h3>
      {paragraphs.map((item) => {
        const { text } = item
        return <p key={text}>{text}</p>
      })}
    </article>
  )
}
