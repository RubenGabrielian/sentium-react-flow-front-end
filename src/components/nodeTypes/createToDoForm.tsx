import React from 'react';
import { Button, Form, Input } from 'antd';
import { ITodo, ITodoCreate } from '@/entities/todo';

const { TextArea } = Input;


interface IProps {
    data: ITodo,
    handleFinish: (values: ITodoCreate) => void
}

const CreateToDoForm = ({ data, handleFinish }: IProps): JSX.Element => {
    return (
        <Form
            layout={'vertical'}
            onFinish={handleFinish}>
            <Form.Item label={'Title'} name={'title'}>
                <Input />
            </Form.Item>
            <Form.Item label={'Description'} name={'description'}>
                <TextArea />
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} htmlType={'submit'} block>
                    {data?.title ? 'Edit' : 'Create'}
                </Button>
            </Form.Item>
        </Form>
    );
}

export default CreateToDoForm;