import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Voltar = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <Link href="/projetos">
          <a className="link button">{props.button}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .link {
            color: var(--dl-color-gray-white);
            outline: none;
            font-size: 0.8rem;
            background: #3d2d4c;
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
            text-decoration: none;
          }
          .link:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  )
}

Voltar.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

Voltar.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Voltar
