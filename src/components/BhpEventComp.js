import React from 'react'

export default function BhpEventComp() {

    const bhp_Func1 = () => {
        alert("Xin chào");
    };

    const bhp_Func2 = (param) => {
        alert(param);
    };

    return (
        <div>
            <h1>Event - Bhp Component Function</h1>
            <button onClick={bhp_Func1}>Click Here</button>

            {/* gọi hàm có tham số */}
            <button onClick={() => bhp_Func2('Bùi Hữu Phúc')}>Click Here Param</button>
        </div>
    );
}
