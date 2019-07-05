import React, { Component } from "react";
import './Pager.css'

class Pager extends Component {
  constructor(props) {
    super(props);

    this.handleJump = this.handleJump.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleJumpTo = this.handleJumpTo.bind(this);
  }

  handleJump(event) {
    this.props.onJumpTo(event);
  }
  handleClick(event) {
    this.props.onChange({
      change: parseInt(event.target.value)
    });
  }
  handleChange(event) {
    const pageNo = event.target.value && parseInt(event.target.value);
    if (!pageNo || (pageNo >= 0 && pageNo < this.props.pageMax)) {
      this.props.onChange({
        no: pageNo
      });
    } else {
      console.warn('invald pageNo[' + pageNo + '].');
    }
  }
  handleChangeSize(event) {
    this.props.onChange({
      size: parseInt(event.target.value)
    });
  }
  handleJumpTo(event) {
    this.props.onChange({
      direct: parseInt(event.target.value)
    });
  }

  render() {
    const btnActive = "btn-active";
    const result = [];
    const pageSize = this.props.pageSize || 5;
    [5,10,20].map(BookPageSize => {
      result.push(
        <button
          key={BookPageSize}
          onClick={this.handleChangeSize}
          value={BookPageSize}
          class={pageSize == BookPageSize ? btnActive : ""}>
          {BookPageSize}
        </button>
      );
    })
    const pageNoTemp = this.props.pageNoTemp;
    const pageNo = this.props.pageNo;
    const pageMax = this.props.pageMax;
    result.push(
      <button onClick={this.handleJumpTo} value="0" class={(pageNo && pageNo > 0) ? btnActive : ""}>
        第一页
      </button>
    )
    result.push(
      <button onClick={this.handleClick} value="-1" class={(pageNo && pageNo > 0) ? btnActive : ""}>
        上一页
      </button>
    )

    result.push(
      <input type="number" min="-1" max={pageMax} value={pageNoTemp} onChange={this.handleChange} />
    )
    result.push(
      <button onClick={this.handleJump} class={(pageNoTemp != '' && pageNo != pageNoTemp) ? btnActive : "" }>跳转</button>
    )
    result.push(
      <button onClick={this.handleClick}
        value="1"
        class={((pageMax && (pageMax - 1) > pageNo) || !pageMax) ? btnActive : ""}>
        下一页
      </button>
    )
    result.push(
      <button onClick={this.handleJumpTo}
        value={pageMax - 1}
        class={((pageMax && (pageMax - 1) > pageNo) || !pageMax) ? btnActive : ""}>
        末页
      </button>
    )
    return (
      <div>
        {result}
      </div>
    );
  }
}

export default Pager;
