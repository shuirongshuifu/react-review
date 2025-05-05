import React from "react";
import { Button, Divider } from "antd";
import { useImmer } from 'use-immer'
// use-immer 是一个库，提供了一个 hook 来使用 immer 库的功能。
// immer 库是一个用于简化不可变数据更新的库，可以让你以可变的方式来操作数据，但在底层会自动处理不可变性。
// 这使得在 React 中处理复杂状态时更加简单和直观。
// use-immer 提供了一个 useImmer hook，你可以使用它来创建一个可变的 draft 对象，并在其中进行修改。
// 当你完成修改后，useImmer 会自动将 draft 对象转换为不可变的状态，并将其传递给你的组件。
// 这使得在 React 中使用 immer 的功能变得更加方便和易于理解。



const UseStateArray = () => {
    const [data, setData] = useImmer([
        {
          name: 'zhangsan',
          age: 18
        }
    ]);

    return (
        <>
        <div>
          <h1>数组 增加</h1>
          <Button onClick={() => {
            setData((draft) => {
              draft.push({
                name: 'lisi',
                age: 18
              })
            })
          }}>
           加一条数据
          </Button>
          {/* JSON.stringify的三个参数
          第一个参数是要转换的值
          第二个参数是用于替换值的一个函数，该函数有两个参数，第一个参数是当前值，第二个参数是当前值的键名。
          函数的返回值将替换当前值。
          第三个参数是用于缩进输出的空格数。
          */}
          <pre>{JSON.stringify(data,null,2)}</pre>
        </div>

          <Divider />


          <div>
          <h1>数组删除最后一条数据</h1>
          <Button onClick={() => {
            setData((draft) => {
              draft.splice(-1, 1)
            })
          }}>
           减一条数据
          </Button>
          <pre>{JSON.stringify(data,null,2)}</pre>
        </div>

        <Divider />


        <div>
          <h1>数组对第一条数据age + 1</h1>
          <Button onClick={() => {
            setData((draft) => {
                draft[0].age++
            })
          }}>
           age++
          </Button>
          <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
        </>
    )
}


export default UseStateArray;