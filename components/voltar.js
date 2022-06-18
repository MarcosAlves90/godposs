import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Voltar = (props) => {
  return (
    <>
      <div className={`voltar-container ${props.rootClassName} `}>
        <Link href="/projetos">
          <a className="voltar-link button">{props.button}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .voltar-container {
            display: flex;
            position: relative;
          }
          .voltar-link {
            color: #bf8787;
            outline: none;
            font-size: 0.8rem;
            background: #bf8787;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 1.4;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-color: #bf8787;
            border-width: 3px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-unitandahalfunit);
            letter-spacing: -0.025rem;
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0);
          }
          .voltar-link:hover {
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
