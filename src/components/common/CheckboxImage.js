import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import media from '../../utils/media'

const CheckboxImage = ({
  children,
  className,
  imageUrl,
  checked,
  onClick,
}) => (
  <div className={classNames(
    className,
    checked && 'checked'
  )}>
    <div className="icon" onClick={onClick}>
      <img src={imageUrl} alt="" />
      <div className="tick"></div>
    </div>
    <div className="label">{children}</div>
  </div>
)

CheckboxImage.propTypes = {
  children: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  checked: PropTypes.bool,
}

CheckboxImage.defaultProps = {
  checked: false,
  onClick: () => {},
}

const StyledCheckboxImage = styled(CheckboxImage)`
  display: inline-block;
  text-align: center;
  filter: grayscale(100%);
  .icon {
    display: inline-block;
    position: relative;
    margin-bottom: 7.875vw;
    font-size: 0;
    img {
      display: inline-block;
      height: 26.75vw;
    }
    .tick {
      position: absolute;
      width: 24px;
      height: 24px;
      right: -10px;
      bottom: -10px;
      background-color: #FFF;
      border: 1px solid #999;
      border-radius: 50%;
      transition: all .25s linear;
      transform: scale(0);
      ::before {
        content: '';
        position: absolute;
        left: 6px;
        top: 6px;
        width: 10px;
        height: 7px;
        border: 3px solid #FF408E;
        border-right: 0;
        border-top: 0;
        transform: rotate(-45deg);
      }
    }
  }
  .label {
    line-height: 1;
    font-size: 7.5vw;
  }
  &.checked {
    filter: grayscale(0);
    .icon {
      .tick {
        transform: scale(1);
      }
    }
  }
  ${media.desktop`
    .icon {
      margin-bottom: 20px;
      img {
        height: 85px;
      }
    }
    .label {
      font-size: 24px;
    }
  `}
`

export default StyledCheckboxImage
