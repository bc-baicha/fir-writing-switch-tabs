import React, { Fragment } from 'react';
import { List, Row, Col, Typography } from 'antd';
import 'antd/dist/antd.css';
import { DeleteOutlined } from '@ant-design/icons';
interface Initstate {
  data: any,
  onDelete: Function
};
const { Text } = Typography;
const Listdemo: React.FC<Initstate> = (props) => {
  const { data, onDelete } = props;
  return (
    <Fragment>
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item: any, index) => {
          return (
            <List.Item>
              <Row style={{ width: '100%' }} justify='space-between'>
                <Col><Text delete={item?.finish}>{item?.text ?? ''}</Text></Col>
                <Col onClick={() => onDelete(item, index)}> <Text disabled={item?.finish}><DeleteOutlined /></Text></Col>
              </Row>
            </List.Item>
          )
        }}

      />
    </Fragment>
  )
}
export default Listdemo;