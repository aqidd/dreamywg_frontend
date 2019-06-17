import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { inject } from 'mobx-react';
import ReactDOM from 'react-dom';

@inject('store')
class CredentialForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.processData(e.target.name, values)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form name='credential-form' onSubmit={this.handleSubmit} className="credential-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="credential-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="credential-form-button">
            Submit
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedCredentialForm = Form.create({ name: 'credential_info' })(CredentialForm);

export default WrappedCredentialForm
// ReactDOM.render(<WrappedCredentialForm />, document.querySelector('#root'));