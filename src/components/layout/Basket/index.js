import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import gsap from 'gsap';

import { selectCartItemsCount } from '../../../redux/cart/selectors';
import { StyledBasket } from './styles';

const Basket = ({ itemCount }) => {
  const BaskedRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.to(BaskedRef.current, .1, { rotate: '20deg' })
    tl.to(BaskedRef.current, .2, { rotate: '-20deg' })
    tl.to(BaskedRef.current, .1, { rotate: 0 })
  }, [itemCount])

  const mouseEnterHandler = () => {
    gsap.to(BaskedRef.current, .5, { scale: 1.2, ease: 'power2.out' })
  }
  const mouseOutHandler = () => {
    gsap.to(BaskedRef.current, .5, { scale: 1, ease: 'power2.out' })
  }

  return (
    <StyledBasket>
      <i ref={BaskedRef} onMouseOut={mouseOutHandler} onMouseEnter={mouseEnterHandler} className="fas fa-shopping-basket"></i>
      <span>{itemCount}</span>
    </StyledBasket>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(Basket);