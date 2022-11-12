export const TrialbalanceCategories = ({ categories, filterItems }) => (
  <div className='trialbal-categories'>
    {categories.map((category) => (
      <button
        type='button'
        key={category}
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    ))}
  </div>
)
