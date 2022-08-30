import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function Pagination({
  numberOfPages,
  currentPage,
  setCurrentPage,
}: {
  numberOfPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}) {
  const theme = useSelector((state: RootState) => state.theme.theme)

  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1)
  const middlePages = pageNumbers.filter(
    (pgNumber) => pgNumber >= 4 && pgNumber <= pageNumbers.length - 3
  )

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <nav>
      <ul
        className={`w-[85vw] flex justify-between ${
          theme === 'dark' ? 'text-greyishBlueLight' : 'text-darkerBlue'
        }`}
      >
        {currentPage > 1 && (
          <li>
            <button onClick={prevPage}>Previous</button>
          </li>
        )}
        <li>
          <button
            onClick={() => setCurrentPage(1)}
            className={`page-nb ${currentPage === 1 ? 'page-nb-active' : ''}`}
          >
            1
          </button>
        </li>
        {(currentPage <= 3 || currentPage >= numberOfPages - 2) && (
          <li>
            <button
              onClick={() => setCurrentPage(2)}
              className={`page-nb ${currentPage === 2 ? 'page-nb-active' : ''}`}
            >
              2
            </button>
          </li>
        )}
        {(currentPage <= 3 || currentPage >= numberOfPages - 2) && (
          <li>
            <button
              onClick={() => setCurrentPage(3)}
              className={`page-nb ${currentPage === 3 ? 'page-nb-active' : ''}`}
            >
              3
            </button>
          </li>
        )}
        {currentPage >= 4 && (
          <li>
            <button disabled>...</button>
          </li>
        )}
        {currentPage >= 4 &&
          currentPage <= numberOfPages - 3 &&
          middlePages.map((pgNumber) => (
            <li key={pgNumber}>
              <button
                onClick={() => setCurrentPage(pgNumber)}
                className={`page-nb ${
                  currentPage === pgNumber ? 'page-nb-active' : ''
                }`}
              >
                {pgNumber}
              </button>
            </li>
          ))}
        {currentPage < numberOfPages - 2 && (
          <li>
            <button disabled>...</button>
          </li>
        )}
        {(currentPage >= numberOfPages - 2 || currentPage < 4) && (
          <li>
            <button
              onClick={() => setCurrentPage(numberOfPages - 2)}
              className={`page-nb ${
                currentPage === numberOfPages - 2 ? 'page-nb-active' : ''
              }`}
            >
              {numberOfPages - 2}
            </button>
          </li>
        )}
        {(currentPage >= numberOfPages - 2 || currentPage < 4) && (
          <li>
            <button
              onClick={() => setCurrentPage(numberOfPages - 1)}
              className={`page-nb ${
                currentPage === numberOfPages - 1 ? 'page-nb-active' : ''
              }`}
            >
              {numberOfPages - 1}
            </button>
          </li>
        )}
        <li>
          <button
            onClick={() => setCurrentPage(numberOfPages)}
            className={`page-nb ${
              currentPage === numberOfPages ? 'page-nb-active' : ''
            }`}
          >
            {numberOfPages}
          </button>
        </li>
        {currentPage < numberOfPages && (
          <li>
            <button onClick={nextPage}>Next</button>
          </li>
        )}
      </ul>
    </nav>
  )
}
export default Pagination
