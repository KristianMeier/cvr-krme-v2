import { JsData } from '../../../Data/Data'
import { FooterSection } from './FooterSection'

export const FooterData = [
  { data: JsData.footerData.firstColumn, className: 'odd-link' },
  { data: JsData.footerData.secondColumn, className: 'first-link' },
  { data: JsData.footerData.thirdColumn, className: 'first-link' },
  { data: JsData.footerData.fourthColumn, className: 'first-link' },
]

export const Footer = () => {
  return (
    <div className='footer'>
      {FooterData.map((item, index) => {
        const { data, className } = item
        return <FooterSection key={index} data={data} className={className} />
      })}
    </div>
  )
}
