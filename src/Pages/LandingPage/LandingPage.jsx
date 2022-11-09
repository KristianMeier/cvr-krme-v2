import { PlaceholderWrapper } from '../../Components/Placeholder/PlaceholderWrapper'
import { Search } from '../../Components/Search/Search'
import { JsData } from '../../Data/Data'
import { Placeholder } from '../../Components/Placeholder/Placeholder'
import { Modal } from '../../Components/Other/Modal'

const placeholderWrapperData = [
  JsData.placeholderData.rowOne,
  JsData.placeholderData.rowTwo,
  JsData.placeholderData.rowThree,
]

export const LandingPage = () => {
  return (
    <>
      <Search />
      {placeholderWrapperData.map((item) => {
        return (
          <PlaceholderWrapper key={item}>
            {item.map((item) => {
              const { className, title } = item
              return (
                <Placeholder key={title} className={className} title={title} />
              )
            })}
          </PlaceholderWrapper>
        )
      })}
      <Modal title='You have signed out' />
    </>
  )
}
