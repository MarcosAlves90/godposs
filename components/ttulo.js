import React from 'react'

import PropTypes from 'prop-types'

const Ttulo = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <h1 className="text">{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .text {
            color: #e81d24;
            font-size: 3.25rem;
            text-align: center;
            font-family: Righteous;
            font-weight: 700;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
            background-color: #3d2d4c;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          @media (max-width: 767px) {
            .text {
              font-size: 3.1rem;
            }
          }
          @media (max-width: 479px) {
            .text {
              font-size: 3rem;
            }
          }
        `}
      </style>
    </>
  )
}

Ttulo.defaultProps = {
  heading: 'H:Umanity',
  rootClassName: '',
}

Ttulo.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Ttulo
