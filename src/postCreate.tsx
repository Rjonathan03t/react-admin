import * as React from "react";
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin';

export const PostCreate = (props:CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="user.name" />
        </SimpleForm>
    </Create>
);
