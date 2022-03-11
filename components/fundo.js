import React from 'react'

import PropTypes from 'prop-types'

const Fundo = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="eager"
          className="image"
        />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .image {
            top: 0px;
            flex: inherit;
            left: left;
            right: 0px;
            width: 902px;
            height: 100%;
            opacity: 0.5;
            position: fixed;
            object-fit: cover;
            object-position: right;
          }

          @media (max-width: 767px) {
            .image {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Fundo.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1621246159024-e53b1d25fc1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMxfHxwdXJwbGV8ZW58MHx8fHwxNjQ2OTc0MDU0&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
}

Fundo.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Fundo
