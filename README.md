# react-avatar-info
> Avatar info for react.


## properties:
```javascript

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
  
```

## usage:
```jsx

// install: npm install afeiship/react-avatar-info --save
// import : import ReactAvatarInfo from 'react-avatar-info'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-avatar-info">
        <ReactAvatarInfo gap="5px" src="http://placeholder.qiniudn.com/80x80" size={['40px']} elements={
          [
            <div style={{ fontWeight:'bold'}}>sldkfjlsdjf</div>,
            <div style={{ marginTop:10 }}>title span</div>
          ]
        } ref='rc' />
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
