/** @jsx jsx */ import { jsx } from '@emotion/core'

import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <div  css={css`
          
        `}>
    <Link to={`/`}>
      <h3
        css={css`
        
          display: inline-block;
          font-style: normal;
        `}
      >
        Pandas Eating Lots
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
      `}
    >
      About
    </Link>
    <Link
      to={`/test/`}
      css={css`
        float: right;
        margin-right: 30px;
      `}
    >
      Test
    </Link>
    </div>
    {children}
  </div>
)