import {Button} from 'antd'

const ControlButton = ({ onClick, next, back }) => (
  <div>
    <Button
      style={{ float: 'right' }}
      htmlType="submit"
      onClick={result => onClick('Next', result)}
      type="primary"
    >
      {next}
    </Button>
    <Button htmlType="submit" onClick={result => onClick('Back', result)}>
      {back}
    </Button>
  </div>
)

export default ControlButton