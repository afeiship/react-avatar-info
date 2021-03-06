# react-avatar-info
> Avatar info for react.


## properties:
```javascript

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
  
```

## usage:
```jsx

// install: npm install afeiship/react-avatar-info --save
// import : import ReactAvatarInfo from 'react-avatar-info'

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-avatar-info">
        <div className="row">
          <div className="col">
            <h3>Align:center/top/bottom</h3>
            <ReactAvatarInfo
              align='center'
              avatar={<img src="http://placeholder.qiniudn.com/80x80" />}
              extra={<a href="#">More</a>}
              elements={[
                <div className="title"><b>title</b></div>,
                <div className="description">desc1</div>,
                <div className="description">title</div>,
                <div className="description">desc</div>
              ]}
            />
            <ReactAvatarInfo
              align='flex-start'
              avatar={<img src="http://placeholder.qiniudn.com/80x80" />}
              elements={[
                <div className="title"><b>title</b></div>,
                <div className="description">desc1</div>,
                <div className="description">title</div>,
                <div className="description">desc</div>
              ]}
            />
            <ReactAvatarInfo
              align='flex-end'
              avatar={<img src="http://placeholder.qiniudn.com/80x80" />}
              elements={[
                <div className="title"><b>title</b></div>,
                <div className="description">desc1</div>,
                <div className="description">title</div>,
                <div className="description">desc</div>
              ]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>justify: space-between /space-around</h3>
            <ReactAvatarInfo
              align='stretch'
              justify='space-around'
              avatar={<img src="http://placeholder.qiniudn.com/80x80" />}
              elements={[
                <div className="title"><b>title</b></div>,
                <div className="description">desc</div>
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

```

## customize style:
```scss
// customize your styles:
$react-avatar-info-options:(
);

@import '~node_modules/react-avatar-info/style.scss';
```
