import React, {Component} from 'react';
import {Table, ColumnGroup, Column, Tag} from 'antd';

class ResultadoCotizacion extends Component {
  render() {
    const {data} = this.props;
    return (
      <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <span>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </span>
          )}
        />
      </Table>
    );
  }
}

export default ResultadoCotizacion;
