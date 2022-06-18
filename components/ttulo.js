import React from 'react'

import PropTypes from 'prop-types'

const Ttulo = (props) => {
  return (
    <>
      <div className={`título-container ${props.rootClassName} `}>
        <h1 className="título-text">{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .título-container {
            display: flex;
            position: relative;
          }
          .título-text {
            color: #e81d24;
            font-size: 3.25rem;
            text-align: center;
            font-family: NMSGeoSans;
            font-weight: 700;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
            background-color: #bf8787;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          @media (max-width: 767px) {
            .título-text {
              font-size: 3.1rem;
            }
          }
          @media (max-width: 479px) {
            .título-text {
              font-size: 3rem;
            }
          }
        `}
      </style>
    </>
  )
}

Ttulo.defaultProps = {
  rootClassName: '',
  heading: 'H:Umanity',
}

Ttulo.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default Ttulo
