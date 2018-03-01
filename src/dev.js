import './dev.scss';
import ReactAvatarInfo from './main';

/*===example start===*/

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
              src="http://placeholder.qiniudn.com/80x80"
              elements={[
                <div className="title"><b>title</b></div>,
                <div className="description">desc1</div>,
                <div className="description">title</div>,
                <div className="description">desc</div>
              ]}
            />
            <ReactAvatarInfo
              align='flex-start'
              src="http://placeholder.qiniudn.com/80x80"
              elements={[
                <div className="title"><b>title</b></div>,
                <div className="description">desc1</div>,
                <div className="description">title</div>,
                <div className="description">desc</div>
              ]}
            />
            <ReactAvatarInfo
              align='flex-end'
              src="http://placeholder.qiniudn.com/80x80"
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
            <h3>justify:true/false</h3>
            <ReactAvatarInfo
              align='stretch'
              justify='between'
              src="http://placeholder.qiniudn.com/80x80"
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
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
