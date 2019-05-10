import React, { Component } from "react";
import PropTypes from "prop-types";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label } } = this;

    return (
      // <div
      //   style={{
      //     background: isOpen ? "#fae042" : "#6db65b",
      //     border: "1px solid #008f68",
      //     padding: "5px 10px"
      //   }}
      // >
      <div className="accordion-section text-small">
        <div className="accordion-section__header" onClick={onClick}>
          {label}
        </div>
        {isOpen && (
          <div className="accordion-section__content">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
