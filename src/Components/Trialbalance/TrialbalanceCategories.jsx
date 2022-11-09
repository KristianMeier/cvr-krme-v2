export const TrialbalanceCategories = ({ categories, filterItems }) => {
  return (
    <>
      <div className='trialbal-categories'>
        {categories.map((category) => {
          return (
            <button
              type='button'
              key={category}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </>
  )
}
