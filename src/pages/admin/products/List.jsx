import React, { Component } from 'react'
import { Card, Table, Button, Popconfirm } from 'antd'
class List extends Component {
  render() {
    const columns = [
      {
        title: '序號',
        key: 'id',
        width: 80,
        align: 'center',
        render: (txt, recored, index) => {
          return index + 1
        },
      },
      {
        title: '名字',
        dataIndex: 'name',
      },
      {
        title: '价格',
        dataIndex: 'price',
      },
      {
        title: '操作',
        render: (txt, recored, index) => {
          return (
            <div>
              <Button type="primary" size="small">
                修改
              </Button>
              <Popconfirm
                title="确定删除吗"
                onCancel={() => {
                  console.log('取消删除')
                }}
                onConfirm={() => {
                  console.log('确认删除')
                }}
              >
                <Button type="danger" size="small" style={{ margin: '0 1rem' }}>
                  删除
                </Button>
              </Popconfirm>
            </div>
          )
        },
      },
    ]
    const dataSource = [
      {
        id: 1,
        name: '香皂',
        price: 5,
      },
      {
        id: 2,
        name: '牛奶',
        price: 7,
      },
      {
        id: 3,
        name: '面包',
        price: 10,
      },
    ]
    return (
      <Card
        title="商品列表"
        extra={
          <Button
            type="primary"
            size="small"
            onClick={() => {
              this.props.history.push('/admin/products/edit')
            }}
          >
            新增
          </Button>
        }
      >
        <Table rowKey="id" columns={columns} bordered dataSource={dataSource} />
      </Card>
    )
  }
}

export default List
