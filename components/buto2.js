import React from 'react'

import PropTypes from 'prop-types'

const Buto2 = (props) => {
  return (
    <>
      <div className="container">
        <button className="button buttonSmall">{props.button}</button>
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
            background: #e4092a;
            transition: 0.3s;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 0px;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
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

Buto2.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

Buto2.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buto2
