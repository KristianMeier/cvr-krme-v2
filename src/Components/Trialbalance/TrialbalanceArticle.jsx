import { useGlobalContext } from '../../Context/Context'

export const TrialbalanceArticle = ({ data }) => {
  const { openModal } = useGlobalContext()

  return (
    <div className='trialbal-article'>
      {data.map((item) => {
        const { title, desc } = item
        return (
          <article
            onClick={() => {
              navigator.clipboard.writeText(desc)
              openModal()
            }}
            key={title}
          >
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        )
      })}
    </div>
  )
}
