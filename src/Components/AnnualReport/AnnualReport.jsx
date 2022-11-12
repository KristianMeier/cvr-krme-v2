import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {
  INITIAL_CONTAINER_HEIGHT,
  PADDING_BOTTOM,
} from '../../Constants/Constants'
import { JsData } from '../../Data/Data'

const articles = JsData.annualReportData

export const AnnualReport = () => {
  const [index, setIndex] = useState(0)
  const [resize, setResize] = useState(false)
  const textRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const lastIndex = articles.length - 1
    if (index < 0) setIndex(lastIndex)
    if (index > lastIndex) setIndex(0)
  }, [index])

  useEffect(() => {
    const sectionHeight = sectionRef.current.getBoundingClientRect().height
    const textHeight = textRef.current.getBoundingClientRect().height
    textHeight > sectionHeight
      ? (sectionRef.current.style.height = `${textHeight + PADDING_BOTTOM}px`)
      : (sectionRef.current.style.height = INITIAL_CONTAINER_HEIGHT)
  }, [resize])

  return (
    <div className='annual-report'>
      <h1>Annual Report</h1>
      <div ref={sectionRef} className='section-center'>
        {articles.map((item, arrayIndex) => {
          const { title, text } = item
          let position = 'nextSlide'
          if (arrayIndex === index) position = 'activeSlide'
          if (
            arrayIndex === index - 1 ||
            (index === 0 && arrayIndex === articles.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article key={arrayIndex} className={position}>
              <div className='header-container'>
                <h3>{title}</h3>
                <button
                  className='resize-btn'
                  onClick={() => !setResize(!resize)}
                >
                  Hej
                </button>
              </div>
              <p ref={textRef}>{text}</p>
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}
