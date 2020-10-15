import React, { Fragment, useEffect, useState } from 'react';
import { Tabs, Spin } from 'antd';
const { TabPane } = Tabs;
import Listitem from './List';
import 'antd/dist/antd.css';
import styles from './index.less';
interface Instate { };

const List: React.FC<Instate> = (props) => {
  document.title = 'Todolist';
  const [isOpen, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [allData, setAlldata] = useState<any>([]);
  const [finishData, setFinshdata] = useState<any>([]);
  const [unfinishData, setunfinishData] = useState<any>([]);
  const [key, setKey] = useState<any>('all');
  enum changeData {
    'all' = allData,
    'finish' = finishData,
    'unfinish' = unfinishData
  }

  useEffect(() => {
    let demoData = []
    for (let i = 1; i < 5; i++) {
      demoData.push({
        id: i,
        text: `demo${i}`,
        finish: false
      })
    }
    setData(demoData);
    setAlldata(demoData);
  }, []);

  const loadingPublic = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  //tabs回调
  const onCallback = (value: any) => {
    setKey(value);
    const activeData: any = new Map([
      ['all', setAlldata(data)],
      ['finish', setFinshdata(data.filter((item: any) => item.finish))],
      ['unfinish', setunfinishData(data.filter((item: any) => !item.finish))],
    ]);
    activeData.set(value);
    loadingPublic();
  }

  //删除
  const onDelete = (value: any, index: number) => {
    let testData = data;
    testData[index].finish = !testData[index].finish;
    setAlldata(testData);
    loadingPublic();
  }

  return (
    <div className={styles.mainWrap}>
      <div
        className={`${styles.wrap} ${isOpen ? styles.buttonRight : styles.buttonLeft}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className={`${styles.childWrap} ${isOpen ? styles.down : styles.open}`}></div>
      </div>
      <div className={styles.titleWrap}>Todolist</div>
      <div className={styles.tabsWrap}>
        <Spin spinning={loading}>
          <Tabs defaultActiveKey="all" onChange={onCallback}>
            <TabPane tab="全部" key="all" />
            <TabPane tab="删除" key="finish" />
            <TabPane tab="未删除" key="unfinish" />
          </Tabs>
          <Listitem data={changeData[key]} onDelete={onDelete} />
        </Spin>
      </div>
    </div>
  )
}
export default List;