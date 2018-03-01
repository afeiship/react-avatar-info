import React, { cloneElement, Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    gap: PropTypes.string,
    elements: PropTypes.array,
    size: PropTypes.array,
    onAvatarClick: PropTypes.func,
    align: PropTypes.oneOf(['center','space-between','space-around'])
  };

  static defaultProps = {
    size:['50px'],
    gap:'10px',
    align: 'center',
  };
  /*===properties end===*/

  render() {
    const {
      className,
      elements,
      src,
      gap,
      size,
      align,
      onAvatarClick,
      ...props
    } = this.props;
    return (
      <section {...props} data-align={align} className={classNames('react-avatar-info', className)}>
        <figure onClick={onAvatarClick} className="react-avatar-info-img" style={{ width:size[0], height:size[1] || size[0]}}>
          <img src={src} alt=""/>
        </figure>
        <aside className="react-avatar-info-extra" style={{ paddingLeft: gap }}>
          {
            elements.map((elem,index)=>{
              return React.cloneElement(elem,{ key: index });
            })
          }
        </aside>
      </section>
    );
  }
}
