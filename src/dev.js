import './dev.scss';
import ReactAvatarInfo from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
