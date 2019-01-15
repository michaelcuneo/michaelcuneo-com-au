import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

export default class Modal extends React.Component {
  constructor(props) {
    super();
    this.hideOnOuterClick = this.hideOnOuterClick.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);

    let opacity = 0;
    let display = 'block';
    let visibility = 'hidden';

    if (props.show) {
      opacity = 1;
      display = 'block';
      visibility = 'visible';
    }

    this.state = {
      opacity,
      display,
      visibility,
      show: props.show,
    };
  }

  componentWillReceiveProps(props) {
    if (this.props.show !== props.show) {
      if (this.props.transitionSpeed) {
        if (props.show === true) this.fadeIn();
        else this.fadeOut();
      } else this.setState({ show: props.show });
    }
  }

  hideOnOuterClick(event) {
    if (this.props.closeOnOuterClick === false) return;
    if (event.target.dataset.modal && this.props.onClose instanceof Function)
      this.props.onClose(event);
  }

  fadeIn() {
    this.setState(
      { display: 'block', visibility: 'visible', show: true },
      () => {
        setTimeout(() => {
          this.setState({ opacity: 1 });
        }, 10);
      },
    );
  }

  fadeOut() {
    this.setState({ opacity: 0 }, () => {
      setTimeout(() => {
        this.setState({ show: false });
      }, this.props.transitionSpeed);
    });
  }

  render() {
    if (!this.state.show) return null;
    let modalStyle;
    let containerStyle;

    // completely overwrite if they use a class
    if (this.props.className) {
      this.modalStyle = this.props.style;
      this.containerStyle = this.props.containerStyle;
    } else {
      modalStyle = Object.assign({}, styles.modal, this.props.style);
      containerStyle = Object.assign(
        {},
        styles.container,
        this.props.containerStyle,
      );
    }
    if (this.props.transitionSpeed)
      modalStyle = Object.assign({}, this.state, modalStyle);

    return (
      <div
        {...filteredProps(this.props)}
        tabIndex={0}
        role="button"
        style={modalStyle}
        onClick={this.hideOnOuterClick}
        data-modal="true"
        onKeyDown={this.hideOnOuterClick}
        onKeyUp={this.hideOnOuterClick}
        onKeyPress={this.hideOnOuterClick}
      >
        <div style={styles.pointer}>&#9650;</div>
        <div className={this.props.containerClassName} style={containerStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeOnOuterClick: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.string,
  containerStyle: PropTypes.string,
  containerClassName: PropTypes.string,
  children: PropTypes.object,
  show: PropTypes.bool,
  transitionSpeed: PropTypes.number,
  onClose: PropTypes.any,
};

function filteredProps(props) {
  const filtered = Object.assign({}, props);
  [
    'containerStyle',
    'containerClassName',
    'closeOnOuterClick',
    'show',
    'onClose',
    'transitionSpeed',
  ].map(p => {
    delete filtered[p];
    return filtered;
  });
}

export const closeStyle = styles.close;
