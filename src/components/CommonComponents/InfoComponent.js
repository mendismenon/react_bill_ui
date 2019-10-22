import React, { Component } from 'react'
import { Button, Modal, Header} from 'semantic-ui-react'

class InfoComponent extends Component {
  state = { open: false ,closeOnEscape:false,closeOnDimmerClick:false,icon:"",mainHead:"",content:""}
  componentWillReceiveProps(nextProps)
  {
    debugger;
    
      this.closeConfigShow(true, false,nextProps);
    
  }
  closeConfigShow = (closeOnEscape, closeOnDimmerClick,nextProps)  => {
    let licon ="";
    if(nextProps.compType === "E")
    {
        licon = "close";
    }
    else
    {
        licon = "info icon";
    }
    this.setState({ closeOnEscape, closeOnDimmerClick, open: nextProps.openClose, icon : licon,mainHead:nextProps.mainHead, content:nextProps.content })
  }

  close = () => {
     this.setState({ open: false , mainHead:""})
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div className="InfoErrCmp">
        {/*<Button onClick={this.closeConfigShow(false, true)}>
          No Close on Escape
        </Button>
        <Button onClick={this.closeConfigShow(true, false)}>
          No Close on Dimmer Click
        </Button>*/}

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          {/*<Modal.Header icon="close icon">Delete Your Account</Modal.Header>*/}
          <Header icon={this.state.icon} content={this.state.mainHead} />
          <Modal.Content>
            <p>{this.state.content}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={this.close}
              className="InfoErrCmpBtn"
              positive
              labelPosition='right'
              icon="check circle"
              content='OK'
              style={{paddingRight: "20px !important"}}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default InfoComponent
