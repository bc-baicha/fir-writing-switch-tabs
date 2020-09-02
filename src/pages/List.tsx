import React, { Fragment } from 'react';
import { List, Row, Col, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Text } = Typography;
interface Initstate {
  data: any,
  onDelete: Function
};

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