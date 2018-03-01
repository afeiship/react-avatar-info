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
    align: null,
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
            <div style={{ marginTop:5 }}>title span</div>
          ]
        } ref='rc1' />

        <ReactAvatarInfo gap="5px" src="http://placeholder.qiniudn.com/100x800" size={['50px']} elements={
          [
            <div style={{ color:'green'}}>sldkfjlsdjf</div>,
            <div style={{ marginTop:20 }}>title span</div>
          ]
        } ref='rc2' />

        <ReactAvatarInfo gap="5px" src="http://placeholder.qiniudn.com/800x100" size={['50px']} elements={
          [
            <div style={{ color:'red'}}>sldkfjlsdjf</div>,
            <div style={{ marginTop:40 }}>title span</div>
          ]
        } ref='rc3' />
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
