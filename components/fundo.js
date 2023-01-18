import React from 'react'

import PropTypes from 'prop-types'

const Fundo = (props) => {
  return (
    <>
      <div className={`fundo-container ${props.rootClassName} `}>
        <img
          alt="image"
          src={props.image_src1}
          loading="eager"
          className="fundo-image"
        />
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="eager"
          className="fundo-image1"
        />
      </div>
      <style jsx>
        {`
          .fundo-container {
            display: flex;
            position: relative;
          }
          .fundo-image {
            top: 0px;
            flex: inherit;
            left: left;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.9;
            position: fixed;
            object-fit: cover;
            object-position: right;
          }
          .fundo-image1 {
            top: 0px;
            flex: inherit;
            left: left;
            right: 0px;
            width: 902px;
            height: 100%;
            opacity: 0.3;
            position: fixed;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }

          @media (max-width: 767px) {
            .fundo-image1 {
              width: 100%;
            }
            .fundo-root-class-name2 {
              opacity: 1;
            }
          }
          @media (max-width: 479px) {
            .fundo-root-class-name2 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

Fundo.defaultProps = {
  image_alt: 'image',
  image_src1: '/playground_assets/avoid-1000w.jpg',
  image_src:
    'https://i.pinimg.com/originals/35/e2/72/35e272c437b6953102474c9643615fe3.jpg',
  rootClassName: '',
}

Fundo.propTypes = {
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Fundo
