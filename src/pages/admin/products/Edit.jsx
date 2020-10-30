import React, { Component } from 'react'
import { Form, Card, Input, Button } from 'antd'

class Edit extends Component {
  onFinish = (e) => {
    console.log(e)
  }
  priceValidator = (rule, value, callback) => {
    if (value * 1 > 100) {
      callback('不能大于100')
    } else {
      callback()
    }
  }
  render() {
    return (
      <Card title="商品编辑">
        <Form onFinish={this.onFinish}>
          <Form.Item
            label="名字"
            name="shopName"
            rules={[{ required: true, message: '请输入商品名称' }]}
          >
            <Input placeholder="请输入商品名称" />
          </Form.Item>
          <Form.Item
            label="价格"
            name="shopPrice"
            rules={[
              { required: true, message: '请输入商品价格' },
              {
                validator: this.priceValidator,
              },
            ]}
          >
            <Input placeholder="请输入商品价格" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export default Edit
