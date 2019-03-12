import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const supportedBrands = [
  'google',
  'github',
  'twitter'
]

const BrandSpan = styled.span`
  display: inline-block;
  padding: 1px 3px;
  text-align: center;
  background: #444;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #77b;
  }
`;

class BrandIcon extends React.Component {
  constructor(props) {
    super(props)

    if (!props.brand) {
      throw new Error(`Attribute "brand" is required`)
    }

    if (!supportedBrands.includes(props.brand)) {
      throw new Error(`Brand "${props.brand}" isn't supported`)
    }
  }
  render() {
    return (
      <BrandSpan title={`Login with ${this.props.brand}`}>
        <FontAwesomeIcon icon={['fab', this.props.brand]} />
      </BrandSpan>
    )
  }
}

export default BrandIcon