import { useState } from 'react'
import { JsData } from '../../Data/Data'
import { Modal } from '../Other/Modal'
import { TrialbalanceArticle } from './TrialbalanceArticle'
import { TrialbalanceCategories } from './TrialbalanceCategories'

const trialbalanceData = JsData.trialbalanceData

const allCategories = [
  'All',
  ...new Set(trialbalanceData?.map((item) => item.category)),
]

export const Trialbalance = () => {
  const [data, setData] = useState(trialbalanceData)

  const filterItems = (category) => {
    if (category === 'All') {
      setData(trialbalanceData)
      return
    }
    const filteredData = trialbalanceData.filter(
      (item) => item?.category === category
    )
    setData(filteredData)
  }

  return (
    <div className='trialbalance'>
      <h1>Trialbalance</h1>
      <TrialbalanceCategories
        categories={allCategories}
        filterItems={filterItems}
      />
      <TrialbalanceArticle data={data} />
      <p>
        <i>Hint: Click to copy to clipboard</i>
      </p>
      <Modal title='Copied to clipboard' />
    </div>
  )
}
