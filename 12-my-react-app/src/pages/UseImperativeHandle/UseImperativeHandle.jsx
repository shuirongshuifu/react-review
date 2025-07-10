import React, { useRef, useImperativeHandle, useState, forwardRef } from 'react';

const Level2 = forwardRef((props, ref) => {
    const [num, setNum] = useState(666); // 使用 useState 管理状态

    const logFn = () => {
        console.log('我是子组件，num=' + num);
    };

    useImperativeHandle(ref, () => {
        return {
            setNum, // 暴露修改状态的方法
            logFn
        };
    });

    return (
        <div>
            <h2>我是子组件{num}</h2>
        </div>
    );
});

export default function UseImperativeHandle() {
    const childRef = useRef(null);

    const visit = () => {
        /**
         * React 中状态更新的异步特性。当调用 childRef.current.setNum(999) 后
         * 立即执行 childRef.current.logFn()，此时状态更新可能尚未完成，
         * 因此打印的还是旧值 666。
         * 为了确保获取到最新的状态值，可以使用 setTimeout 包裹 logFn 调用，
         * 这样可以确保在状态更新完成后再执行 logFn。
         * 类似于nextTick的效果。
         * */
        childRef.current.setNum(999); // 通过暴露的方法修改状态
        // childRef.current.logFn();
        setTimeout(() => {
            childRef.current.logFn();
        }, 0);

        /**
          为什么 React 要这样设计？
            React 的状态更新异步性是为了：
            性能优化（批量更新）
            保证一致性（避免中间状态导致的UI不一致）
            更好的并发模式支持
         * */
    };

    return (
        <div>
            <h3>UseImperativeHandle把子组件的方法和数据暴露给父组件</h3>
            <br />
            <button onClick={visit}>点击访问子组件</button>
            <Level2 ref={childRef} />
        </div>
    );
}