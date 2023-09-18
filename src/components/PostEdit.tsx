import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import MyTitle from "./MyTitle";

export const PostEdit = () => (
  <Edit title={<MyTitle/>}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="userId" reference="users" link="show" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
)