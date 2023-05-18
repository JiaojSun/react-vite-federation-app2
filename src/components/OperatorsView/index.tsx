import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import AccordionBlock from './components/AccordionBlock';

function OperatorsView(props) {
  const [expanded, setExpanded] = useState(false); // 手风琴是否展开

  const handleChange = (expandedValue): void => {
    setExpanded(expandedValue === expanded ? null : expandedValue);
  };

  useEffect(() => {
    console.log('props=========shared====1===');
    console.log(props);
  }, []);

  return (
    <div className={styles.wrap}>
      {[{ id: 1 }, { id: 2 }].map((item: any) => {
        return <AccordionBlock expanded={expanded} key={item.id} onChange={handleChange} record={item} />;
      })}
    </div>
  );
}

export default OperatorsView;
