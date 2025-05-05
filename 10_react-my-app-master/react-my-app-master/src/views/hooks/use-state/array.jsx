import React from "react";
import { Button, Divider } from "antd";
import { useImmer } from 'use-immer'


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