import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';

interface IAccordionBlockProps {
  expanded: boolean;
  onChange: any;
  record: any;
  [propName: string]: any;
}
function AccordionBlock(props: IAccordionBlockProps) {
  const { expanded, onChange, record } = props;
  const Accordion = withStyles({
    root: {
      boxShadow: 'none',
      '&:before': {
        display: 'none'
      },
      '&$expanded': {
        margin: 0
      }
    },
    expanded: {}
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      '&$expanded': {
        minHeight: 'unset'
      }
    },
    content: {
      '&$expanded': {
        margin: '6px 0'
      }
    },
    expanded: {}
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles(() => ({
    root: {
      padding: 0,
      flex: 1
    }
  }))(MuiAccordionDetails);

  const showExpandIcon = (id): JSX.Element => {
    return expanded === id ? <RemoveIcon /> : <AddIcon />;
  };

  return (
    <Accordion square expanded={expanded === record.id} onChange={(): void => onChange(record.id)}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={showExpandIcon(record.id)}>
        <Typography variant="caption">{record.label || 'label'}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="accordion-panel">{'这是啥'}</div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionBlock;
