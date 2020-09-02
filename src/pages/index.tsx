import React, { Fragment, useEffect, useState } from 'react';
import { Tabs, Spin } from 'antd';
const { TabPane } = Tabs;
import Listitem from './List';
import 'antd/dist/antd.css';
import styles from './index.less';
interface Instate { };

const List: React.SFC<Instate> = (props) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [finishData, setFinshdata] = useState<any>([]);
  const [unfinishData, setunfinishData] = useState<any>([]);
  const [key, setKey] = useState<any>('all');
  enum changeData {
    'all' = data,
    'finish' = finishData,
    'unfinish' = unfinishData
  }

  useEffect(() => {
    let demoData = []
    for (let i = 1; i < 5; i++) {
      demoData.push({
        id: i,
        text: `test${i}`,
        finish: false
      })
    }
    setData(demoData);
  }, []);

  const loadingPublic = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  const onCallback = (value: any) => {
    setKey(value);
    loadingPublic();
  }

  const onDelete = (value: any, index: number) => {
    let testData = data;
    testData[index].finish = !testData[index].finish;
    setFinshdata(testData.filter((item: any) => item.finish));
    setData(testData);
    setunfinishData(testData.filter((item: any) => !item.finish));
    loadingPublic();
  }

  return (
    <Fragment>
      <div
        className={`${styles.wrap} ${isOpen ? styles.buttonRight : styles.buttonLeft}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className={`${styles.childWrap} ${isOpen ? styles.down : styles.open}`}></div>
      </div>

      <div className={styles.tabsWrap}>
        <Spin spinning={loading}>
          <Tabs defaultActiveKey="all" onChange={onCallback}>
            <TabPane tab="全部" key="all" />
            <TabPane tab="完成" key="finish" />
            <TabPane tab="未完成" key="unfinish" />
          </Tabs>
          <Listitem data={changeData[key]} onDelete={onDelete} />
        </Spin>
      </div>
    </Fragment>
  )
}
export default List;