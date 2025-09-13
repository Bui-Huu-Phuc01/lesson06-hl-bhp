import React, { Component } from 'react';

class BhpEventCompClass extends Component {

    bhp_Func1 = () => {
        alert("Hàm không có tham số");
    }

    bhp_Func2 = (param) => {
        alert("Hàm có tham số:\n" + param);
    }

    render() {
        return (
            <div>
                <h2>Event in Bhp Class Component</h2>
                <button onClick={this.bhp_Func1}>Click</button>
                <button onClick={() => this.bhp_Func2("Bùi Hữu Phúc")}>Click Param</button>
            </div>
        );
    }
}

export default BhpEventCompClass;
