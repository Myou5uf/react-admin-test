import {Datagrid, EditButton, List, ReferenceField, ReferenceInput, TextField, TextInput} from 'react-admin';

const postFilters = [
  <TextInput key={0} source="q" label="Search" alwaysOn/>,
  <ReferenceInput key={1} source="userId" label="Пользователи" reference="users" helperText="Пользователи"/>,
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <TextField source="id"/>
      <ReferenceField source="userId" reference="users" link="show"/>
      <TextField source="title"/>
      <EditButton/>
    </Datagrid>
  </List>
);