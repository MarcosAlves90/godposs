import React from 'react'

import PropTypes from 'prop-types'

const PlaceHolder = (props) => {
  return (
    <>
      <div className={`place-holder-container ${props.rootClassName} `}>
        <button className="place-holder-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .place-holder-container {
            display: flex;
            position: relative;
          }
          .place-holder-button {
            color: var(--dl-color-gray-white);
            opacity: 0;
            outline: none;
            background: #e4092a;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 0px;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
        `}
      </style>
    </>
  )
}

PlaceHolder.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

PlaceHolder.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PlaceHolder
