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
            <div style={{ marginTop:10 }}>title span</div>
          ]
        } ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
