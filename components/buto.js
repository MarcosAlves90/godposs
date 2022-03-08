import React from 'react'

import PropTypes from 'prop-types'

const Buto = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <button className="button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .button {
            color: var(--dl-color-gray-white);
            outline: none;
            font-size: 0.8rem;
            background: #73cb6e;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 1.4;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 0px;
            padding-right: var(--dl-space-space-unitandahalfunit);
            letter-spacing: -0.025rem;
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-transform: uppercase;
          }
          .button:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  )
}

Buto.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

Buto.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Buto
