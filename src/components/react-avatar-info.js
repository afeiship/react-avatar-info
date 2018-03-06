import React, { cloneElement, Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    radius: PropTypes.string,
    gap: PropTypes.string,
    avatar: PropTypes.element,
    extra: PropTypes.element,
    elements: PropTypes.array,
    size: PropTypes.array,
    onAvatarClick: PropTypes.func,
    align: PropTypes.oneOf(['flex-start','center','flex-end','stretch']),
    justify: PropTypes.oneOf(['space-between','space-around']),
  };

  static defaultProps = {
    size:['50px'],
    gap:'10px',
    radius:'100px',
    align: 'center',
    justify:'space-between'
  };
  /*===properties end===*/

  render() {
    const {
      className,
      elements,
      gap,
      avatar,
      extra,
      radius,
      size,
      align,
      justify,
      onAvatarClick,
      ...props
    } = this.props;
    return (
      <section {...props} data-align={align} className={classNames('react-avatar-info', className)}>
        <figure onClick={onAvatarClick} className="react-avatar-info-avatar" style={{
          borderRadius:radius,
          width:size[0],
          height:size[1] || size[0]
        }}>
          { avatar }
        </figure>
        <aside className="react-avatar-info-elements" data-justify={justify} style={{ paddingLeft: gap }}>
          {
            elements.map((elem,index)=>{
              return React.cloneElement(elem,{ key: index });
            })
          }
        </aside>
        { extra }
      </section>
    );
  }
}
