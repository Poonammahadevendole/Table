import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "antd";



function App() {
  const [loading ,setloding] = useState(false)
  const [dataSource, setDataSource]= useState([])
  useEffect(() => {
    setloding(true)
        fetch ("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data =>{
          setDataSource(data)
        }).catch(err=>{
          console.log(err)
        }).finally(() =>{
          setloding(false)

        })},[] )
      
  const columns=[
    {
      key:"1",
      title:"ID",
      dataIndex:"id",
      
    },
    {
      key:"2",
      title:" User Id",
      dataIndex:"userId",
      sorter:(record1,record2)=>{
        return record1.userID >record2.userID 
      }
    },
    {
      key:"3",
      title:" Title",
      dataIndex:"title",
      render:title =>{
        return <a > {title}</a>
      }
    },
    {
      key:"4",
      title:"status",
      dataIndex:"completed",
       render:(completed)=>{
         return <p>{completed? 'completed':'In progres'}</p>
       },
       filters:[
         {text:'complete',value:true},
         { text:'In progress',value:false}
       ],
       onFilter:(value,record)=>{
          return record .completed === value
       }
    },
  ]
  
    // const onAddPerson=() =>{
    //   const randomNumber = parseInt(Math,random()*1000)
    //   const newPerson = {
    //     key:randomNumber,
    //     dataIndex:"id"+randomNumber,
    //   }
    //   setDataSource=(pre=>{ 
    //     return[...pre ,newPerson]
    //   })   
    // }

  return (
    <div className="App">
      <header className="App-header">
       <Table
       loading={loading}
            columns={ columns}
            dataSource={dataSource}
            pagination={true}>
       </Table>
       <button onClick={columns} dataSource={dataSource}> Add new row</button>
       
        </header>
         </div>
    
  );
  }

export default App;
